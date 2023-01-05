let counterValue = 0;
const decrementBtn = document.querySelector('button[data-action = "decrement"]')
console.log(decrementBtn);
const incrementBtn = document.querySelector('button[data-action = "increment"]')
console.log(incrementBtn);

const valueEl = document.querySelector('#value');
console.log(valueEl);

decrementBtn.addEventListener('click', pushDecrementBtn);
incrementBtn.addEventListener('click', pushIcrementBtn);

function pushDecrementBtn() {
  counterValue -= 1;
  console.log(counter);
  valueEl.textContent = counterValue;
}

function pushIcrementBtn () {
  counterValue += 1;
  console.log(counter);
  valueEl.textContent = counterValue;
}