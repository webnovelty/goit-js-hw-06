function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
}

const inputEl = document.querySelector('input');
const buttonCreateEl = document.querySelector('[data-create]');
const buttonDestroyEl = document.querySelector('[data-destroy]');
const divEl = document.querySelector('#boxes');



buttonCreateEl.addEventListener('click', createCollection);
buttonDestroyEl.addEventListener('click', destroyBoxes);

function createCollection() {
	const collection = [];
	for (let i = 0; i < inputEl.value; i += 1) {
		collection.push(getRandomInt(inputEl.min, inputEl.max));
	}

	createBoxes(collection);

}
function createBoxes(amount) {
	let widthEl = 30;
	let heightEl = 30;
	const elements = amount.map(option => {
		const elementLi = document.createElement('div');

		elementLi.textContent = option;
		elementLi.setAttribute('style',
			`background-color: ${getRandomHexColor()}; 
			width: ${widthEl}px;
			height: ${heightEl}px;
			text-align: center`);
		widthEl += 10;
		heightEl += 10;
		return elementLi;
	}
	)
	divEl.append(...elements);

}

function destroyBoxes() {
	const childDiv = divEl.querySelectorAll('div');
	for (let element of childDiv) { element.remove() };
}