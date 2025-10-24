'use strict';
let input = document.getElementById('taskInput')
let btn = document.getElementById('addTaskBtn')
let taskList = document.getElementById('taskList')

const ol = document.createElement('ol')
taskList.appendChild(ol)


btn.addEventListener('click',() => {
    // console.log(input.value)
    // console.log(input.textContent)
    if(input.value === ''){
        alert("please enter a task!!!")
        return
    }
        // taskList.push(input.value)
        const deleteBtn = document.createElement('button')
        deleteBtn.textContent = 'x'
        deleteBtn.classList.add('delete-btn')


        const li = document.createElement('li')
        li.textContent = input.value
        li.appendChild(deleteBtn)
        ol.appendChild(li)


        deleteBtn.addEventListener('click', (event)=>{
            event.stopPropagation();
            li.remove()
        })
        input.value = ''
})


