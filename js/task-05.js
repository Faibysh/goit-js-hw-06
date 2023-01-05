const inputRef = document.querySelector('#name-input');
console.log(inputRef);
const spanRef = document.querySelector('#name-output');
console.log(spanRef);

inputRef.addEventListener('input', (event) => {
  if (event.currentTarget.value === '') {
    return spanRef.textContent = "Anonymous";
}
if (event) {
  return spanRef.textContent = event.currentTarget.value
}
})
  