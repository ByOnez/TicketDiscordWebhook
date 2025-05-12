import axios from "axios";
import { FormValues } from "../types/Ticket";
import dotenv from "dotenv";
dotenv.config();

export const sendToDiscord = async (data: FormValues) => {
    try {    
        await axios.post(process.env.WEBHOOK as string, {
            content: `**Novo Ticket Recebido:**\n**Nome:** ${data.name}\n**Email:** ${data.email}\n**Título do Ticket:** ${data.title}\n**Descrição:** ${data.description}`
          });
    } catch (error) {
        console.error("Erro ao enviar dados:", error);
        throw error;
    }
};
