
let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTWXYZ0123456789!@#$%&*?";
let novaSenha = "";

sizePassword.innerHTML = sliderElement.value;

sliderElement.oninput = function(){
    sizePassword.innerHTML = this.value;
}

function generatePassword(){
    let senha = "";
    for(let i = 0, n = charset.length; i < sliderElement.value; ++i){
        senha += charset.charAt(Math.floor(Math.random() * n));
        //gerando nº inteiro com base no "charset"
    } //lógica; passar X vezes pelo charset(quantidade de caracteres) até a seleção do usuário.

    containerPassword.classList.remove("hide");

    password.innerHTML = senha;

    novaSenha = senha;
}
//id button

function copyPassword(){
    alert("Senha copiada!");
    navigator.clipboard.writeText(novaSenha);
} //click referenciado no "container-password"(index.html)