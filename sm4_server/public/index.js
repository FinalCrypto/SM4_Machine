window["index"] =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + chunkId + ".index.js"
/******/ 	}
/******/
/******/ 	// object to store loaded and loading wasm modules
/******/ 	var installedWasmModules = {};
/******/
/******/ 	function promiseResolve() { return Promise.resolve(); }
/******/
/******/ 	var wasmImportObjects = {
/******/ 		"./sm4_backend/pkg/sm4_backend_bg.wasm": function() {
/******/ 			return {
/******/ 				"./sm4_backend_bg.js": {
/******/ 					"__wbindgen_object_drop_ref": function(p0i32) {
/******/ 						return installedModules["./sm4_backend/pkg/sm4_backend_bg.js"].exports["__wbindgen_object_drop_ref"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_string_new": function(p0i32,p1i32) {
/******/ 						return installedModules["./sm4_backend/pkg/sm4_backend_bg.js"].exports["__wbindgen_string_new"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_getRandomValues_98117e9a7e993920": function(p0i32,p1i32) {
/******/ 						return installedModules["./sm4_backend/pkg/sm4_backend_bg.js"].exports["__wbg_getRandomValues_98117e9a7e993920"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_randomFillSync_64cc7d048f228ca8": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./sm4_backend/pkg/sm4_backend_bg.js"].exports["__wbg_randomFillSync_64cc7d048f228ca8"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_process_2f24d6544ea7b200": function(p0i32) {
/******/ 						return installedModules["./sm4_backend/pkg/sm4_backend_bg.js"].exports["__wbg_process_2f24d6544ea7b200"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_is_object": function(p0i32) {
/******/ 						return installedModules["./sm4_backend/pkg/sm4_backend_bg.js"].exports["__wbindgen_is_object"](p0i32);
/******/ 					},
/******/ 					"__wbg_versions_6164651e75405d4a": function(p0i32) {
/******/ 						return installedModules["./sm4_backend/pkg/sm4_backend_bg.js"].exports["__wbg_versions_6164651e75405d4a"](p0i32);
/******/ 					},
/******/ 					"__wbg_node_4b517d861cbcb3bc": function(p0i32) {
/******/ 						return installedModules["./sm4_backend/pkg/sm4_backend_bg.js"].exports["__wbg_node_4b517d861cbcb3bc"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_is_string": function(p0i32) {
/******/ 						return installedModules["./sm4_backend/pkg/sm4_backend_bg.js"].exports["__wbindgen_is_string"](p0i32);
/******/ 					},
/******/ 					"__wbg_modulerequire_3440a4bcf44437db": function(p0i32,p1i32) {
/******/ 						return installedModules["./sm4_backend/pkg/sm4_backend_bg.js"].exports["__wbg_modulerequire_3440a4bcf44437db"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_crypto_98fc271021c7d2ad": function(p0i32) {
/******/ 						return installedModules["./sm4_backend/pkg/sm4_backend_bg.js"].exports["__wbg_crypto_98fc271021c7d2ad"](p0i32);
/******/ 					},
/******/ 					"__wbg_msCrypto_a2cdb043d2bfe57f": function(p0i32) {
/******/ 						return installedModules["./sm4_backend/pkg/sm4_backend_bg.js"].exports["__wbg_msCrypto_a2cdb043d2bfe57f"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_object_clone_ref": function(p0i32) {
/******/ 						return installedModules["./sm4_backend/pkg/sm4_backend_bg.js"].exports["__wbindgen_object_clone_ref"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_cb_drop": function(p0i32) {
/******/ 						return installedModules["./sm4_backend/pkg/sm4_backend_bg.js"].exports["__wbindgen_cb_drop"](p0i32);
/******/ 					},
/******/ 					"__wbg_newnoargs_be86524d73f67598": function(p0i32,p1i32) {
/******/ 						return installedModules["./sm4_backend/pkg/sm4_backend_bg.js"].exports["__wbg_newnoargs_be86524d73f67598"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_call_888d259a5fefc347": function(p0i32,p1i32) {
/******/ 						return installedModules["./sm4_backend/pkg/sm4_backend_bg.js"].exports["__wbg_call_888d259a5fefc347"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_call_346669c262382ad7": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./sm4_backend/pkg/sm4_backend_bg.js"].exports["__wbg_call_346669c262382ad7"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_new_b1d61b5687f5e73a": function(p0i32,p1i32) {
/******/ 						return installedModules["./sm4_backend/pkg/sm4_backend_bg.js"].exports["__wbg_new_b1d61b5687f5e73a"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_resolve_d23068002f584f22": function(p0i32) {
/******/ 						return installedModules["./sm4_backend/pkg/sm4_backend_bg.js"].exports["__wbg_resolve_d23068002f584f22"](p0i32);
/******/ 					},
/******/ 					"__wbg_then_2fcac196782070cc": function(p0i32,p1i32) {
/******/ 						return installedModules["./sm4_backend/pkg/sm4_backend_bg.js"].exports["__wbg_then_2fcac196782070cc"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_self_c6fbdfc2918d5e58": function() {
/******/ 						return installedModules["./sm4_backend/pkg/sm4_backend_bg.js"].exports["__wbg_self_c6fbdfc2918d5e58"]();
/******/ 					},
/******/ 					"__wbg_window_baec038b5ab35c54": function() {
/******/ 						return installedModules["./sm4_backend/pkg/sm4_backend_bg.js"].exports["__wbg_window_baec038b5ab35c54"]();
/******/ 					},
/******/ 					"__wbg_globalThis_3f735a5746d41fbd": function() {
/******/ 						return installedModules["./sm4_backend/pkg/sm4_backend_bg.js"].exports["__wbg_globalThis_3f735a5746d41fbd"]();
/******/ 					},
/******/ 					"__wbg_global_1bc0b39582740e95": function() {
/******/ 						return installedModules["./sm4_backend/pkg/sm4_backend_bg.js"].exports["__wbg_global_1bc0b39582740e95"]();
/******/ 					},
/******/ 					"__wbindgen_is_undefined": function(p0i32) {
/******/ 						return installedModules["./sm4_backend/pkg/sm4_backend_bg.js"].exports["__wbindgen_is_undefined"](p0i32);
/******/ 					},
/******/ 					"__wbg_buffer_397eaa4d72ee94dd": function(p0i32) {
/******/ 						return installedModules["./sm4_backend/pkg/sm4_backend_bg.js"].exports["__wbg_buffer_397eaa4d72ee94dd"](p0i32);
/******/ 					},
/******/ 					"__wbg_newwithbyteoffsetandlength_4b9b8c4e3f5adbff": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./sm4_backend/pkg/sm4_backend_bg.js"].exports["__wbg_newwithbyteoffsetandlength_4b9b8c4e3f5adbff"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_new_a7ce447f15ff496f": function(p0i32) {
/******/ 						return installedModules["./sm4_backend/pkg/sm4_backend_bg.js"].exports["__wbg_new_a7ce447f15ff496f"](p0i32);
/******/ 					},
/******/ 					"__wbg_set_969ad0a60e51d320": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./sm4_backend/pkg/sm4_backend_bg.js"].exports["__wbg_set_969ad0a60e51d320"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_length_1eb8fc608a0d4cdb": function(p0i32) {
/******/ 						return installedModules["./sm4_backend/pkg/sm4_backend_bg.js"].exports["__wbg_length_1eb8fc608a0d4cdb"](p0i32);
/******/ 					},
/******/ 					"__wbg_newwithlength_929232475839a482": function(p0i32) {
/******/ 						return installedModules["./sm4_backend/pkg/sm4_backend_bg.js"].exports["__wbg_newwithlength_929232475839a482"](p0i32);
/******/ 					},
/******/ 					"__wbg_subarray_8b658422a224f479": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./sm4_backend/pkg/sm4_backend_bg.js"].exports["__wbg_subarray_8b658422a224f479"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbindgen_throw": function(p0i32,p1i32) {
/******/ 						return installedModules["./sm4_backend/pkg/sm4_backend_bg.js"].exports["__wbindgen_throw"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_memory": function() {
/******/ 						return installedModules["./sm4_backend/pkg/sm4_backend_bg.js"].exports["__wbindgen_memory"]();
/******/ 					},
/******/ 					"__wbindgen_closure_wrapper879": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./sm4_backend/pkg/sm4_backend_bg.js"].exports["__wbindgen_closure_wrapper879"](p0i32,p1i32,p2i32);
/******/ 					}
/******/ 				}
/******/ 			};
/******/ 		},
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/
/******/ 		// Fetch + compile chunk loading for webassembly
/******/
/******/ 		var wasmModules = {"0":["./sm4_backend/pkg/sm4_backend_bg.wasm"]}[chunkId] || [];
/******/
/******/ 		wasmModules.forEach(function(wasmModuleId) {
/******/ 			var installedWasmModuleData = installedWasmModules[wasmModuleId];
/******/
/******/ 			// a Promise means "currently loading" or "already loaded".
/******/ 			if(installedWasmModuleData)
/******/ 				promises.push(installedWasmModuleData);
/******/ 			else {
/******/ 				var importObject = wasmImportObjects[wasmModuleId]();
/******/ 				var req = fetch(__webpack_require__.p + "" + {"./sm4_backend/pkg/sm4_backend_bg.wasm":"ab6c2842a94515300796"}[wasmModuleId] + ".module.wasm");
/******/ 				var promise;
/******/ 				if(importObject instanceof Promise && typeof WebAssembly.compileStreaming === 'function') {
/******/ 					promise = Promise.all([WebAssembly.compileStreaming(req), importObject]).then(function(items) {
/******/ 						return WebAssembly.instantiate(items[0], items[1]);
/******/ 					});
/******/ 				} else if(typeof WebAssembly.instantiateStreaming === 'function') {
/******/ 					promise = WebAssembly.instantiateStreaming(req, importObject);
/******/ 				} else {
/******/ 					var bytesPromise = req.then(function(x) { return x.arrayBuffer(); });
/******/ 					promise = bytesPromise.then(function(bytes) {
/******/ 						return WebAssembly.instantiate(bytes, importObject);
/******/ 					});
/******/ 				}
/******/ 				promises.push(installedWasmModules[wasmModuleId] = promise.then(function(res) {
/******/ 					return __webpack_require__.w[wasmModuleId] = (res.instance || res).exports;
/******/ 				}));
/******/ 			}
/******/ 		});
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	// object with all WebAssembly.instance exports
/******/ 	__webpack_require__.w = {};
/******/
/******/ 	var jsonpArray = window["webpackJsonpindex"] = window["webpackJsonpindex"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! exports provided: encryptInput, decryptInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"encryptInput\", function() { return encryptInput; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"decryptInput\", function() { return decryptInput; });\nconst sm4_pkg =\n    __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ./sm4_backend/pkg/sm4_backend_bg.js */ \"./sm4_backend/pkg/sm4_backend_bg.js\"));\n\n/**\n * 使用String key加密一个Uint8Array\n * @param {Uint8Array} msg 要加密的内容\n * @param {String} key 加密使用的密码\n * @returns {Uint8Array} 加密结果\n * TODO：考虑对用户输入进行哈希作为密码\n * */\nasync function encrypt(msg, key) {\n    const sm4 = await sm4_pkg;\n\n    const startTime = performance.now();\n    const cipher = sm4.encrypt(msg, key);\n    const endTime = performance.now();\n    return [endTime - startTime, cipher]\n}\n\n/**\n * 使用密码解密密文\n * @param {Uint8Array} cipher 密文\n * @param {String} key 密码\n * @returns {Uint8Array} 解密结果\n */\nasync function decrypt(cipher, key) {\n    const sm4 = await sm4_pkg;\n\n    const startTime = performance.now();\n    const plain = sm4.decrypt(cipher, key);\n    const endTime = performance.now();\n    return [endTime - startTime, plain]\n}\n\nasync function encryptInput() {\n    const file = document.getElementById(\"plain\").files[0];\n    const key = document.getElementById(\"enc_key\").value;\n\n    await processInput(file, key, encrypt, file.name + \".enc\");\n}\n\nasync function decryptInput() {\n    const file = document.getElementById(\"cipher\").files[0];\n    const key = document.getElementById(\"dec_key\").value;\n\n    await processInput(file, key, decrypt, file.name + \".dec\");\n}\n\nasync function processInput(file, key, processor, out_name) {\n\n    // 使用FileReader读取文件\n    const reader = new FileReader();\n    reader.readAsArrayBuffer(file);\n\n    // 读取成功时，将文件内容转为Uint8Array，传递给加密函数\n    reader.onload = async content => {\n        const plain = new Uint8Array(content.target.result);\n\n        const [time, res] = await processor(plain, key);\n\n        console.log(`Process took ${time} ms`);\n\n        // 下载文件\n        const blob = new Blob([res], { type: \"application/octet-stream\" });\n        const link = document.createElement('a');\n        link.href = window.URL.createObjectURL(blob);\n        link.download = out_name;\n        link.click();\n    }\n\n    // 失败时在console打log\n    reader.onerror = _ => {\n        console.log(\"Error occurred when reading file content.\")\n    }\n}\n\n//# sourceURL=webpack://index/./index.js?");

/***/ })

/******/ });