const form = document.getElementById("account");
form.noValidate=true;
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");

form.addEventListener('submit', validateForm);

function validateForm(e) {

    if (password.value === confirmPassword.value) {
        console.log("success")


    } else {
        console.log(password.value)
        console.log(confirmPassword.value)
        e.preventDefault();
        console.log("not same value!")
        password.setAttribute("class", "invalid");
        confirmPassword.setAttribute("class", "invalid");
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