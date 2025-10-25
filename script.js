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



        const addSubBtn = document.createElement('button')
        addSubBtn.classList.add('subtask-btn')
        addSubBtn.textContent = '+ Subtask'

        
        const li = document.createElement('li')
        li.textContent = input.value
        
        const subList = document.createElement('ul')
        li.appendChild(subList)
        
        li.appendChild(deleteBtn)
        li.appendChild(addSubBtn)
        ol.appendChild(li)


        deleteBtn.addEventListener('click', (event)=>{
            event.stopPropagation();
            li.remove()
        })
        input.value = ''

        addSubBtn.addEventListener('click' , ()=>{
        const subtaskName = prompt('Enter Subtask: ')
        if(subtaskName){
            const subtaskLi = document.createElement('li');
            subtaskLi.textContent = subtaskName
            subList.appendChild(subtaskLi)
    }
})
    })




