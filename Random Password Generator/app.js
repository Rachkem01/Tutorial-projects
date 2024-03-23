const genBtn = document.querySelector(".btn1");
const copyBtn = document.querySelector(".btn2");



console.log(password)

genBtn.addEventListener("click", () =>genPassword());
copyBtn.addEventListener("click", () =>copyPassword());

function genPassword(){
    let chars ="0123456789abcdefghijklmnopqstuvwxyz!@#$%^&*()+*?/ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    passwordLength =7;
    password=""

    for (let i=0; i <=passwordLength; i++){
        let randomPassword = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomPassword,randomPassword +1)
    }
    document.querySelector("#password").value = password;
}

function copyPassword(){
    let copyText = document.querySelector("#password") = password;
    copyText.select()
    document.execCommand("copy")
}
