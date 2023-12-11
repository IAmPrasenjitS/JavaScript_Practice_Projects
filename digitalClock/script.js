function show12Hide24(){
    document.getElementById("hour24").className = "hide";
    document.getElementById("min24").className = "hide";
    document.getElementById("second24").className = "hide";
    document.getElementById("dot3").className = "hide red-dot";
    document.getElementById("dot4").className = "hide red-dot";
    // Showing 12
    document.getElementById("hour").className = "";
    document.getElementById("min").className = "";
    document.getElementById("second").className = "";
    document.getElementById("dot1").className = "red-dot";
    document.getElementById("dot2").className = "red-dot";
}
function show24Hide12(){
    document.getElementById("hour").className = "hide";
    document.getElementById("min").className = "hide";
    document.getElementById("second").className = "hide";
    document.getElementById("dot1").className = "hide red-dot";
    document.getElementById("dot2").className = "hide red-dot";
    // Showing 24
    document.getElementById("hour24").className = "";
    document.getElementById("min24").className = "";
    document.getElementById("second24").className = "";
    document.getElementById("dot3").className = "red-dot";
    document.getElementById("dot4").className = "red-dot";
}

function time12Hrs() {
    let date = new Date();
    let hrs = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    // Hours Formatting
    if (hrs > 12)
        hrs = hrs - 12;

    if (hrs < 10)
        hrs = "0" + hrs;

    // Minute Formatting
    if (min < 10)
        min = "0" + min;

    // Minute Formatting
    if (sec < 10)
    sec = "0" + sec;

    document.getElementById("hour").innerHTML = hrs;
    document.getElementById("min").innerHTML = min;
    document.getElementById("second").innerHTML = sec;
}

function time24Hrs() {
    let date = new Date();
    let hrs = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    // Hours Formatting
    if (hrs < 10)
        hrs = "0" + hrs;

    // Minute Formatting
    if (min < 10)
        min = "0" + min;

    // Minute Formatting
    if (sec < 10)
    sec = "0" + sec;

    document.getElementById("hour24").innerHTML = hrs;
    document.getElementById("min24").innerHTML = min;
    document.getElementById("second24").innerHTML = sec;
}

// alert(hrs);
setInterval(time12Hrs, 1000);
setInterval(time24Hrs, 1000);