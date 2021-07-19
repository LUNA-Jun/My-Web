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

const navigation = document.querySelector('.navigation');
        document.querySelector('.n_toggle').onclick = function(){
            this.classList.toggle('nav');
            navigation.classList.toggle('nav');
        }