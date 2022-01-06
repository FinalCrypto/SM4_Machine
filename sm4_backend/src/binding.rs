use seed::prelude::{
    js_sys::Uint8Array, 
    fetch, 
    FetchError
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
pub async fn encrypt(plain_path: String, _key: String, _iv: String, mode: SM4Mode) -> Result<Uint8Array, JsValue> {
    let bytes = read_file(plain_path).await
        .map_err(|e| JsValue::from_serde(&e).unwrap())?;
    let cipher = encrypt_buffer(&bytes, mode);
    let js_array = Uint8Array::new_with_length(cipher.len() as u32);
    js_array.copy_from(&cipher);
    Ok(js_array)
}

async fn read_file(path: String) -> Result<Vec<u8>, SM4Error> {
    let cont = fetch(path).await?.check_status()?;
    Ok(cont.bytes().await?)
}

#[wasm_bindgen]
pub enum SM4Mode {
    None
}

#[wasm_bindgen]
#[derive(Deserialize, Serialize)]
pub enum SM4Error {
    KeyError,
    FileNotFound
}

impl From<FetchError> for SM4Error {
    fn from(_: FetchError) -> Self {
        SM4Error::FileNotFound
    }
}

impl Into<JsValue> for SM4Error {
    fn into(self) -> JsValue {
        JsValue::from_serde(&self).unwrap()
    }
}
