pub mod binding;
mod cbc_cts;
mod utils;
mod enc;
mod dec;

#[cfg(test)]
mod tests {
    use crate::{enc::encrypt_buffer, dec::decrypt_buffer};

    #[test]
    fn short_block() {
        let a = "hello".to_string();
        let mut res = encrypt_buffer(a.as_bytes(), "123".into()).unwrap();
        let dec = decrypt_buffer(&mut res, "123".to_string()).unwrap();

        assert_eq!(String::from_utf8(dec).unwrap(), a);
    }

    #[test]
    fn one_block() {
        let a = "0123456789abcdef".to_string();
        let mut res = encrypt_buffer(a.as_bytes(), "123".into()).unwrap();
        let dec = decrypt_buffer(&mut res, "123".to_string()).unwrap();

        assert_eq!(String::from_utf8(dec).unwrap(), a);
    }

    #[test]
    fn multi_not_aligned_block() {
        let a = "0123456789abcdef0123456789abcdef0123456789abc".to_string();
        let mut res = encrypt_buffer(a.as_bytes(), "123".into()).unwrap();
        let dec = decrypt_buffer(&mut res, "123".to_string()).unwrap();

        assert_eq!(String::from_utf8(dec).unwrap(), a);
    }

    #[test]
    fn multi_aligned_block() {
        let a = "0123456789abcdef0123456789abcdef0123456789abcdef".to_string();
        let mut res = encrypt_buffer(a.as_bytes(), "123".into()).unwrap();
        let dec = decrypt_buffer(&mut res, "123".to_string()).unwrap();

        assert_eq!(String::from_utf8(dec).unwrap(), a);
    }
}
