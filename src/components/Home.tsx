import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";

export default function Home() {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleClick = () => {
        setIsLoading(true);
        setTimeout(() => {
            navigate("/ticket");
        }, 1000);
    };

    if (isLoading) {
        return <Loading />;
    }

    return (
        <div className="bg-ticket-azure w-full h-screen flex items-center justify-center">
            <div className="text-center">
                <h1 className="text-white font-bold text-4xl">Precisando de ajuda?</h1>
                <button
                    onClick={handleClick}
                    className="bg-ticket-amber text-white text-1xl font-semibold px-6 py-4 rounded mt-4 shadow-sm"
                >
                    Abrir Ticket
                </button>
            </div>
        </div>
    );
}
