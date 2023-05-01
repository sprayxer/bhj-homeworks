const popup = document.querySelectorAll('.btn');
const close = document.querySelectorAll('.modal__close_times');

popup[0].closest('#modal_main').classList.add('modal_active');

popup[0].onclick = function() {
    popup[0].closest('#modal_main').classList.remove('modal_active');
    popup[1].closest('#modal_success').classList.add('modal_active');
}

close.forEach(element => {
    console.log(element)
    element.onclick = function() {
        console.log('click');
        popup[0].closest('#modal_main').classList.remove('modal_active');
        popup[1].closest('#modal_success').classList.remove('modal_active');
    }
});

