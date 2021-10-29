const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onFormSubmit);

// function onFormSubmit (event) {
//     event.preventDefault();

//     const formElements = event.currentTarget.elements;

//     if(formElements.email.value === "" || formElements.password.value === "") {
//         alert("Все поля должны быть заполнены!");
//     } else {
//         const email = formElements.email.value;
//         const password = formElements.password.value;

//         const formData = {
//             email,
//             password,
//         }

//         console.log(formData);
//     }
//     event.currentTarget.reset();
// };


function onFormSubmit (event) {
    event.preventDefault();

    const formElements = event.currentTarget.elements;

    if(formElements.email.value === "" || formElements.password.value === "") {
        alert("Все поля должны быть заполнены!");
    } else {
        const dataFormResult = {};

        const formData = new FormData(event.currentTarget);

        formData.forEach((value, name) => {
            dataFormResult[name] = value;
        });

        console.log(dataFormResult);
    }
    event.currentTarget.reset();
};