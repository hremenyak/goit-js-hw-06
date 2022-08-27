const inputRef = document.querySelector('#validation-input');
inputRef.addEventListener('blur', onInputRefBlur);

function onInputRefBlur(event) {

    const limit = Number(inputRef.dataset.length);
    if (event.target.value.length !== limit) {
        inputRef.classList.add('invalid');
        return;
    } else {
        inputRef.classList.remove('invalid');
        inputRef.classList.add('valid');
        return;
    }
}
