use seed::prelude::{
    js_sys::Uint8Array,
};
use serde::{Deserialize, Serialize};
use wasm_bindgen::prelude::*;

use crate::enc::encrypt_buffer;

// Import the `window.alert` function from the Web.
#[wasm_bindgen]
extern "C" {
    fn alert(s: &str);
}

// Export a `greet` function from Rust to JavaScript, that alerts a
// hello message.
#[wasm_bindgen]
pub fn decrypt(msg: String, _key: String, _iv: String, _mode: SM4Mode) -> String {
    return msg;
}

// Export a `greet` function from Rust to JavaScript, that alerts a
// hello message.
#[wasm_bindgen]
pub async fn encrypt(plain: Uint8Array, _key: String, _iv: String, mode: SM4Mode) -> Result<Uint8Array, JsValue> {
    let cipher = encrypt_buffer(&plain.to_vec() , mode);
    let js_array = Uint8Array::new_with_length(cipher.len() as u32);
    js_array.copy_from(&cipher);

    Ok(js_array)
}

#[wasm_bindgen]
pub enum SM4Mode {
    None
}

#[wasm_bindgen]
#[derive(Deserialize, Serialize)]
pub enum SM4Error {
    KeyError,
}
