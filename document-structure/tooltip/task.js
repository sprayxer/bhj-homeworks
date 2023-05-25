const hasTooltip = document.querySelectorAll('.has-tooltip')

hasTooltip.forEach(i => {
    const elem = document.createElement('div')
    elem.classList.add('tooltip')
    elem.setAttribute('data-position', 'top')
    i.appendChild(elem).append(i.title)
    i.addEventListener('click', (e) => {
        elem.classList.toggle('tooltip_active')
        if (document.querySelectorAll('.tooltip_active').length > 1) {
            document.querySelectorAll('.tooltip_active').forEach(i => i.classList.remove('tooltip_active'))
            elem.classList.add('tooltip_active')
        }
        elem.style.top = i.getBoundingClientRect().top + i.getBoundingClientRect().height + 'px'
        elem.style.left = i.getBoundingClientRect().left + 'px'
        e.preventDefault()
    })
})
