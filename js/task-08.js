const formRef = document.querySelector(".login-form");
console.log(formRef);
const onSubmitHandler = (e) => {
  e.preventDefault()
  const [email, password] = e.target.elements;
  if (email.value.length !== 0 && password.value.length !== 0) {
    const formData = {
      email: email.value,
      password: password.value,
    }

    console.log(formData);
    formRef.reset()
  }
  else {
    alert('Всі поля повинні бути заповені')
  }
}
formRef.addEventListener('submit', onSubmitHandler)


