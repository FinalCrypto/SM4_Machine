const sm4_pkg =
    import ("./sm4_backend/pkg/sm4_backend_bg.js");

/**
 * 使用String key加密一个Uint8Array
 * @param {Uint8Array} msg 要加密的内容
 * @param {String} key 加密使用的密码
 * @returns {Uint8Array} 加密结果
 * TODO：考虑对用户输入进行哈希作为密码
 * */
async function encrypt(msg, key) {
    console.log("encrypting " + msg + " with " + key);
    return (await sm4_pkg).encrypt(msg, key, "", 0)
}

/**
 * 使用密码解密密文
 * @param {Uint8Array} cipher 密文
 * @param {String} key 密码
 * @returns {Uint8Array} 解密结果
 */
async function decrypt(cipher, key) {
    console.log("encrypting " + cipher + " with " + key);
    return (await sm4_pkg).decrypt(cipher, key, "", 0)
}

export async function encryptInput() {
    const file = document.getElementById("plain").files[0];
    const key = document.getElementById("enc_key").value;

    await processInput(file, key, encrypt, file + ".enc");
}

export async function decryptInput() {
    const file = document.getElementById("cipher").files[0];
    const key = document.getElementById("dec_key").value;

    await processInput(file, key, decrypt, file.toString() + ".dec");
}

async function processInput(file, key, processor, out_name) {

    // 使用FileReader读取文件
    const reader = new FileReader();
    reader.readAsArrayBuffer(file);

    // 读取成功时，将文件内容转为Uint8Array，传递给加密函数
    reader.onload = async content => {
        const plain = new Uint8Array(content.target.result);

        const res = await processor(plain, key);

        // 下载文件
        const blob = new Blob([res], { type: "application/octet-stream" });
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = out_name;
        link.click();
    }

    // 失败时在console打log
    reader.onerror = _ => {
        console.log("Error occurred when reading file content.")
    }
}