let fNum, opr;

function digitClick(value){
    let lastValue = document.getElementById('disabledTextInput').value;
    if(lastValue != 0)
        document.getElementById('disabledTextInput').value = lastValue + value;
    else
        document.getElementById('disabledTextInput').value = value;
}
function operatorClick(value){
    fNum = Number(document.getElementById('disabledTextInput').value);
    document.getElementById('disabledTextInput').value = 0;
    opr = value;
}
function calculateResult(){
    if(opr == '+'){
        let result = fNum + Number(document.getElementById('disabledTextInput').value);
        document.getElementById('disabledTextInput').value = result;
    }else if(opr == '-'){
        let result = fNum - Number(document.getElementById('disabledTextInput').value);
        document.getElementById('disabledTextInput').value = result;
    }else if(opr == 'x'){
        let result = fNum * Number(document.getElementById('disabledTextInput').value);
        document.getElementById('disabledTextInput').value = result;
    }else if(opr == '/'){
        let result = fNum / Number(document.getElementById('disabledTextInput').value);
        document.getElementById('disabledTextInput').value = result;
    }
}
function clearScreen(){
    document.getElementById('disabledTextInput').value = 0;
}