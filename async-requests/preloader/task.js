const loader = document.getElementById('loader')
const items = document.getElementById('items')

const xhr = new XMLHttpRequest()
xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {
        loader.classList.remove('loader_active')

        const exchangRates = JSON.parse(xhr.response)
        const exchangRatesList = exchangRates.response.Valute

        for (let value of Object.values(exchangRatesList)) {
            items.innerHTML += `
            <div class="item">
                <div class="item__code">
                    ${value.CharCode}
                </div>
                <div class="item__value">
                    ${value.Value}
                </div>
                <div class="item__currency">
                   руб.
                </div>
        `;
        }
    }
})

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses')
xhr.send()


