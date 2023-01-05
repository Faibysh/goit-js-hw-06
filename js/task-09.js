function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyRef = document.querySelector('body');
const btnRef = document.querySelector('.change-color');
const spanRef = document.querySelector('.color');
const onBtnClickHandler = (e) =>  {
  const hex = getRandomHexColor();
  bodyRef.style.backgroundColor = hex;
  spanRef.textContent = hex;
}


btnRef.addEventListener('click', onBtnClickHandler);


