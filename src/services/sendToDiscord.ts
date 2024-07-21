import axios from "axios";
import { FormValues } from "../types/Ticket";

const webhookURL = "https://discord.com/api/webhooks/1264439650773110876/FBe3-EgaR4FBMQmjwRaZsUibmCJc-LDmAKkNPbAp6-am0NzkEtz92kVKBXlnMJ_Lesyx"; 

export const sendToDiscord = async (data: FormValues) => {
    try {    
        await axios.post(webhookURL, {
            content: `**Novo Ticket Recebido:**\n**Nome:** ${data.name}\n**Email:** ${data.email}\n**Título do Ticket:** ${data.title}\n**Descrição:** ${data.description}`
          });
    } catch (error) {
        console.error("Erro ao enviar dados:", error);
        throw error;
    }
};
