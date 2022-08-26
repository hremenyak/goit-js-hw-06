function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const divContainerRef = document.querySelector('#boxes');

const input = document.querySelector('input');
const createBtnRef = document.querySelector('button[data-create]');
const destroyBtnRef = document.querySelector('button[data-destroy]'); 


createBtnRef.addEventListener('click', createBoxes);
destroyBtnRef.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  const boxes = [];
  amount = input.value;
  for (let i = 0; i <= amount; i += 1){
    const div = document.createElement('div');

    div.style.width = `${30+i*10}px`;
    div.style.height = `${30+i*10}px`;
    div.style.backgroundColor = getRandomHexColor();

    boxes.push(div);
  }

  console.log(boxes);
  divContainerRef.append(...boxes);
  input.value = '';

 
}

function destroyBoxes() {
  divContainerRef.innerHTML = '';
}