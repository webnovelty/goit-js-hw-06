/* <ul id="categories">
	<li class="item">
		<h2>Animals</h2>

		<ul>
			<li>Cat</li>
			<li>Hamster</li>
			<li>Horse</li>
			<li>Parrot</li>
		</ul>
	</li>
	<li class="item">
		<h2>Products</h2>

		<ul>
			<li>Bread</li>
			<li>Prasley</li>
			<li>Cheese</li>
		</ul>
	</li>
	<li class="item">
		<h2>Technologies</h2>

		<ul>
			<li>HTML</li>
			<li>CSS</li>
			<li>JavaScript</li>
			<li>React</li>
			<li>Node.js</li>
		</ul>
	</li>
</ul> */
const listOfCategories = document.querySelector('#categories');
const categoriesSum = listOfCategories.children.length;
const itemsEl = document.querySelectorAll('.item');



console.log("Number of categories:", categoriesSum);
console.log("");


for (let i = 0; i < itemsEl.length; i += 1) {
	console.log("Category: ", itemsEl[i].children[0].textContent);
	console.log("Elements: ", itemsEl[i].children[1].children.length);
	console.log("");
}

