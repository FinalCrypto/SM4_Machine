use seed::prelude::{
    js_sys::Uint8Array,
};
use wasm_bindgen::prelude::*;

use crate::{enc::encrypt_buffer, dec::decrypt_buffer};

// Import the `window.alert` function from the Web.
#[wasm_bindgen]
extern "C" {
    fn alert(s: &str);
}

// Export a `greet` function from Rust to JavaScript, that alerts a
// hello message.
#[wasm_bindgen]
pub fn decrypt(cipher: Uint8Array, key: String) -> Result<Uint8Array, JsValue> {
    let plaintext = decrypt_buffer(&mut cipher.to_vec(), key)?;
    let js_array = Uint8Array::new_with_length(plaintext.len() as u32);
    js_array.copy_from(&plaintext);

    Ok(js_array)
}

// Export a `greet` function from Rust to JavaScript, that alerts a
// hello message.
#[wasm_bindgen]
pub async fn encrypt(plain: Uint8Array, key: String) -> Result<Uint8Array, JsValue> {
    let cipher = encrypt_buffer(&plain.to_vec(), key)?;
    let js_array = Uint8Array::new_with_length(cipher.len() as u32);
    js_array.copy_from(&cipher);

    Ok(js_array)
}

#[wasm_bindgen]
pub enum SM4Error {
    EncError,
}
