import React from 'react';

const Loading: React.FC = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-ticket-azure">
      <div className="bg-white p-4 rounded-lg shadow-lg flex items-center justify-center border-4 border-white">
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 border-4 border-t-4 border-t-ticket-amber border-white rounded-full animate-spin"></div>
          <p className="mt-4 text-ticket-text text-lg font-medium">Carregando...</p>
        </div>
      </div>
    </div>
  );
};

export default Loading;
