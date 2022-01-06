const sm4_pkg =
    import ("./sm4_backend/pkg/sm4_backend_bg.js");


sm4_pkg.then(sm4 => {
    console.log("success")
    sm4.encrypt()
});