const interest = [...document.querySelectorAll('.interest')]
const parents = []
interest.forEach(el => {
    if (el.getElementsByTagName('ul').length != 0) {
        parents.push(el)
    }
})

for (let i = 0; i < parents.length; i++) {
    const checkboxFirst = parents[i].querySelector('.interest__check')
    const checkboxAll = parents[i].querySelectorAll('.interest__check')
    checkboxFirst.onchange = () => {
        checkboxAll.forEach(el => {
            if (checkboxFirst.checked === true) {
                el.checked = true
            } else {
                el.checked = false
            }
        })
    }
}



/* Второй вариант выполениния задания */

/*

const interest = [...document.querySelectorAll('.interest')]

interest.forEach(el => {
    const checkbox = el.querySelector('.interest__check')
    checkbox.onchange = function () {
        const arr = [...el.querySelectorAll('.interest')]
        if (el.querySelector('.interest__check').checked === true) {
            arr.forEach(elem => elem.querySelector('.interest__check').checked = true)
        } else {
            arr.forEach(elem => elem.querySelector('.interest__check').checked = false)
        }
    }
})

*/