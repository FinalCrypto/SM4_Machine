use crate::binding::SM4Mode;



pub fn encrypt_buffer(buf: &[u8], _mode: SM4Mode) -> Vec<u8> {
    Vec::from(buf)
}
