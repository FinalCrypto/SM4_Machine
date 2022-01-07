use std::mem::swap;

use block_modes::{
    block_padding::ZeroPadding, 
    BlockMode, IvState
};
use cipher::{
    BlockCipher, 
    generic_array::{
        GenericArray,
    },
    Block, 
    BlockEncrypt, 
    BlockDecrypt,
};
use cipher::generic_array::typenum::Unsigned;
use crate::utils::xor;

/// [Cipher Block Chaining][1] (CBC) block cipher mode instance.
///
/// [1]: https://en.wikipedia.org/wiki/Block_cipher_mode_of_operation#CBC
#[derive(Clone)]
pub struct CbcCts<C: BlockCipher + BlockEncrypt + BlockDecrypt> {
    cipher: C,
    iv: GenericArray<u8, C::BlockSize>,
    pub cts_num: Option<usize>
}

impl<C: BlockCipher + BlockEncrypt + BlockDecrypt> CbcCts<C> {
    pub fn pad_len(&mut self, buf: &[u8]) -> usize {
        let bs = C::BlockSize::to_usize();
        let len = buf.len();
        let remainder = len % bs;
        if remainder != 0 { 
            bs - remainder 
        } else {
            0
        }
    }

    pub fn set_cts_num(&mut self, cts_num: usize) {
        self.cts_num = Some(cts_num);
    }    
}

impl<C> BlockMode<C, ZeroPadding> for CbcCts<C>
where
    C: BlockCipher + BlockEncrypt + BlockDecrypt
{
    type IvSize = C::BlockSize;

    fn new(cipher: C, iv: &Block<C>) -> Self {
        Self {
            cipher,
            iv: iv.clone(),
            cts_num: None
        }
    }

    /// blocks.len() must >= 2
    fn encrypt_blocks(&mut self, blocks: &mut [Block<C>]) {
        let n = blocks.len();

        blocks[0].copy_from_slice(&self.iv);
        let mut iv = &self.iv;
        for block in blocks[1..].iter_mut() {
            xor(block, &iv);
            self.cipher.encrypt_block(block);
            iv = block;
        }

        let mut tmp = blocks[n - 2].clone();
        // steal the ciphertext
        tmp[C::BlockSize::to_usize() - self.cts_num.unwrap()..].fill(0);
        swap(&mut tmp, &mut blocks[n - 1]);
        blocks[n - 2] = tmp;
    }

    fn decrypt_blocks(&mut self, blocks: &mut [Block<C>]) {
        self.iv.copy_from_slice(&blocks[0]);

        let n = blocks.len();
        let (normal, padded) = blocks.split_at_mut(n - 2);

        let mut iv = self.iv.clone();
        for block in normal {
            let block_copy = block.clone();
            self.cipher.decrypt_block(block);
            xor(block, iv.as_slice());
            iv = block_copy;
        }

        // for CBC CS3 mode, now prev is C_n, last is MSB_d(C_{n-1})
        if let ([prev], [last]) = padded.split_at_mut(1) {
            // swap prev and last, now prev is  MSB_d(C_{n-1}), last is C_n
            swap(prev, last);

            self.cipher.decrypt_block(last);
            xor(last, prev);

            // revocer stealed ciphertext to C_{n-1}
            let steal_start = C::BlockSize::to_usize() - self.cts_num.unwrap();
            prev[steal_start..].copy_from_slice(&last[steal_start..]);

            last[steal_start..].fill(0);
            self.cipher.decrypt_block(prev);
            xor(prev, &iv);
        }

    }
}

impl<C> IvState<C, ZeroPadding> for CbcCts<C>
where
    C: BlockCipher + BlockEncrypt + BlockDecrypt
{
    fn iv_state(&self) -> GenericArray<u8, Self::IvSize> {
        self.iv.clone()
    }
}

