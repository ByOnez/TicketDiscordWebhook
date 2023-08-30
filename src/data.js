document.addEventListener("DOMContentLoaded", function () {
    let nameInput = document.getElementById("input-name")
    let emailInput = document.getElementById("input-email")
    let titleInput = document.getElementById("input-title")
    let descriptionTxtarea = document.getElementById("textarea-description")
    let button = document.getElementById("button-send")

    if (button !== null) {
        button.addEventListener("click", getForm)
    } else {
        console.log("Erro")
    }

    function getForm() {
        let name = nameInput.value
        let email = emailInput.value
        let title = titleInput.value
        let description = descriptionTxtarea.value
    }
})
