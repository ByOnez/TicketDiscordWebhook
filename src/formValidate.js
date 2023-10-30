let nameInput = document.getElementById("input-name");
let emailInput = document.getElementById("input-email");
let titleInput = document.getElementById("input-title");
let descriptionTxtarea = document.getElementById("textarea-description");

function nameValidate(nameInput) {
    if (nameInput.value.length < 3) {
        nameInput.classList.remove("success-border");
        nameInput.classList.add("error-border");
    } else {
        nameInput.classList.remove("error-border");
        nameInput.classList.add("success-border");
    }
}

function emailValidate(emailInput) {
    let email = emailInput.value;
    const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    let emailTest = emailRegex.test(email);
    if (emailTest === false) {
        emailInput.classList.remove("success-border");
        emailInput.classList.add("error-border");
    } else {
        emailInput.classList.remove("error-border");
        emailInput.classList.add("success-border");
    }
}

function titleValidate(titleInput) {
    if (titleInput.value === "") {
        titleInput.classList.remove("success-border");
        titleInput.classList.add("error-border");
    } else {
        titleInput.classList.remove("error-border");
        titleInput.classList.add("success-border");
    }
}

function descriptionValidate(descriptionTxtarea) {
    if (descriptionTxtarea.value.length > 4000) {
        descriptionTxtarea.classList.remove("success-border");
        descriptionTxtarea.classList.add("error-border");
    } else {
        descriptionTxtarea.classList.remove("error-border");
        descriptionTxtarea.classList.add("success-border");
    }
}
