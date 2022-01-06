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
use crate::utils::xor;

/// [Cipher Block Chaining][1] (CBC) block cipher mode instance.
///
/// [1]: https://en.wikipedia.org/wiki/Block_cipher_mode_of_operation#CBC
#[derive(Clone)]
pub struct CbcCts<C: BlockCipher + BlockEncrypt + BlockDecrypt> {
    cipher: C,
    iv: GenericArray<u8, C::BlockSize>
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

        let mut tmp = blocks[n - 1].clone();
        swap(&mut tmp, &mut blocks[n - 2]);
        blocks[n - 1] = tmp;
    }

    fn decrypt_blocks(&mut self, blocks: &mut [Block<C>]) {
        let n = blocks.len();
        let mut tmp = blocks[n - 1].clone();
        swap(&mut tmp, &mut blocks[n - 2]);
        blocks[n - 1] = tmp;

        self.iv.copy_from_slice(&blocks[0]);

        let mut iv = self.iv.clone();
        for block in &mut blocks[1..] {
            let block_copy = block.clone();
            self.cipher.decrypt_block(block);
            xor(block, iv.as_slice());
            iv = block_copy;
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

