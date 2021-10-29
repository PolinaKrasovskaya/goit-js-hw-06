function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const boxesRef = document.querySelector("#boxes");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const inputEl = document.querySelector("input");

let size = 30;

createBtn.addEventListener('click', () => {
  const amount = inputEl.value;
  createBoxes(amount);
});

function createBoxes (amount) {
  let allEl = [];
  for (let i = 0; i < amount; i += 1) {
    size += 10;
    const divEl = document.createElement("div");
    divEl.style.height = `${size}px`;
    divEl.style.width = `${size}px`;
    divEl.style.backgroundColor = getRandomHexColor();
    boxesRef.appendChild(divEl);
  }
  boxesRef.append(...allEl);
}

destroyBtn.addEventListener('click', () => {
  boxesRef.innerHTML = "";
})