use cipher::{
    NewBlockCipher, 
    BlockCipher, 
    Block,
    generic_array::typenum::Unsigned
};
use crate::sm4::Sm4;
use getrandom::getrandom;
use block_modes::BlockMode;
use ring::digest::{SHA256, digest};
use crate::cbc_cts::CbcCts;

pub const SALT: &'static str = "Built_By_RSP_ZF_WWH_XJW";

pub fn encrypt_buffer(plaintext: &[u8], key: &str) -> Result<Vec<u8>, String> {
    let salted = format!("{}{}", SALT, key);
    let key = digest(&SHA256, salted.as_bytes());
    let key: &[u8] = key.as_ref();

    let iv = {
        let mut secret = [0; 32];
        secret[..16].copy_from_slice(&key[16..]);
        getrandom(&mut secret[..16]).unwrap();
        let twice = digest(&SHA256, &secret);
        let mut iv = [0; 16];
        iv.copy_from_slice(&twice.as_ref()[..16]);
        iv
    };

    let mut encryptor: CbcCts<Sm4> = CbcCts::new(Sm4::new(key[..16].into()), &iv.into());
    let cts_num = encryptor.pad_len(plaintext);
    encryptor.set_cts_num(cts_num);

    let bs: usize = <Sm4 as BlockCipher>::BlockSize::to_usize();
    // IV and plaintext
    let pos = bs + plaintext.len();
    // prepare space for padding
    let padded = pos + cts_num;
    let mut buf = Vec::with_capacity(padded);

    let block: Block<Sm4> = Default::default();

    // prepare space for IV
    buf.extend_from_slice(&block);
    buf.extend_from_slice(plaintext);
    // zero padding the last block
    buf.resize(padded, 0);

    encryptor.encrypt(&mut buf, padded).map_err(|x| x.to_string())?;

    // the encrypted data is exactly the same length with the original data
    buf.truncate(pos);
    buf.push(cts_num.try_into().unwrap());
    Ok(buf)
}

