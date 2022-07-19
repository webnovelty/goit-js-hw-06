let counterValue = 0;
const decrementEl = document.querySelector('[data-action="decrement"]');
const incrementEl = document.querySelector('[data-action="increment"]');
const counterEl = document.querySelector('#value');

decrementEl.addEventListener('click', onDecrement);
incrementEl.addEventListener('click', onIncrement);

function onDecrement() {
	counterValue -= 1;
	counterEl.textContent = counterValue;
}
function onIncrement() {
	counterValue += 1;
	counterEl.textContent = counterValue;
}