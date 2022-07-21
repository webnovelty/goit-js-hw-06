const buttonEl = document.querySelector('.change-color');
const spanEl = document.querySelector('.color');
function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
buttonEl.addEventListener('click', onColorChange);
function onColorChange() {
	document.body.style.backgroundColor = getRandomHexColor();
	spanEl.textContent = document.body.style.backgroundColor;

}
