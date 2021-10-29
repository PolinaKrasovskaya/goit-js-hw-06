const inputRef = document.querySelector('#name-input');
const nameOutputRef = document.querySelector('#name-output');

inputRef.addEventListener('input', (event) => {
    if (inputRef.value === ""){
        return nameOutputRef.textContent = 'Anonymous';
    }
    nameOutputRef.textContent = event.currentTarget.value;
})
