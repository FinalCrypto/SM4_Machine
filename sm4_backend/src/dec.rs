use wasm_bindgen::prelude::*;

use crate::sm4::SM4Mode;

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
