const pollTitle = document.getElementById('poll__title')
const pollAnswers = document.getElementById('poll__answers')

const xhr = new XMLHttpRequest()

xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {
        const survey = JSON.parse(xhr.response)
        pollTitle.append(survey.data.title)
        const answers = survey.data.answers
        answers.forEach(i => {
            pollAnswers.innerHTML += `
            <button class="poll__answer">
              ${i}
            </button>
        `
        });

        const buttons = document.getElementsByClassName('poll__answer')
        console.log(buttons)
        
        for (let elem of buttons) {
            elem.addEventListener('click', (e) => {
                alert('Спасибо, ваш голос засчитан!')
            })
        }
    }
})

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll')
xhr.send()

