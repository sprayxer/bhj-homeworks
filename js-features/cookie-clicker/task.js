const clicker__counter = document.getElementById('clicker__counter');
const cookie = document.getElementById('cookie');
const clicker___speed = document.getElementById('clicker___speed');
const dataClick = new Date();
cookie.onclick = function() {
    clicker__counter.textContent = Number(clicker__counter.textContent) + 1;
        
    if(clicker__counter.textContent % 2 != 0){
        cookie.width = '300';
        clicker___speed.textContent = (1 / ((new Date() - dataClick) / clicker__counter.textContent / 1000)).toFixed(2);
    }else{
        cookie.width = '200';
        clicker___speed.textContent = (1 / ((new Date() - dataClick) / clicker__counter.textContent / 1000)).toFixed(2);
    }
}