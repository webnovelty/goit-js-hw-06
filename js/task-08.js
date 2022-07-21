const form = document.querySelector('.login-form');
const inputEl = document.querySelectorAll('input');
const submitObj = {};

form.addEventListener('submit', onFormSubmit);
function onFormSubmit(event) {
	event.preventDefault();
	const formElements = event.currentTarget.elements;
	if (formElements.email.value === '' || formElements.password.value === '') {
		alert('все поля должны быть заполнены')
	}
	else {
		submitObj.email = formElements.email.value;
		submitObj.password = formElements.password.value;
		console.log('Объект с данными формы = ', submitObj);

		form.reset();

	}


}
