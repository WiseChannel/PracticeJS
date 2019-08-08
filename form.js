const form = document.querySelector('form');

form.addEventListener('click', event => {
    event.preventDefault();
    const title = form.title.value;
    const text = form.text.value;
    const description = form.description.value;

    saveForm(text,title,description)
});


// Новый оператор Spread ...
// function saveForm(data) {
//
//     const {title,text,description} = data;
//
//     const formData = {
//         date: new Date().toLocaleDateString(),
//         ...data
//     };
//
//     console.log(formData)
// }


// Rest
function saveForm(...args) {

    const [title,text,description] = args;

    const formData = {
        date: new Date().toLocaleDateString(),
        title,text,description
    };

    console.log(formData)
}