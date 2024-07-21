import { useState } from "react";
import { FormValues } from "../types/Ticket";

interface TicketProps {
    onSubmit: (formValues: FormValues) => void;
}

export default function Ticket({ onSubmit }: TicketProps) {
    const [formValues, setFormValues] = useState<FormValues>({
        name: "",
        email: "",
        title: "",
        description: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormValues((prevValues) => ({
            ...prevValues,
            [id]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const isFormComplete = Object.values(formValues).every(value => value.trim() !== "");
        if (isFormComplete) {
            onSubmit(formValues);
        } else {
            console.log("Por favor, preencha todos os campos.");
        }
    };

    const formInputs = [
        {
            id: "name",
            label: "Nome",
            placeholder: "Digite seu nome",
            type: "text",
        },
        {
            id: "email",
            label: "Email",
            placeholder: "Digite seu email",
            type: "email",
        },
        {
            id: "title",
            label: "Título do Ticket",
            placeholder: "Digite o título do ticket",
            type: "text",
        },
        {
            id: "description",
            label: "Descrição",
            placeholder: "Descreva o seu problema",
            type: "textarea",
        },
    ];

    return (
        <div className="bg-ticket-azure w-full h-screen flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
                <h1 className="text-ticket-text font-bold text-4xl text-center mb-6">Formulário de Suporte</h1>
                <form className="flex flex-col space-y-4 mt-6" onSubmit={handleSubmit}>
                    {formInputs.map((input) => (
                        input.type !== "textarea" ? (
                            <label key={input.id} htmlFor={input.id}>
                                <p className="text-ticket-text text-left pl-2 text-lg border-l-2 rounded border-ticket-amber mb-2 ml-2 font-medium">{input.label}</p>
                                <input
                                    type={input.type}
                                    id={input.id}
                                    className="w-full p-2 px-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-ticket-amber font-medium"
                                    placeholder={input.placeholder}
                                    value={formValues[input.id as keyof FormValues]}
                                    onChange={handleChange}
                                />
                            </label>
                        ) : (
                            <label key={input.id} htmlFor={input.id}>
                                <p className="text-ticket-text text-left pl-2 text-lg border-l-2 rounded border-ticket-amber mb-2 ml-2 font-medium">{input.label}</p>
                                <textarea
                                    id={input.id}
                                    className="w-full p-2 px-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-ticket-amber font-medium resize-none"
                                    rows={4}
                                    placeholder={input.placeholder}
                                    value={formValues[input.id as keyof FormValues]}
                                    onChange={handleChange}
                                />
                            </label>
                        )
                    ))}
                    <button type="submit" className="bg-ticket-amber text-white text-sm font-medium px-6 py-4 rounded mt-4 shadow-sm mx-auto">
                        Enviar Ticket
                    </button>
                </form>
            </div>
        </div>
    );
}
