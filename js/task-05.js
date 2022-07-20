const inputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('span');
inputEl.addEventListener('input', onInputChange);
function onInputChange(event) {
	event.currentTarget.value === "" ?
		spanEl.textContent = "Anonymous" :
		spanEl.textContent = event.currentTarget.value;
}