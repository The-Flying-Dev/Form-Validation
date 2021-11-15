
const form = document.getElementById("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const username = document.getElementById("username");
const password = document.getElementById("password");
const checkPassword = document.getElementById("checkPassword");
const submitBtn = document.getElementById("btn-submit");



form.addEventListener('submit', e => {
    e.preventDefault();

    validatesInput();       //gets called when submit button is clicked.

});

const setError = (element, message) => {
    const inputControl = element.parentElement;                 //gets the parent element of the paramenter passed in
    const displayError = inputControl.querySelector('.error'); //grabs the class element inside the parent element mentioned above where the error message will be displayed
    
    displayError.textContent = message;
    inputControl.classList.add('error');            //class defined in styles.css used only for styling
    inputControl.classList.remove('success');       //class defined in styles.css used only for styling

}


const setSuccess = (element) => { 
    const inputControl = element.parentElement;                     //grab the element
    const displayError = inputControl.querySelector('.error');

    displayError.textContent = '';                                 //not going to render out any messages
    inputControl.classList.add('success');                         //changes field to green             
    inputControl.classList.remove('error');

}

//function using regular expression

const isValidEmail = email => { 
    const regularExpression = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regularExpression.test(String(email).toLowerCase());
}

//main function to check constraints

const validatesInput = () => {
    const fullNameValue = fullName.value.trim();                //trim() used to remove any whitespaces on each side of the string
    const emailValue = email.value.trim();
    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();
    const checkPasswordValue = checkPassword.value.trim();

    if (fullNameValue === '') {
        setError(fullName, 'Can\'t be blank');
    } else {
        setSuccess(fullName);
    }


    if (emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail) {
        setError(email, 'Enter a valid email');
    } else {
        setSuccess(email);
    }


    if (usernameValue === '') {
        setError(username, 'Username is required'); 
    } else {
        setSuccess(username);
    }


    if (passwordValue === '') {
        setError(password, 'Password can\'t be blank');
    } else if (passwordValue.length < 8) {
        setError(password, 'Must be atleast 8 characters long');
    } else {
        setSuccess(password);
    }


    if (checkPasswordValue === '') {
        setError(checkPassword, 'Confirm your password') ;
    } else if (checkPasswordValue !== passwordValue) {
        setError(checkPassword, 'Passwords must match'); 
    } else {
        setSuccess(checkPassword);
    }

};