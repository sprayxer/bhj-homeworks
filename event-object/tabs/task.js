const tab = [...document.getElementsByClassName('tab')]
const tabContent = [...document.getElementsByClassName('tab__content')]


function onClick(e) {
    tab.filter(element => element.closest('.tab_active')).map(element => element.classList.remove('tab_active'))
    tabContent.filter(element => element.closest('.tab__content_active')).map(element => element.classList.remove('tab__content_active'))

    const link = e.target
    link.classList.toggle('tab_active')
    const index = tab.findIndex(element => element === link)
    tabContent[index].classList.toggle('tab__content_active')
}

tab.forEach(element => {
    element.addEventListener('click', onClick)
})