use cipher::{NewBlockCipher, BlockCipher, Block};
use cipher::generic_array::typenum::Unsigned;
use rand::{rngs::OsRng, RngCore};
use sm4::Sm4;
use block_modes::BlockMode;
use ring::digest::{SHA256, digest};
use crate::cbc_cts::CbcCts;

pub const SALT: &'static str = "Built_By_RSP_ZF_WWH_XJW";

pub fn encrypt_buffer(plaintext: &[u8], mut key: String) -> Result<Vec<u8>, String> {
    key.insert_str(0, SALT);
    let key = digest(&SHA256, key.as_bytes());
    let key: &[u8] = key.as_ref();

    let iv = {
        let mut secret = [0; 32];
        secret[..16].copy_from_slice(&key[16..]);
        OsRng.fill_bytes(&mut secret[..16]);
        let twice = digest(&SHA256, &secret);
        let mut iv = [0; 16];
        iv.copy_from_slice(&twice.as_ref()[..16]);
        iv
    };

    let encryptor: CbcCts<Sm4> = CbcCts::new(Sm4::new(key[..16].into()), &iv.into());
    
    let bs: usize = <Sm4 as BlockCipher>::BlockSize::to_usize();
    // plaintext and IV
    let pos = plaintext.len() + bs;
    // prepare space for padding
    let total = pos + bs;
    let mut buf = Vec::with_capacity(total);

    let block: Block<Sm4> = Default::default();

    // prepare space for IV
    buf.extend_from_slice(&block);
    buf.extend_from_slice(plaintext);
    // prepare space for padding
    buf.extend_from_slice(&block);

    encryptor.encrypt(&mut buf, pos).map_err(|x| x.to_string())?;

    // the encrypted data is exactly the same length with the original data
    buf.truncate(pos);
    Ok(buf)
}

