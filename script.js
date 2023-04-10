const data = [
    {
        type: "input",
        id: "name",
        value: "",
        placeholder: "name",
    },
    {
        type: "input",
        id: "surname",
        value: "",
        placeholder: "surname",
    },
    {
        type: "date",
        id: "birthday",
        value: "",
        placeholder: "date of birth",
    },
    {
        type: "toggle",
        id: "sex",
        value: "man",
        options: ["man", "woman"],
        placeholder: "sex",
    },
    {
        type: "checkbox",
        id: "time",
        value: "",
        options: ["9-10 AM", "11-102 AM", "1-2 PM", "3-4 PM", "5-6 PM"],
        placeholder: "select timeslot for assessment",
    },
];
data.forEach(function (record) {
    if (record.type === "toggle") {
        record.type = "radio";
    }
});




let form = document.createElement('form');

document.body.prepend(form);

for (var i = 0; i < data.length; i++) {
    if (data[i].id === "name") {
        let Name = document.createElement("input");
        const label = document.createElement('label');
        label.innerText = 'name';
        form.append(label);
        form.append(Name);
        Name.setAttribute("type", (data[i].type));
        Name.setAttribute("id", (data[i].id));
        Name.setAttribute("value", (data[i].value));
        Name.setAttribute("name", (data[i].placeholder))


    }
    else if (data[i].id === "surname") {
        let Name = document.createElement("input");
        const label = document.createElement('label');
        label.innerText = 'surname';
        Name.setAttribute("type", (data[i].type));
        Name.setAttribute("id", (data[i].id));
        Name.setAttribute("value", (data[i].value));
        Name.setAttribute("surname", (data[i].placeholder))
        form.append(label);
        form.append(Name);


    }
    else if (data[i].id === "birthday") {
        let Name = document.createElement("input");
        const label = document.createElement('label');
        label.innerText = 'birthday';
        Name.setAttribute("type", (data[i].type));
        Name.setAttribute("id", (data[i].id));
        Name.setAttribute("value", (data[i].value));
        Name.setAttribute("placeholder", (data[i].placeholder))
        form.append(label);
        form.append(Name);

    }
}


data.forEach((elem) => {

    if (elem.type === 'radio') {

        const input = document.createElement('input');
        const label = document.createElement('label');
        label.innerText = 'sex:'
        form.append(label)
        input.type = 'radio'
        elem.options.map(function (item, index) {
            const input = document.createElement('input');
            const label = document.createElement('label');
            input.name = elem.id;
            input.type = 'radio';
            label.id = elem.options[index];
            label.textContent = elem.options[index];
            input.value = label.id;
            form.append(input);
            form.append(label);
        })
    }
    if (elem.type === 'checkbox') {
        const input = document.createElement('input');
        const label = document.createElement('label');

        label.innerText = 'time:'
        form.append(label)

        input.type = elem.type
        input.value = elem.value

        elem.options.map(function (item, index) {

            let input = document.createElement('input');
            let label = document.createElement('label');

            input.name = elem.options[index];
            input.type = elem.type;

            label.id = elem.options[index];
            label.textContent = elem.options[index];

            form.append(input);
            form.append(label);
        })
    }
})



document.querySelector('form').addEventListener('submit', (e) => {
    const formData = new FormData(e.target);
    e.preventDefault();
    console.log(formData.get('name'));
})



function getForm() {
    let formData = new FormData(document.querySelector('form'));
    let a = '';
    for (i = 0; i < data.length; i++) {
        console.log(formData.get(data[i].id));
        a += formData.get(data[i].id);
        return a
    }
}

let Submit = document.createElement('input');
document.body.append(Submit);
Submit.setAttribute("type", "submit")
Submit.formMethod = 'get'


Submit.addEventListener("click", getForm);



