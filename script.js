function calcdate() {
    var day = document.getElementById("day").value;
    var month = document.getElementById("month").value;
    var year = document.getElementById("year").value;
    var today = new Date();

    currentday = today.getDate();
    currentmonth = today.getMonth() + 1;
    currentyear = today.getFullYear();

    totaldays = (currentyear - year) * 365;
    
    if (currentmonth <= month) {
        totaldays = totaldays + ((month - currentmonth) * 31);
    } else if (currentmonth >= month) {
        totaldays = totaldays + ((currentmonth - month) * 31);
    }

    if (currentday <= day) {
        totaldays = totaldays + (day - currentday);
    } else if (currentday >= day) {
        totaldays = totaldays + (currentday - day);
    }

    finalyear = Math.trunc(totaldays / 365);
    
    totaldays = totaldays % 365;
    
    finalmonths = Math.trunc(totaldays / 31);

    totaldays = totaldays % 31;

    document.getElementById("pasttime").innerHTML = totaldays + " days " + finalmonths + " months " + finalyear + " years since your date.";
}

function createEventListener() {
    var button = document.getElementById("calc");
    if (button.addEventListener) {
        button.addEventListener("click", calcdate, false);
    } else if (button.attachEvent) {
        button.attachEvent("onclick", calcdate);
    }
}

if (window.addEventListener) {
    window.addEventListener("click", createEventListener, false);
}   else if (window.attachEvent) {
    window.attachEvent("onclick", createEventListener);
}