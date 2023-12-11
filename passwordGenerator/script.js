const uCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lCase = "abcdefghijklmnopqrstuvwxyz";
const num = "0123456789";
const spChar = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
const allChar = uCase + lCase + num + spChar;

function genPass(){
    let pass = "";
    pass += uCase[parseInt(Math.random() * uCase.length)];
    //pass = pass + uCase[parseInt(Math.random() * uCase.length)];
    pass += spChar[parseInt(Math.random() * spChar.length)];
    pass += lCase[parseInt(Math.random() * lCase.length)];
    pass += num[parseInt(Math.random() * num.length)];
    while(pass.length < 16){
        pass += allChar[parseInt(Math.random() * allChar.length)];
    }
    document.getElementById("pwField").value = pass;
    document.getElementById("copied").innerText = "Password Generated!";
    // alert(pass);
}

function copyIt(){
    let pass = document.getElementById("pwField").value;
    navigator.clipboard.writeText(pass);
    document.getElementById("copied").innerText = "Password Copied to Clipboard!";
    // alert(pass);
}