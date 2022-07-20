const inputEl = document.querySelector('#validation-input');
inputEl.addEventListener('blur', onInputValidation);
function onInputValidation(event) {

	event.currentTarget.value.length <= inputEl.getAttribute('data-length') ?
		inputEl.classList.add('valid') :
		inputEl.classList.add('invalid');

}