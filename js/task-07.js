const inputRef = document.querySelector('#font-size-control');
const textByRange = document.querySelector('#text');

inputRef.addEventListener('input', (event) => {
    textByRange.style.fontSize = event.currentTarget.value + 'px';
})
