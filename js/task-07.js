const inputRef = document.querySelector('#font-size-control');
console.log(inputRef);
const textRef = document.querySelector('#text');
console.log(textRef);

const onInputHandler = (e) => {
  const rangeValue = e.target.value
  console.log(textRef.style);
  textRef.style.fontSize = `${rangeValue}px`
}

inputRef.addEventListener('input', onInputHandler);


