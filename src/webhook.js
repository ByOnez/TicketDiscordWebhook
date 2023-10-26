function sendForm(formData) {
    const { name, email, title, description } = formData
    const webhookURL = "https://discord.com/api/webhooks/1167218982961545286/Wb779YhNtz1aTcqRy0m65leIYDBL2b5wpSfE1kCew7OaI2UDYIMVPR-Th5R9ZMCRP84-" 

    const logMessage = {
        content: `Nome: ${name}\nEmail: ${email}\nTítulo: ${title}\nDescrição: ${description}`,
        username: "Ticket"
    }

    axios.post(webhookURL, logMessage)
        .then(response => {
            console.log("Mensagem enviada com sucesso:", response.status)
        })
        .catch(error => {
            console.error("Erro ao enviar mensagem:", error)
        })
}

export { sendForm }