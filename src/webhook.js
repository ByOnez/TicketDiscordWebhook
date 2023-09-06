import axios from "axios"

function sendFormData(formData) {
    const { name, email, title, description } = formData
    const webhookURL = "https://discord.com/api/webhooks/1148771183911780483/LLBNlBhyLgPScraEKDCwGoxMmrwatSspG1X9vTjmT1IjuwGe7B7fJRYxD2FC6nxVkTY0" 

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

export { sendFormData }