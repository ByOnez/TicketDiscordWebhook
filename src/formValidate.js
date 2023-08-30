let nameInput = document.getElementById("input-name")
let emailInput = document.getElementById("input-email")
let titleInput = document.getElementById("input-title")
let descriptionTxtarea = document.getElementById("textarea-description")

function nameValidate(nameInput) {
    if (nameInput.value.length < 3) {
        nameInput.classList.add("error-transition")
    } else {
        nameInput.classList.add("sucess-transition")
    }
}

function emailValidate(emailInput) {
    let email = emailInput.value
    const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
    let emailTest = emailRegex.test(email)
    if (emailTest === false) {
        emailInput.classList.add("error-transition")
    } else {
        emailInput.classList.add("sucess-transition")
    }
}

function titleValidate(titleInput) {
    let title = titleInput.value
    if (title === "") {
        titleInput.classList.add("error-transition")
    } else {
        titleInput.classList.add("sucess-transition")
    }
}
