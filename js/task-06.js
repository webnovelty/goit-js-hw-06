const inputEl = document.querySelector('#validation-input');
inputEl.addEventListener('blur', onInputValidation);
function onInputValidation(event) {
	const inputAttribute = Number(inputEl.getAttribute('data-length'));

	if (event.currentTarget.value.length != inputAttribute) {
		inputEl.classList.add('invalid');
		inputEl.classList.remove('valid');
	}
	else {
		inputEl.classList.add('valid');
		inputEl.classList.remove('invalid');
	}
}