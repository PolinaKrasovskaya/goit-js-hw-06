function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  };

  const buttonRef = document.querySelector('.change-color');
  const spanRef = document.querySelector('.color');

  buttonRef.addEventListener('click', () => {
    let color = getRandomHexColor();
    spanRef.textContent = color;
    document.body.style.backgroundColor = color;
  })