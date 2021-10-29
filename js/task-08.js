const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event){
    event.preventDefault();

    const dataFormResult = {};

    const formData = new FormData(event.currentTarget);
    console.log(formData)


    formData.forEach(value, name) => {
        console.log(value);
        dataFormResult[name] = value;
    }
}