let email = {}, // = leeg object
password = {},
signInButton;

const getDOMElements = function() {
    email.errorMessage = document.querySelector(".js-email-error");
    email.input = document.querySelector(".js-email-input");
    email.field = document.querySelector(".js-email-field");
    
    password.errorMessage = document.querySelector(".js-password-error");
    password.input = document.querySelector(".js-password-input");
    password.field = document.querySelector(".js-password-field");;

    signInButton = document.querySelector(".js-sign-in-button");
}

const enableListeners = function() {
    email.input.addEventListener("blur", function() {
        if (!isValidEmailAddress(email.input.value)) {
            console.log("ongeldig email")
        }
    });

    password.input.addEventListener("blur", function() {
        if (isEmpty(password.input.value)) {
            console.log("ongeldig email")
        }
    });
}

const isValidEmailAddress = function(emailAddress) {
    // Basis manier om e-mailadres te checken.
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailAddress);
};

const isValidPassword = function(password) {
    // TODO
};

const isEmpty = function(fieldValue) {
    return !fieldValue || !fieldValue.length;
 };

document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM loaded 🥳');

    getDOMElements();

    enableListeners();
});