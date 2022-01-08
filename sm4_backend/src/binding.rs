use std::alloc::{set_alloc_error_hook, Layout};

use seed::prelude::js_sys::Uint8Array;
use wasm_bindgen::prelude::*;

use crate::{
    enc::encrypt_buffer, 
    dec::decrypt_buffer
};

#[wasm_bindgen]
extern {
    fn alert(s: &str);
}

pub fn oom(_: Layout) {
    alert("File is too large. OOM detected.");
}

// Export a `greet` function from Rust to JavaScript, that alerts a
// hello message.
#[wasm_bindgen]
pub async fn decrypt(cipher: Uint8Array, key: String) -> Result<Uint8Array, JsValue> {
    set_alloc_error_hook(oom);
    let plaintext = decrypt_buffer(&cipher.to_vec(), &key)?;
    Ok(Uint8Array::from(plaintext.as_slice()))
}

// Export a `greet` function from Rust to JavaScript, that alerts a
// hello message.
#[wasm_bindgen]
pub async fn encrypt(plain: Uint8Array, key: String) -> Result<Uint8Array, JsValue> {
    set_alloc_error_hook(oom);
    let cipher = encrypt_buffer(&plain.to_vec(), &key)?;
    Ok(Uint8Array::from(cipher.as_slice()))
}

#[wasm_bindgen]
pub enum SM4Error {
    EncError,
}
