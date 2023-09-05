let formData = {}

document.addEventListener("DOMContentLoaded", function () {
    let button = document.getElementById("button-send")
    if (button !== null) {
        button.addEventListener("click", function () {
            formData = getForm()
            formInfo(formData)
        })
    } else {
        console.log("Erro")
    }
})

function getForm() {
    let nameInput = document.getElementById("input-name")
    let emailInput = document.getElementById("input-email")
    let titleInput = document.getElementById("input-title")
    let descriptionTxtarea = document.getElementById("textarea-description")

    let nameValue = nameInput.value
    let emailValue = emailInput.value
    let titleValue = titleInput.value
    let descriptionValue = descriptionTxtarea.value

    nameValidate(nameInput)
    emailValidate(emailInput)
    titleValidate(titleInput)

    return {
        name: nameValue,
        email: emailValue,
        title: titleValue,
        description: descriptionValue,
    }
}

function formInfo(formData) {
    let name = formData.name
    let email = formData.email
    let title = formData.title
    let description = formData.description

    console.log(name)
    console.log(email)
    console.log(title)
    console.log(description)
}

export { formInfo }
