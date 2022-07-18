const ingredients = [
	'Potatoes',
	'Mushrooms',
	'Garlic',
	'Tomatos',
	'Herbs',
	'Condiments',
];

const ingredientsEl = document.querySelector('#ingredients');
const elements = [];
const itemAdd = function (ingredients) {
	ingredients.forEach(element => {
		const elementLi = document.createElement('li');
		elementLi.classList.add('item');
		elementLi.textContent = element;
		elements.push(elementLi);

	});
}
itemAdd(ingredients);
ingredientsEl.append(...elements);