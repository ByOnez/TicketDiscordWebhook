import React, { useEffect } from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Confirmation: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);
  return (
    <div className="bg-ticket-azure flex flex-col justify-center items-center w-full h-screen ">
      <div className="p-6 bg-white rounded-lg shadow-md text-center animate-scaleUp">
        <AiOutlineCheckCircle className="text-ticket-amber text-6xl mx-auto animate-fadeIn" />
        <p className="mt-4 text-ticket-text font-medium text-lg animate-fadeIn">Ticket enviado com sucesso!</p>
      </div>
    </div>
  );
};

export default Confirmation;
