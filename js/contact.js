const form = document.querySelector("form");
const fullName = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const btn = document.querySelector("pay_button");
const nameError = document.querySelector("#name-error");
const emailError = document.querySelector("#email-error");
const messageError = document.querySelector("#message-error");
const successMessage = document.querySelector(".suc-message");

function validateForm(event) {
    let errorAccured = false;

    if(!checkLenght(fullName.value, 2)) {
        nameError.style.display = "block";
        errorAccured = true;
    } else {
        nameError.style.display = "none";
    }
    if(!validateEmail(email.value)) {
        emailError.style.display = "block";
        errorAccured = true;
    } else {
        emailError.style.display = "none";
    }
    if(!checkLenght(message.value, 10)) {
        messageError.style.display = "block";
        errorAccured = true;
    } else {
        messageError.style.display = "none";
    }

    if(errorAccured) {
        event.preventDefault();
    } else {
        event.preventDefault();
        form.reset();
        successMessage.innerHTML = `<div class="succsess-message">Your message has been sendt</div>`;
    }
}

form.addEventListener("submit", validateForm);

function checkLenght(value, len) {
    if(value.trim().length >= len) {
        return true;
    } else {
        return false;  
    }
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}

