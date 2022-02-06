const form = document.getElementById("account");
form.noValidate=true;
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const passwordError = document.getElementById("password-error");

form.addEventListener('submit', validateForm);

function validateForm(e) {
    if (password.value === confirmPassword.value) {
        console.log("success")
        password.classList.remove("invalid");
        confirmPassword.classList.remove("invalid");
        passwordError.innerHTML = '';
    } else {
        console.log(password.value)
        console.log(confirmPassword.value)
        e.preventDefault();
        console.log("not same value!")
        password.classList.add("invalid");
        confirmPassword.classList.add("invalid");
        passwordError.innerHTML = '* Passwords do not match';
    }
}
