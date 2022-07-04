const confirmPassword = document.getElementById("confirm_password");
const password = document.getElementById("password");
const password_not_match = document.getElementById("password_not_match");

password.addEventListener("input", matchPassword);
confirmPassword.addEventListener("input", matchPassword);

function matchPassword() {
    if (password.value != "" && confirmPassword.value != "") {
        if (password.value == confirmPassword.value) {
            password.style.border = "1.5px solid green";
            confirmPassword.style.border = "1.5px solid green";
            password_not_match.style.visibility = "hidden";
        }
    
        else if (password.value != confirmPassword.value) {
            password.style.border = "1.5px solid rgb(250, 91, 91)";
            confirmPassword.style.border = "1.5px solid rgb(250, 91, 91)";
            password_not_match.style.visibility = "visible";
        }
    }

    else {
        password.style.border = "1.5px solid #c6c8d1";
        confirmPassword.style.border = "1.5px solid #c6c8d1";
        password_not_match.style.visibility = "hidden";
    }
}