const headerTask = document.createElement('h1');
headerTask.innerText = 'Tasks';
headerTask.classList.add('header_style');
document.body.append(headerTask);
const divActive = document.createElement('div');
document.body.append(divActive);
const divCompleted = document.createElement('div');
document.body.append(divCompleted);

fetch('https://jsonplaceholder.typicode.com/todos/')
    .then(response => response.json())
    .then(taskList => taskList.forEach(element => {
        if (element.completed) {
            const div = document.createElement('div');
            div.classList.add('divstyle');
            div.setAttribute('id', element.id)
            const inputForm = document.createElement('input');
            inputForm.setAttribute('type', 'button');
            inputForm.setAttribute('id', element.id)
            inputForm.setAttribute('class', 'divcompleted')
            const p = document.createElement('p');
            p.setAttribute('id', element.id);
            p.innerText = element.title;
            const closed = document.createElement('div');
            closed.classList.add('closed');
            div.classList.add('completed');
            closed.setAttribute('id', element.id)
            const imgInClosed = document.createElement('img');
            imgInClosed.setAttribute('src', 'https://cdn.icon-icons.com/icons2/2098/PNG/512/circle_close_cross_icon_128693.png');
            imgInClosed.setAttribute('id', element.id);
            divCompleted.append(div);
            div.append(inputForm);
            div.append(p);
            div.append(closed);
            closed.append(imgInClosed);
        }
        else {
            const div = document.createElement('div');
            div.setAttribute('id', element.id);
            div.classList.add('divstyle');
            const inputForm = document.createElement('input');
            inputForm.setAttribute('type', 'button');
            inputForm.setAttribute('id', element.id)
            inputForm.classList.add('divactive');
            const p = document.createElement('p');
            p.setAttribute('id', element.id);
            p.innerText = element.title;
            const closed = document.createElement('div');
            closed.classList.add('closed');
            closed.setAttribute('id', element.id)
            const imgInClosed = document.createElement('img');
            imgInClosed.setAttribute('src', 'https://cdn.icon-icons.com/icons2/2098/PNG/512/circle_close_cross_icon_128693.png');
            imgInClosed.setAttribute('id', element.id)
            divActive.append(div);
            div.append(inputForm);
            div.append(p);
            div.append(closed);
            closed.append(imgInClosed);
        }

   
    

        document.onclick = function (event) {
            let target = event.target;
            if (target.tagName === 'IMG') {
                let a = target.closest('.divstyle');
                a.remove();
            }
            else if (target.tagName === 'INPUT' && target.matches('.divcompleted')) {

                (target.closest('.divstyle')).classList.remove('completed');
                divActive.append(target.closest('.divstyle'))
                target.classList.add('divactive')
                target.classList.remove('divcompleted')
            }
            else if (target.tagName === 'INPUT' && target.matches('.divactive')) {
                (target.closest('.divstyle')).classList.add('completed');
                divCompleted.append(target.closest('.divstyle'))
                target.classList.remove('divactive')
                target.classList.add('divcompleted');
            }
            else if (target.tagName === 'INPUT' && target.id === 'new_task') {
                event.target.id = 'active';
                target.classList.add('divactive')
                createTask()
                addTask()

            }


          
 const myElement = document.querySelectorAll('p');
                // console.log(myElement);
                // console.log(JSON.stringify(myElement));

          

            fetch('https://jsonplaceholder.typicode.com/todos/', {
                method: 'POST',
                body: JSON.stringify(myElement), 
            })
                .then((response) => response.json())
                .then((myElement) => {
                    console.log(myElement)
                
                })

               

        }


    }))

    function addTask() {
        const divAddTask = document.createElement('div');
        divAddTask.setAttribute('id', 'Add_Task_Div');
        divAddTask.classList.add('divstyle');
        divAddTask.classList.add('addTask');
        const inputForm = document.createElement('input');
        inputForm.setAttribute('type', 'button');
        inputForm.setAttribute('id', 'new_task')
        const p = document.createElement('p');
        p.setAttribute('id', 'Add_Task')
        p.innerText = 'Add Task';
        divActive.append(divAddTask);
        divAddTask.append(inputForm);
        divAddTask.append(p)
    }
    addTask()
    function createTask() {
        let innerTextUser = prompt('Введите текст задачи')
        let userTask = document.getElementById('Add_Task');
        let userTaskNew = document.getElementById('Add_Task_Div');
        userTask.innerText = innerTextUser;
        const closed = document.createElement('div');
        closed.classList.add('closed');
        const imgInClosed = document.createElement('img');
        imgInClosed.setAttribute('src', 'https://cdn.icon-icons.com/icons2/2098/PNG/512/circle_close_cross_icon_128693.png');
        divActive.append(userTaskNew);
        userTaskNew.append(closed)
        closed.append(imgInClosed)
        userTaskNew.classList.remove('addTask');
        userTaskNew.removeAttribute('id')
    }

//   const myElement = document.querySelectorAll('div');
//             console.log(myElement);
    
        const headerCompleted = document.createElement('h2');
        headerCompleted.innerText = 'Completed';
        headerCompleted.classList.add('header_completed');
        divCompleted.append(headerCompleted);














