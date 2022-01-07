use cipher::generic_array::GenericArray;
use cipher::{NewBlockCipher, BlockCipher};
use cipher::generic_array::typenum::Unsigned;
use sm4::Sm4;
use block_modes::BlockMode;
use ring::digest::{SHA256, digest};
use crate::cbc_cts::CbcCts;
use crate::enc::SALT;

pub fn decrypt_buffer(cipher: &mut [u8], mut key: String) -> Result<Vec<u8>, String> {
    key.insert_str(0, SALT);
    let key = digest(&SHA256, key.as_bytes());
    let key: &[u8] = key.as_ref();

    let mut decryptor: CbcCts<Sm4> = CbcCts::new(
        Sm4::new(key[..16].into()), 
        &GenericArray::default()
    );
    
    let bs: usize = <Sm4 as BlockCipher>::BlockSize::to_usize();
    let pos = cipher.len() - 1;
    let cts_num = cipher[pos] as usize;
    let padded_len = pos + cts_num;
    decryptor.set_cts_num(cts_num);
    
    let mut buf = Vec::with_capacity(padded_len);
    buf.extend_from_slice(&cipher[..pos]);
    // zero padding the last block
    buf.resize(padded_len, 0);

    decryptor.decrypt(&mut buf).map_err(|x| x.to_string())?;

    // the decrypted data is exactly the same length with the original data
    Ok(Vec::from(&buf[bs..pos]))
}

