const inputEL = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');
inputEL.addEventListener('input', onInputChange);
function onInputChange(event) {
	spanEl.setAttribute('style', `font-size: ${event.currentTarget.value}px`);

}
