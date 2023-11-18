let tasks = JSON.parse(localStorage.getItem('tasks')) ?? []

// window.addEventListener('load',()=>{
    const form = document.querySelector("#new_task_form");
    const input = document.querySelector("#new_task_input");
    const list_el = document.querySelector("#tasks");
    const task_delete_el = document.querySelector(".delete");



    form.addEventListener('submit',(e)=>{
        e.preventDefault()
        const task = input.value.replace(/\s+/g, ' ').trim()
                       
        if(   !task 
            || task == null 
            || task == undefined 
            || task == " "  
            || task.trim().length == 0){
            alert('enter a task to submit!')
            input.value = ''
            return 
        }
        tasks.push(task)

        const taskobj = JSON.stringify(tasks)

        localStorage.setItem('tasks', taskobj)

        renderTasks()


        // Creating elements ->
        function renderTasks(){
            list_el.innerHTML = ''
            // const task_el = document.createElement('div') //task_el
            // task_el.classList.add('task')

            // const task_content_el = document.createElement('div') //content_el
            // task_content_el.classList.add('content')

            // task_el.appendChild(task_content_el) //*adding content to task

            // const task_input_el = document.createElement('input') //input_el
            // task_input_el.classList.add('text')
            // task_input_el.type = 'text'
            // task_input_el.value = task
            // task_input_el.setAttribute('readonly', 'readonly')

            // task_content_el.appendChild(task_input_el) //adding input to content

            // const task_actions_el = document.createElement('div') //actions_el
            // task_actions_el.classList.add('actions')

            // const task_edit_el = document.createElement('button') //edit_el
            // task_edit_el.classList.add('edit')
            // task_edit_el.innerHTML = 'Edit'

            // const task_delete_el = document.createElement('button') //delete_el
            // task_delete_el.classList.add('delete')
            // task_delete_el.innerHTML = 'Delete'

            // task_actions_el.appendChild(task_edit_el) //adding edit to actions
            // task_actions_el.appendChild(task_delete_el) //adding delete to actions

            // task_el.appendChild(task_actions_el) //*adding actions to task

            // list_el.appendChild(task_el) //*adding task to tasks

            input.value = '' //clears the input after form submit
            tasks.forEach(i =>
                list_el.innerHTML += `
                <div class="task">
                    <div class="content">
                        <input type='radio'/>
                        <input
                        type="text"
                        class="text"
                        value="${i}"
                        readonly>
                    </div>
                    <div class="actions">
                        <button class="edit">Edit</button>
                        <button class="delete">Delete</button>
                    </div>
                </div> 
            `)
        }
        renderTasks()
        

        // const task_el = document.querySelector(".task");
        // const task_input_el = document.querySelector(".text");
        // const task_edit_el = document.querySelector(".edit");
        // task_edit_el.addEventListener("click", () => {
        //     if(task_edit_el.innerText.toLowerCase() == 'edit'){
        //         task_input_el.removeAttribute('readonly')
        //         task_input_el.focus()
        //         task_edit_el.innerText = "Save"
        //     }else{
        //         task_input_el.setAttribute('readonly','readolny')
        //         task_edit_el.innerText = "Edit"
        //     }
        // });

        // task_delete_el.addEventListener("click", () => {
            
        //     // localStorage.setItem('tasks')
            
        // });


    })
// })