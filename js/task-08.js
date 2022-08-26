const formRef = document.querySelector('.login-form');

formRef.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    const {
        elements: { email, password }
    } = event.currentTarget;
   
    let ourData = {};

    ourData.email = email.value;
    ourData.password = password.value;



    if (!email.value || !password.value) {
        window.alert('Please, fill out all the fields!')
    } else (console.log(ourData)
       
    )
     formRef.reset();
}
