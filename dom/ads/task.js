const rotatorCases = [...document.querySelectorAll('.rotator__case')]

let index = 0

setInterval(() => {
    rotatorCases.map(element => element.classList.remove('rotator__case_active'))
    rotatorCases[index].classList.add('rotator__case_active')
    const colorText = rotatorCases[index].getAttribute('data-color')
    rotatorCases[index].style.color = colorText
    index++
    if (index >= rotatorCases.length) {
        index = 0
    }
}, 1000)

