const username = document.getElementById("username")
const email = document.getElementById("email")
const password = document.getElementById("password")
const cnfrmPassword = document.getElementById("cnfrm-password")
const error = document.getElementById("error")
const submit = document.getElementById("submit")

validate = () => {
    // password that is at least 8 characters long and contains at least one letter and one number.
    let passwordRegex = new RegExp("^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$")
    let usernameRegex = new RegExp("^[A-Za-z][A-Za-z0-9_]*$")
    let emailRegex = new RegExp("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.com$");
    console.log(username.value, email.value, emailRegex.test(email.value))
    if (usernameRegex.test(username.value) == false) {
        error.innerText = "Enter valid user name"
    } else if (emailRegex.test(email.value) == false) {
        error.innerText = "Enter valid email"
    } else if (passwordRegex.test(password.value) == false) {
        error.innerText = "Enter valid password"
    } else if (password.value == cnfrmPassword.value) {
        error.innerText = "Passwords don't match"
    } else {
        error.innerText = ""
    }
}

submit.addEventListener("click", () => {
    validate()
})