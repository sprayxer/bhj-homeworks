window.addEventListener('scroll', appearanceElement)

const reveals = [...document.querySelectorAll('.reveal')]

function appearanceElement(e) {
    reveals.forEach(reveal => {
        const positionReveal = reveal.getBoundingClientRect()
        return (positionReveal.y >= -positionReveal.height && positionReveal.y <= window.innerHeight) ? reveal.classList.add('reveal_active') : reveal.classList.remove('reveal_active')
    })
}

