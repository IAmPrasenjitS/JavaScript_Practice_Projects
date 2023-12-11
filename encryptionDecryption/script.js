"use strict"
/**
 * Features and Drawbacks:      Encryption / Decryption
 *                              Small Letter / Not Uppercase for Now
 *                              Input data validation
 * 
 * Used Topics:                 Event Listenter
 *                              Arrow Function
 * 
 */

// ! means start => { means space => . , means same
const specialCharacter = "#$%&'()*+~-{/:;<=>?@[]}^_`";
const regForOnlyLetterSpace = /^[A-Za-z\s\.\,]*$/;
// let letterNumber = 0;

// Encryption Function
let encryptIt = (data) => {
    if(data.charCodeAt(0) >= 65 && data.charCodeAt(0) <= 90){
        const asciiCode = data.charCodeAt(0);
        const letterIndex = asciiCode - 65;
        // console.log(specialCharacter[letterIndex])
        return specialCharacter[letterIndex];
    }else if(data == " "){
        return '{';
    }else if(data == ","){
        return ',';
    }else if(data == "."){
        return '.';
    }
    
}
// Decryption Function
let decryptIt = (data) => {
    let indexNumberOfData = null;
    for (let i = 0; i < specialCharacter.length; i++) {
        if(data == specialCharacter[i]){
            indexNumberOfData = i;
        }else if(data == '{'){
            return ' ';
        }else if(data == ","){
            return ',';
        }else if(data == "."){
            return '.';
        }  
    }
    return String.fromCharCode(indexNumberOfData+65);
}

// Setting characters in Lower case and only alphabetic string
const inputArea = document.getElementById("textarea1");
inputArea.addEventListener('keyup', () => {
    let data = document.getElementById('textarea1').value.toUpperCase();
    document.getElementById('textarea1').value = data;
});

// *************Encryption************* Listening button event and executing function. 

const btn = document.getElementById("btn");
btn.addEventListener('click',() => {
    const data = document.getElementById('textarea1').value;
    // Checking condition for only letter and space
    if(data.match(regForOnlyLetterSpace)){
        let encryptedData = "";
        if (data != "") {
          for (let i = 0; i < data.length; i++) {
            encryptedData += encryptIt(data[i]);
          }
          document.getElementById("textarea1").value = "";
        } else {
          alert("Enter any value");
        }
        document.getElementById("convertedData").innerText = encryptedData;  
    }else{
        alert('Please don\'t enter any number / special character ');
    }
      
});

// *************Decryption************* Listening button event and executing function. 
const btnD = document.getElementById('btnD');
btnD.addEventListener('click', () => {
    const data = document.getElementById('textarea2').value;
    let decryptedData = "";
    if(data != ""){
        for (let i = 0; i < data.length; i++) {
            decryptedData += decryptIt(data[i]);           
        }
        document.getElementById('textarea2').value = "";
    }else{
        alert("Enter any value");
    }
    document.getElementById('convertedData').innerText = decryptedData;
});
