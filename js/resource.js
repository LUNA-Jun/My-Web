// light mode
const body = document.querySelector('body');
const toggle = document.getElementById('toggle');

toggle.onclick = function(){
    toggle.classList.toggle('light_mode');
    body.classList.toggle('light_mode');
}

// clock
var clock = $('.clock').FlipClock({
    clockFace: 'TwelveHourClock'
});
