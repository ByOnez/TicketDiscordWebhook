document.addEventListener("DOMContentLoaded", function () {
    let button = document.getElementById("button-send")
    if (button !== null) {
        button.addEventListener("click", function () {
            const formData = getForm()
            sendData(formData)
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

    return {
        name: nameValue,
        email: emailValue,
        title: titleValue,
        description: descriptionValue,
    }
}

function sendData(formData) {
    import("./webhook.js")
    .then(module => {
        console.log("Módulo carregado com sucesso:", module)
        const { sendForm } = module
        sendForm(formData)
    })
    .catch(error => {
        console.error("Erro ao carregar o módulo:", error)
    })
}