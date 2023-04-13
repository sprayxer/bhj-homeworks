const dead = document.getElementById('dead');
const lost = document.getElementById('lost');

const hole = document.getElementsByClassName('hole');
const hole_has_mole = document.getElementsByClassName('hole_has-mole');

function showMessage(message) {
    alert(message);
    dead.textContent = 0;
    lost.textContent = 0;
}

for(let i in hole){
    hole[i].onclick = () => {
        if(hole[i] == hole_has_mole[0]){
            dead.textContent = Number(dead.textContent) + 1;
            if(dead.textContent == '10'){
                message = 'Победа';
                showMessage(message);
            }
        }else{
            lost.textContent = Number(lost.textContent) + 1;
            if(lost.textContent == '5'){
                message = 'Поражение';
                showMessage(message);
            }
        }
    }  
}

