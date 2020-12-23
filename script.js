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

function getRidOfStuff() {
    var rating = document.getElementById("rating");
    var comments = document.getElementById("comments");

    rating.selectedIndex = 0;
    $( 'input[type="checkbox"]' ).prop('checked', false);
    comments.innerHTML = "";
}

function array() {
    var design = document.getElementById("design");
    var content = document.getElementById("content");
    var bugs = document.getElementById("bugs");
    var output1 = document.getElementById("out1");
    var feedback = [];
    
    if (design.checked === true) {
        feedback.push("Design");
    } if (content.checked === true) {
        feedback.push(" Content");
    } if (bugs.checked === true) {
        feedback.push(" Bugs");
    }
    
    output1.innerHTML = feedback.toString();
}

if (window.addEventListener) {
    window.addEventListener("click", array, false);
}   else if (window.attachEvent) {
    window.attachEvent("onclick", array);
}

function hamburg() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }