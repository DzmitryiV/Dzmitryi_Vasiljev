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
            inputForm.setAttribute('type', 'radio');
            inputForm.setAttribute('id', element.id)

            const p = document.createElement('p');
            p.setAttribute('id', element.id);
            p.innerText = element.title;

            const closed = document.createElement('div');
            closed.classList.add('closed');
            p.classList.add('completed');
            closed.onclick = function (event) {
                let target = event.target;
                console.log(target);
                let a = target.closest('.divstyle');
                a.remove()
            };

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
            inputForm.setAttribute('type', 'radio');
            inputForm.setAttribute('id', element.id)

            const p = document.createElement('p');
            p.setAttribute('id', element.id);
            p.innerText = element.title;

            const closed = document.createElement('div');
            closed.classList.add('closed');
            closed.setAttribute('id', element.id)
            closed.onclick = function (event) {
                let target = event.target;
                let a = target.closest('.divstyle');
                a.remove()
            };

            inputForm.onclick = function (event) {
                let target = event.target;
                (target.closest('.divstyle')).classList.add('completed')
                divCompleted.append(target.closest('.divstyle'))
            };

            const imgInClosed = document.createElement('img');
            imgInClosed.setAttribute('src', 'https://cdn.icon-icons.com/icons2/2098/PNG/512/circle_close_cross_icon_128693.png');
            imgInClosed.setAttribute('id', element.id)

            divActive.append(div);
            div.append(inputForm);
            div.append(p);
            div.append(closed);
            closed.append(imgInClosed);

        }
        const url = 'http://jsonplaceholder.typicode.com/todos/';
        let data = {};
        var request = new Request(url, {
            method: 'POST',
            body: data,
        });

        fetch(request)
            .then(function () {
console.log(data);
            })
    }))

const headerCompleted = document.createElement('h2');
headerCompleted.innerText = 'Completed';
headerCompleted.classList.add('header_completed');
divCompleted.append(headerCompleted);


function addTask() {
    const div = document.createElement('div');
    div.classList.add('divstyle');
    div.setAttribute('id', 'Add_Task_Div')
    const inputForm = document.createElement('input');
    inputForm.setAttribute('type', 'radio');
    inputForm.setAttribute('id', 'new_task')
    const p = document.createElement('p');
    p.setAttribute('id', 'Add_Task')
    p.innerText = 'Add Task';
    const closed = document.createElement('div');
    div.classList.add('addTask');
    divActive.append(div);
    div.append(inputForm);
    div.append(p)
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
    userTaskNew.classList.remove('addTask')

    closed.onclick = function (event) {
        let target = event.target;
        let a = target.closest('.divstyle');
        a.remove()

    };
    addTask()
    const url = 'http://jsonplaceholder.typicode.com/todos/';
    let data = {};
    var request = new Request(url, {
        method: 'POST',
        body: data,
    });

    fetch(request)
        .then(function () {
            console.log(data);
         
        })

}
let newForm = document.getElementById('new_task');
newForm.onclick = function (event) {
    let target = event.target;
    let newDiv = document.getElementById('Add_Task_Div');
    divActive.append(newDiv);
    newDiv.classList.add('.divstyle')
    createTask()
};











