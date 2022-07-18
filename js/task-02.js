const ingredients = [
	'Potatoes',
	'Mushrooms',
	'Garlic',
	'Tomatos',
	'Herbs',
	'Condiments',
];

const ingredientsEl = document.querySelector('#ingredients');
const elements = ingredients.map(option => {
	const elementLi = document.createElement('li');
	elementLi.classList.add('item');
	elementLi.textContent = option;
	return elementLi;
});

ingredientsEl.append(...elements);