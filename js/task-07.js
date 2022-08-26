const inputFontControlRef = document.querySelector('#font-size-control');

const textRef = document.querySelector('#text');

inputFontControlRef.addEventListener('input', onInput);

function onInput(event) {
    textRef.style.fontSize = `${event.currentTarget.value}px`;

}
