const inputRef = document.querySelector('#validation-input');
const onInputBlurHandler = (e) => {
  const inputLength = inputRef.getAttribute('data-length')
  // ['data-length'];s
  console.log(inputLength);
  if (Number(e.target.value.length) === Number(inputLength)) {
    inputRef.classList.remove('invalid')
    inputRef.classList.add('valid')
} else {
  inputRef.classList.remove('valid')
  inputRef.classList.add('invalid')
}
}

inputRef.addEventListener('blur', onInputBlurHandler);