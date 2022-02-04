
var countDownDate = new Date("Feb 28,2022,19:39:52").getTime();

const element = document.querySelector('#count-down-timer');
const rt = document.getElementsByTagName("text");
function paddedFormat(num) {
    return num < 10 ? "0" + num : num; 
}

window.onload = setInterval(function(){

    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance/(1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    element.innerHTML = days + ":" +  hours + ":" +  minutes + ":" + seconds;

 //   document.getElementById(element).innerHTML = days +  + hours + minutes +  seconds;

    if(distance <0){
        clearInterval(myfunc);
        document.getElementById(element).innerHTML = newFunction();
    }
}, 1000);

function newFunction() {
    return "EXPIRED";
}

