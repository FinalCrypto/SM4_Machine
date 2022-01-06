const sm4_pkg =
    import ("./sm4_backend/pkg/sm4_backend_bg.js");

async function encrypt(msg, key) {
    console.log("encrypting " + msg + " with " + key);
    return (await sm4_pkg).encrypt(msg, key, "", 0)
}

async function decrypt(cipher, key) {
    console.log("encrypting " + cipher + " with " + key);
    return (await sm4_pkg).decrypt(cipher, key, "", 0)
}

export async function encryptInput() {
    const msg = document.getElementById("plain").value;
    const key = document.getElementById("enc_key").value;
    const res = await encrypt(msg, key);
    console.log(res)
    document.getElementById("enc_res").innerHTML = res;
}