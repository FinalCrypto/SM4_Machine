const sm4_pkg =
    import ("./sm4_backend/pkg/sm4_backend_bg.js");

var fileSize = 0;
var costTime = 0;
/**
 * 使用String key加密一个Uint8Array
 * @param {Uint8Array} msg 要加密的内容
 * @param {String} key 加密使用的密码
 * @returns {Uint8Array} 加密结果
 * TODO：考虑对用户输入进行哈希作为密码
 * */
async function encrypt(msg, key) {
    const sm4 = await sm4_pkg;

    const startTime = performance.now();
    const cipher = await sm4.encrypt(msg, key);
    const endTime = performance.now();
    return [endTime - startTime, cipher]
}

/**
 * 使用密码解密密文
 * @param {Uint8Array} cipher 密文
 * @param {String} key 密码
 * @returns {Uint8Array} 解密结果
 */
async function decrypt(cipher, key) {
    const sm4 = await sm4_pkg;

    const startTime = performance.now();
    const plain = await sm4.decrypt(cipher, key);
    const endTime = performance.now();
    return [endTime - startTime, plain]
}

export async function encryptInput() {
    const file = document.getElementById("selected_file").files[0];
    const key = document.getElementById("key").value;

    await processInput(file, key, encrypt, file.name + ".enc");
}

export async function decryptInput() {
    const file = document.getElementById("selected_file").files[0];
    const key = document.getElementById("key").value;

    await processInput(file, key, decrypt, file.name + ".dec");
}

async function processInput(file, key, processor, out_name) {

    // 使用FileReader读取文件
    const reader = new FileReader();
    reader.readAsArrayBuffer(file);

    document.getElementById('progress_percent').innerHTML = '';
    var oProgress = document.getElementById('progress');
    oProgress.style.display = 'block';
    oProgress.style.width = '0px';

    // 读取成功时，将文件内容转为Uint8Array，传递给加密函数
    reader.onload = async content => {
        const plain = new Uint8Array(content.target.result);

        const [time, res] = await processor(plain, key);

        // 下载文件
        const blob = new Blob([res], { type: "application/octet-stream" });
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = out_name;
        link.click();


        costTime = time / 1000;
        document.getElementById('progress').style.width = (650).toString() + 'px';
        document.getElementById('progress_percent').innerHTML = "100%";
        document.getElementById('cost').innerHTML = '| ' + secondsToTime(costTime);
        document.getElementById('speed').innerHTML = '| ' + (fileSize / costTime).toFixed(2) + ' bytes/s';
    }

    // 失败时在console打log
    reader.onerror = _ => {
        console.log("Error occurred when reading file content.")
    }
}

function secondsToTime(secs) { // we will use this function to convert seconds in normal time format
    var hr = Math.floor(secs / 3600);
    var min = Math.floor((secs - (hr * 3600)) / 60);
    var sec = Math.floor(secs - (hr * 3600) - (min * 60));

    if (hr < 10) { hr = "0" + hr; }
    if (min < 10) { min = "0" + min; }
    if (sec < 10) { sec = "0" + sec; }
    if (hr) { hr = "00"; }
    return hr + ':' + min + ':' + sec;
}

function bytesToSize(bytes) {
    var sizes = ['Bytes', 'KB', 'MB'];
    if (bytes == 0) return 'n/a';
    var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
    return (bytes / Math.pow(1024, i)).toFixed(1) + ' ' + sizes[i];
}

export function fileSelected() {
    var oFile = document.getElementById('selected_file').files[0];

    var oReader = new FileReader();
    oReader.onload = function(e) {
        oFile.src = e.target.result;
        document.getElementById('fileinfo').style.display = 'block';
        document.getElementById('filename').innerHTML = 'Name: ' + oFile.name;
        document.getElementById('filesize').innerHTML = 'Size: ' + bytesToSize(oFile.size);
        document.getElementById('filetype').innerHTML = 'Type: ' + oFile.type;
        fileSize = oFile.size;
    };
    oReader.readAsDataURL(oFile);
}