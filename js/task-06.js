const inputRef = document.querySelector('#validation-input');
inputRef.addEventListener('blur', onInputRefBlur);

function onInputRefBlur(event) {

    const limit = Number(inputRef.dataset.length);
    console.log(limit);
event.currentTarget.value.length === limit ? inputRef.classList.add('valid') : inputRef.classList.add('invalid');
}
