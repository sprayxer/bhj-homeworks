const dead = document.getElementById('dead');
const lost = document.getElementById('lost');

const hole = document.getElementsByClassName('hole');
const hole_has_mole = document.getElementsByClassName('hole_has-mole');

for(let i in hole){
    hole[i].onclick = () => {
        if(hole[i] == hole_has_mole[0]){
            dead.textContent = Number(dead.textContent) + 1;
            console.log(typeof dead.textContent);
            if(dead.textContent == '2'){
                alert('Победа');
                dead.textContent = 0;
                lost.textContent = 0;
            }
        }else{
            lost.textContent = Number(lost.textContent) + 1;
            if(lost.textContent == '2'){
                alert('Поражение');
                dead.textContent = 0;
                lost.textContent = 0;
            }
        }
    }
    
}



if(dead.textContent == '2' || lost.textContent == '2'){
    console.log('dfsfsfdsfsfsf');
}

