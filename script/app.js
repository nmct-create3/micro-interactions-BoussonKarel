let passwordInput, passwordCheckbox;

function handleFloatingLabel() {
   
}

function handlePasswordSwitcher() {
    // Haal in deze functie de password-input en de password-toggle op. Doe dit met .js- prefixed classnames.
    passwordCheckbox.addEventListener("input", function() {
        if (passwordCheckbox.checked) {
            passwordInput.type = "text";
        }
        else {
            passwordInput.type = "password";
        }
    });
    // We gaan luisteren of er geklikt wordt op de checkbox.
    // Als er geklikt wordt, veranderen we het type van de input van 'password' naar 'text' en vice versa.
}

document.addEventListener('DOMContentLoaded', function () {
    passwordInput = document.querySelector(".js-password-input");
    passwordCheckbox = document.querySelector(".js-password-checkbox");

    console.log('Script loaded!');

    handleFloatingLabel();
    handlePasswordSwitcher();
});