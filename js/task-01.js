const listOfCategories = document.querySelector('#categories');
const categoriesSum = listOfCategories.children.length;
const itemsEl = document.querySelectorAll('.item');



console.log("Number of categories:", categoriesSum);
console.log("");

itemsEl.forEach(element => {
	console.log("Category: ", element.querySelector('h2').textContent);
	console.log("Elements: ", element.querySelectorAll('li').length);
	console.log("");
});
