const fontSizes = [...document.querySelectorAll('.font-size')]

function onClick(e) {
    const link = e.target
    fontSizes.filter(element => element.closest('.font-size_active')).map(element => element.classList.remove('font-size_active'))
    link.classList.add('font-size_active')

    const dataSize = link.getAttribute('data-size')
    const book = link.closest('.book')

    book.classList.remove('book_fs-big')
    book.classList.remove('book_fs-small')

    if (dataSize != null) {
        book.classList.add(`book_fs-${dataSize}`)
    }
    e.preventDefault()
}

fontSizes.forEach(element => element.addEventListener('click', onClick))


const bookControlColor = document.querySelector('.book__control_color')
const textColors = [...bookControlColor.querySelectorAll('.color')]

function onClickTextColor(e) {
    const link = e.target
    const book = link.closest('.book')

    book.classList.remove('book_color-gray')
    book.classList.remove('book_color-whitesmoke')
    book.classList.remove('book_color-black')

    textColors.filter(element => element.closest('.color_active')).map(element => element.classList.remove('color_active'))
    link.classList.add('color_active')
    const dataTextColor = link.getAttribute('data-text-color')
    book.classList.add(`book_color-${dataTextColor}`)

    e.preventDefault()
}

textColors.forEach(element => element.addEventListener('click', onClickTextColor))


const bookControlBackground = document.querySelector('.book__control_background')
const bgColors = [...bookControlBackground.querySelectorAll('.color')]

function onClickBgColor(e) {
    const link = e.target
    const book = link.closest('.book')

    book.classList.remove('book_bg-gray')
    book.classList.remove('book_bg-black')
    book.classList.remove('book_bg-white')

    bgColors.filter(element => element.closest('.color_active')).map(element => element.classList.remove('color_active'))
    link.classList.add('color_active')
    const dataBgColor = link.getAttribute('data-bg-color')
    book.classList.add(`book_bg-${dataBgColor}`)

    e.preventDefault()
}

bgColors.forEach(element => element.addEventListener('click', onClickBgColor))
