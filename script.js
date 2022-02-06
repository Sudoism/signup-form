const form = document.getElementById("account");
form.noValidate=true;
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");

form.addEventListener('submit', validateForm);

function validateForm(e) {

    if (password.value === confirmPassword.value) {
        console.log("success")
        password.classList.remove("invalid");
        confirmPassword.classList.remove("invalid");
    } else {
        console.log(password.value)
        console.log(confirmPassword.value)
        e.preventDefault();
        console.log("not same value!")
        password.classList.add("invalid");
        confirmPassword.classList.add("invalid");
    }
}


//form.addEventListener("submit", (e) => {
//    if (password.value != confirmPassword.value) {
//        console.log("not same value!")
//        password.setAttribute("class", "invalid");
//    } else {
//        return;
//    }
//})