function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const bodyRef = document.body;

const btnRef = document.querySelector('.change-color');

const colorName = document.querySelector('.color');

btnRef.addEventListener('click', onBtnClick);

function onBtnClick(event) {
  bodyRef.style.backgroundColor = getRandomHexColor();

  colorName.textContent = getRandomHexColor();

}