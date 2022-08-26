const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', onInputRefBlur);

function onInputRefBlur(event) {
    event.currentTarget.value.length === 6 ? inputRef.classList.add('valid') : inputRef.classList.add('invalid');
}
