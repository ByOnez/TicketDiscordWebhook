document.addEventListener("DOMContentLoaded", function () {
    function getForm() {
        const nameInput = document.getElementById("input-name");
        const emailInput = document.getElementById("input-email");
        const titleInput = document.getElementById("input-title");
        const descriptionTxtarea = document.getElementById("textarea-description");

        const nameValue = nameInput.value;
        const emailValue = emailInput.value;
        const titleValue = titleInput.value;
        const descriptionValue = descriptionTxtarea.value;

        return {
            name: nameValue,
            email: emailValue,
            title: titleValue,
            description: descriptionValue,
        };
    }

    const button = document.getElementById("button-send");
    if (button !== null) {
        button.addEventListener("click", () => {
            const formData = getForm();
            const name = formData.name;
            const email = formData.email;
            const title = formData.title;
            const description = formData.description;

            const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

            if (emailRegex.test(email) === false || email === "" || name === "" || title === "" || description === "" || description.length > 4000) {
                console.log("errado");
            } else {
                console.log("Enviando");
                sendData(formData);
            }
        });
    } else {
        console.log("Erro");
    }
});

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
