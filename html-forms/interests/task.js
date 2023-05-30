const checkboxs = document.querySelectorAll('.interest__check')

checkboxs.forEach(elem => {
    elem.addEventListener('change', (e) => {
        let parent = elem
        const interests = elem.closest('.interest').querySelector('.interests')
        if (elem.checked == true) {
            if (interests) {
                [...interests.querySelectorAll('.interest__check')].forEach(i => i.checked = true)
            }
            while (!parent.classList.contains('interests_main')) {
                if (parent.classList.contains('interests')) {
                    const children = [...parent.querySelectorAll('.interest__check')]
                    const parentFirst = parent.closest('.interest').querySelector('.interest__check')
                    if (children.some(i => i.checked == false)) {
                        parentFirst.indeterminate = true
                    } else if (children.every(i => i.checked == true)) {
                        parentFirst.indeterminate = false
                        parentFirst.checked = true
                    }
                }
                parent = parent.parentElement
            }
        } else {
            if (interests) {
                [...interests.querySelectorAll('.interest__check')].forEach(i => i.checked = false)
            }
            while (!parent.classList.contains('interests_main')) {
                if (parent.classList.contains('interests')) {
                    const children = [...parent.querySelectorAll('.interest__check')]
                    const parentFirst = parent.closest('.interest').querySelector('.interest__check')
                    if (children.some(i => i.checked == true)) {
                        parentFirst.checked = false
                        parentFirst.indeterminate = true
                    } else if (children.every(i => i.checked == false)) {
                        parentFirst.indeterminate = false
                    }
                }
                parent = parent.parentElement
            }
        }
    })
})




/* !!!   Старые способы решениязадания   !!! */

/* !!!   Первый способ решения   !!! */


/*const interest = [...document.querySelectorAll('.interest')]
const parents = []
interest.forEach(el => {
    if (el.getElementsByTagName('ul').length != 0) {
        parents.push(el)
    }
})

for (let i = 0; i < parents.length; i++) {
    const checkboxFirst = parents[i].querySelector('.interest__check')
    const checkboxAll = parents[i].querySelectorAll('.interest__check')
    checkboxFirst.onchange = (e) => {
        checkboxAll.forEach(el => {
            if (checkboxFirst.checked === true) {
                el.checked = true
            } else {
                el.checked = false
            }
        })
    }
}*/



/* !!!   Второй способ решения   !!! */

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