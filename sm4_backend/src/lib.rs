pub mod binding;
mod cbc_cts;
mod utils;
mod enc;
mod dec;

#[cfg(test)]
mod tests {
    use crate::{
        enc::encrypt_buffer, 
        dec::decrypt_buffer
    };

    #[test]
    fn short_block() {
        let a = "hello";
        let key = "123";

        let mut res = encrypt_buffer(a.as_bytes(), key).unwrap();
        let dec = decrypt_buffer(&mut res, key).unwrap();

        assert_eq!(String::from_utf8(dec).unwrap(), a);
    }

    #[test]
    fn one_block() {
        let a = "0123456789abcdef".to_string();
        let key = "123";

        let mut res = encrypt_buffer(a.as_bytes(), key).unwrap();

        let dec = decrypt_buffer(&mut res, key).unwrap();

        assert_eq!(String::from_utf8(dec).unwrap(), a);
    }

    #[test]
    fn multi_not_aligned_block() {
        let a = "0123456789abcdef0123456789abcdef0123456789abc";
        let key = "123";

        let mut res = encrypt_buffer(a.as_bytes(), key).unwrap();
        let dec = decrypt_buffer(&mut res, key).unwrap();

        assert_eq!(String::from_utf8(dec).unwrap(), a);
    }

    #[test]
    fn multi_aligned_block() {
        let a = "0123456789abcdef0123456789abcdef0123456789abcdef";
        let key = "123";

        let mut res = encrypt_buffer(a.as_bytes(), key).unwrap();
        let dec = decrypt_buffer(&mut res, key).unwrap();

        assert_eq!(String::from_utf8(dec).unwrap(), a);
    }
}
