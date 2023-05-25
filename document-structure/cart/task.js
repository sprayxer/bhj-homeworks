const productQuantityControl = document.querySelectorAll('.product__quantity-control')
productQuantityControl.forEach(i => {
    i.addEventListener('click', (e) => {
        if (i.classList.contains('product__quantity-control_dec')) {
            const n = i.nextElementSibling
            if (n.textContent == 1) {
                return
            } else {
                n.textContent--
            }
        } else {
            const n = i.previousElementSibling
            n.textContent++
        }
    })
})

const cartProducts = document.querySelector('.cart__products')

const productAdd = document.querySelectorAll('.product__add')
const emptyBasket = document.createElement('div')
const emptyBasketText = document.createTextNode('Очистить корзину')
emptyBasket.classList.add('basket')
const cartTitle = document.querySelector('.cart__title')
productAdd.forEach(i => {
    i.addEventListener('click', () => {
        if (!document.querySelector('.basket')) {
            cartTitle.appendChild(emptyBasket).append(emptyBasketText)
        }

        const dataId = i.closest('.product').getAttribute('data-id')

        const imgSrc = [...(i.closest('.product').getElementsByTagName('img'))][0].src
        const productQuantityValueAdd = i.closest('.product').querySelector('.product__quantity-value').textContent

        const cart = [...cartProducts.querySelectorAll('.cart__product')]

        const validId = cart.findIndex(elem => elem.getAttribute('data-id') === dataId)

        if (cart.length === 0 || validId === -1) {
            cartProducts.innerHTML += `<div class='cart__product' data-id= ${dataId} ><img class='cart__product-image' src = ${imgSrc}><div class='cart__product-count'>${productQuantityValueAdd}</div></div >`
        } else {
            let productQuantityValue = cart[validId].querySelector('.cart__product-count').textContent
            cart[validId].querySelector('.cart__product-count').textContent = Number(productQuantityValue) + Number(productQuantityValueAdd)
        }
        document.querySelector('.basket').addEventListener('click', () => {
            const cart = [...cartProducts.querySelectorAll('.cart__product')]
            cart.forEach(elem => elem.remove())
            emptyBasket.remove()
        })
    })

})



