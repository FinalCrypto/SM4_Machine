pub mod binding;
mod cbc_cts;
mod utils;
mod enc;
mod dec;

#[cfg(test)]
mod tests {
    use crate::{enc::encrypt_buffer, dec::decrypt_buffer};

    #[test]
    fn it_works() {
        let a = "hello".to_string();
        let mut res = encrypt_buffer(a.as_bytes(), "123".into()).unwrap();
        let dec = decrypt_buffer(&mut res, "123".to_string()).unwrap();

        println!("{:?}", String::from_utf8(dec).unwrap())
    }
}
