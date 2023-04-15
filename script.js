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

function createForm() {

    data.forEach((elem) => {
        if (elem.type != "radio" && elem.type != "checkbox") {


            const input = document.createElement('input');
            const label = document.createElement('label');
            const br = document.createElement("br")

            input.type = elem.type;

            input.value = elem.value;//////
            input.id = elem.id;
            input.name = elem.id;

            label.setAttribute('for', elem.id)
            label.innerText = elem.id

            form.append(label);
            form.append(input);
            form.append(br)

        }


        if (elem.type === 'radio' || elem.type === 'checkbox') {

            const input = document.createElement('input');
            const label = document.createElement('label');
            const br = document.createElement("br")

            label.innerText = elem.id + ":";
            form.append(label)
            input.type = elem.type
            elem.options.map(function (item, index) {
                const input = document.createElement('input');
                const label = document.createElement('label');
                input.name = elem.id;
                input.type = elem.type;
                label.id = elem.options[index];
                label.textContent = elem.options[index];
                input.value = elem.options[index];
                form.append(input);
                form.append(label);
                form.append(br)
            })
        }



    })



    let submit = document.createElement('input');
    submit.setAttribute("type", "submit");
    submit.formMethod = 'get';

    form.append(submit);



    form.addEventListener("submit", getForm);

    document.querySelector('form').addEventListener('submit', (e) => {
        const formData = new FormData(e.target);
        e.preventDefault();
        
    })



    function getForm() {
        let formData = new FormData(document.querySelector('form'));
        let a = new Object();


        for (i = 0; i < data.length; i++) {

            console.log(data[i].id + ":" + formData.get(data[i].id));

            a += formData.get(data[i].id);


        } return (a);
    }
}
document.body.prepend(form);

createForm(data)