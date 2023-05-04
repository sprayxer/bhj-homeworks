const sliderItems = [...document.querySelectorAll('.slider__item')]
const sliderDots = [...document.querySelectorAll('.slider__dot')]

function changeSlider(e) {

    const indexActive = sliderItems.findIndex(element => element === document.querySelector('.slider__item_active'))
    sliderItems[indexActive].classList.remove('slider__item_active')
    sliderDots[indexActive].classList.remove('slider__dot_active')

    let indexSlider
    if (e.target.classList.contains('slider__arrow_next')) {
        indexSlider = indexActive + 1
    } else if (e.target.classList.contains('slider__arrow_prev')) {
        indexSlider = indexActive - 1
    } else if (e.target.classList.contains('slider__dot')) {
        indexSlider = sliderDots.indexOf(e.target)
    }

    if (indexSlider === -1) {
        indexSlider = sliderItems.length - 1
    } else if (indexSlider === sliderItems.length) {
        indexSlider = 0
    }

    sliderItems[indexSlider].classList.add('slider__item_active')
    sliderDots[indexSlider].classList.add('slider__dot_active')
}

const sliderArrows = [...document.querySelectorAll('.slider__arrow')]
sliderArrows.forEach(element => {
    element.addEventListener('click', changeSlider)
})

sliderDots.forEach(element => {
    element.addEventListener('click', changeSlider)
})




