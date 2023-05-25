const taskInput = document.querySelector('#task__input')
const tasksAdd = document.querySelector("#tasks__add")
const tasksList = document.querySelector('#tasks__list')

tasksAdd.addEventListener('click', (e) => {
    if (!taskInput.value) {
        return
    } else {
        const task = document.createElement('div')
        task.classList.add('task')
        task.innerHTML = `<div class="task__title">${taskInput.value}</div><a href="#" class="task__remove">&times;</a>`
        tasksList.appendChild(task)
        taskInput.value = ''
        e.preventDefault()

        const taskRemove = document.querySelectorAll('.task__remove')
        taskRemove.forEach(i => {
            i.addEventListener('click', (e) => {
                i.closest('.task').remove()
            })
        })
    }
})



