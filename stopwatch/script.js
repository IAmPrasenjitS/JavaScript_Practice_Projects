
let hrs = parseInt(00);
let min = parseInt(00);
let sec = parseInt(00);
let intervalID;
function start() {
    intervalID = setInterval(counter, 990);
}

function pause() {
    clearInterval(intervalID);
}

function stop() {
    clearInterval(intervalID);
    hrs = parseInt(00);
    min = parseInt(00);
    sec = parseInt(00);
    temp = "00";
    // Inserting Values
    document.getElementById("hour").innerHTML = temp;
    document.getElementById("min").innerHTML = temp;
    document.getElementById("second").innerHTML = temp;
    document.getElementById("snapLists").innerHTML = ""
}

function snap() {
    let sNhrs;
    let sNmin;
    let sNsec = sec;
    // Hours
    if(hrs < 10)
        sNhrs = "0" + hrs;
    else
        sNhrs = hrs;
    // Minutes
    if(min < 10)
        sNmin = "0" + min;
    else
        sNmin = min;
    // Seconds
    if(sec < 10)
        sNsec = "0" + sec;
    else
        sNsec = sec;
    let preHTML = document.getElementById("snapLists").innerHTML;
    //alert(preHTML);
    document.getElementById("snapLists").innerHTML = preHTML + `<p>${sNhrs} : ${sNmin} : ${sNsec}</p>`;
}

function counter() {
    if (sec == 59) {
        min++;
        sec = 00;
    } else {
        sec++;
    }
    if (min == 59) {
        hrs++;
        min = 00;
    }
    // 2 digit Number Fomatting
    let secPrint;
    let hrsPrint;
    let minPrint;
    // Seconds
    if (sec < 10)
        secPrint = "0" + sec;
    else
        secPrint = sec;
    // Hours
    if (hrs < 10)
        hrsPrint = "0" + hrs;
    else
        hrsPrint = hrs;
    // Minutes
    if (min < 10)
        minPrint = "0" + min;
    else
        minPrint = min;
    // Inserting Values
    document.getElementById("hour").innerHTML = hrsPrint;
    document.getElementById("min").innerHTML = minPrint;
    document.getElementById("second").innerHTML = secPrint;

}