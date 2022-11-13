document.querySelector('#input').addEventListener('change', addValue);
document.querySelector('#reset').addEventListener('click', reset);
const productsList = document.querySelector('.products-list');
let productNumber = 1;
let inputValue;
let item = "";
let elems = [];

function getValue() {
	inputValue = document.getElementById('input').value;
	document.getElementById('input').value = '';
	return inputValue;
}

function addValue() {
	item = document.createElement(`p`);
	item.classList.add(`item${productNumber}`);
	item.textContent = `${productNumber}) ${getValue()}`;
	productsList.appendChild(item);
	productNumber += 1;

	item.onclick = function (e) {
		this.classList.toggle("active");
	}
}

function reset() {
	while (productsList.firstChild) {
		productsList.removeChild(productsList.lastChild);
	}
	productNumber = 1;
}
