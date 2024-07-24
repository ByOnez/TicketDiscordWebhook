export interface InputProps {
    id: string;
    type: "text" | "email" | "textarea";
    label: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}