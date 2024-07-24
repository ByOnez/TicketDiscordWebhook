import { useState } from "react";
import { FormValues } from "../types/Ticket";
import { sendToDiscord } from "../services/sendToDiscord";
import Confirmation from "./Confirmation";
import Input from "./ui/Input";

export default function Ticket() {
    const [formValues, setFormValues] = useState<FormValues>({
        name: "",
        email: "",
        title: "",
        description: "",
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormValues((prevValues) => ({
            ...prevValues,
            [id]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const isFormComplete = Object.values(formValues).every(value => value.trim() !== "");
        if (isFormComplete) {
            try {
                await sendToDiscord(formValues);
                setIsSubmitted(true);
            } catch (error) {
                console.error("Erro ao enviar dados:", error);
            }
        } else {
            console.log("Preencha todos os campos.");
        }
    };

    const formInputs = [
        {
            id: "name",
            label: "Nome",
            type: "text" as const,
        },
        {
            id: "email",
            label: "Email",
            type: "email" as const,
        },
        {
            id: "title",
            label: "Título do Ticket",
            type: "text" as const,
        },
        {
            id: "description",
            label: "Descrição",
            type: "textarea" as const,
        },
    ];

    if (isSubmitted) {
        return <Confirmation />;
    }

    return (
        <div className="bg-ticket-azure w-full h-screen flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
                <h1 className="text-ticket-text font-bold text-4xl text-center mb-6">Formulário de Suporte</h1>
                <form className="flex flex-col space-y-4 mt-6" onSubmit={handleSubmit}>
                    {formInputs.map((input) => (
                        <Input
                            key={input.id}
                            id={input.id}
                            type={input.type}
                            label={input.label}
                            value={formValues[input.id as keyof FormValues]}
                            onChange={handleChange}
                        />
                    ))}
                    <button type="submit" className="bg-ticket-amber text-white text-sm font-medium px-6 py-4 rounded mt-4 shadow-sm mx-auto">
                        Enviar Ticket
                    </button>
                </form>
            </div>
        </div>
    );
}
