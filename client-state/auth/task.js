// отобразим разметку формы
const signin = document.getElementById('signin')
signin.classList.add('signin_active')

// переменные 'войти', форма, север авторизации, разметка приветствия
const btn = document.getElementById('signin__btn')
const signinForm = document.getElementById('signin__form')
const url = 'https://students.netoservices.ru/nestjs-backend/auth'
const welcome = document.getElementById('welcome')

// имя авторизованного пользователя
const userIdHtml = document.getElementById('user_id')

// разетка ввода данных авторизации
const login = document.getElementsByName('login')
const password = document.getElementsByName('password')

// кнопка удаления авторизованного пользоваля из локального хранилища
const deauth = document.getElementsByClassName('deauth')
deauth[0].addEventListener("click", () => {
    localStorage.removeItem('user_id');
});

// проверяем есть ли в локальном хранилище авторизованный пользователь
if (localStorage.getItem('user_id')) {
    // отображаем разметку приветствия авторизованного пользователя данными из локального хранилища
    welcome.classList.add('welcome_active')
    userIdHtml.textContent = localStorage.getItem('user_id')
}

btn.addEventListener('click', () => {
    // отменяем действие браузера по умолчанию 
    event.preventDefault()

    // заполняем FormData данными из формы
    const formData = new FormData(signinForm)

    // создаем XMLHttpRequest-объект и отправляем данные на сервер
    let xhr = new XMLHttpRequest()
    xhr.open("POST", url, true) // конфигурация запроса
    xhr.send(formData) // отправка запроса

    xhr.onreadystatechange = function () {
        // проверяем статус запроса
        if (xhr.readyState == 4 && xhr.status > 199 && xhr.status < 300) {
            // проверяем результат авторизации success
            if (JSON.parse(xhr.response).success == true) {

                // сохраняем данные авторизованного пользователя в локальное хранилище
                const userId = JSON.parse(xhr.response).user_id
                localStorage.setItem('user_id', userId);

                // отображаем разметку приветствия авторизованного пользователя
                welcome.classList.add('welcome_active')
                userIdHtml.textContent = userId
            } else {
                alert('Неверный логин/пароль')
                
                // очищаем поля ввода
                login[0].value = ''
                password[0].value = ''
            }
        }
    }
})




