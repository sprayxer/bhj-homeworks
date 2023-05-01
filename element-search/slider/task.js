const push = document.querySelectorAll('.slider__arrow');
const sliderImages = [...document.getElementsByClassName('slider__image')];
const dot = [...document.getElementsByClassName('slider__dot')];

function changeImg() {
    const index = sliderImages.findIndex(element => element.closest('.slider__item_active'))
    if (index < push.length && index !== -1) {
        sliderImages[index].closest('.slider__item').classList.remove('slider__item_active')
        sliderImages[index + 1].closest('.slider__item').classList.add('slider__item_active')
    } else {
        sliderImages[index].closest('.slider__item').classList.remove('slider__item_active')
        sliderImages[0].closest('.slider__item').classList.add('slider__item_active')
    }
}


push.forEach(item => item.onclick = changeImg)

dot.forEach(item => item.onclick = function () {
    const index = dot.findIndex(element => element.closest('.slider__dot_active'));
    if (index != -1) {
        dot[index].classList.remove('slider__dot_active');
    }
    item.classList.add('slider__dot_active');
    changeImg();
});













