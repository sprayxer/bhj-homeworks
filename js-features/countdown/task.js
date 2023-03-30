const time = document.getElementById('timer');

/*
setInterval(time => {
    time.textContent = time.textContent - 1;
    if (time.textContent == -1) {
        alert('Вы победили в конкурсе!');
    }
}, 1000, time);
*/


/* Повышенный уровень сложности */


const hh = '00';
const mm = '00';
const ss = '26';
let sss = ss;
time.textContent = hh + ':' + mm + ':' + ss;

setInterval(ss => {
    sss = sss - 1;
    time.textContent = hh + ':' + mm + ':' + sss;
    if (sss == -1) {
        alert('Вы победили в конкурсе!');
        window.location = "http://javascript.ru";
    }
}, 1000, ss);

