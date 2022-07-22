const inputEl = document.querySelector('#validation-input');
inputEl.addEventListener('blur', onInputValidation);
function onInputValidation(event) {


	if (event.currentTarget.value.length != inputEl.getAttribute('data-length')) {
		inputEl.classList.add('invalid');
		inputEl.classList.remove('valid');
	}
	else {
		inputEl.classList.add('valid');
		inputEl.classList.remove('invalid');
	}
}