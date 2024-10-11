import { createContext, useState, useContext, ReactNode } from 'react';

import Link from 'next/link';

interface ModalContextType {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(true);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <ModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
      <ModalEmail />
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
}

function ModalEmail() {
  const { isOpen, closeModal } = useModal();
  const [email, setEmail] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    
    closeModal();
    
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
      <div className="relative w-full max-w-md bg-white rounded-lg shadow-xl overflow-hidden">
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="bg-purple-700 p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            JUDBR
          </h2>
          <p className="text-white text-sm sm:text-base">
            Ajudamos você a fazer o que é certo pelos seus clientes e a chegar em casa para jantar a tempo. Vencedores.
          </p>
        </div>

        <div className="p-6 sm:p-8">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Insira seu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#24B364] text-white font-semibold py-2 px-4 rounded-md hover:bg-green-600 transition duration-300"
            >
              ACESSO GRATUITO
            </button>
          </form>
          <p className="mt-4 text-sm text-center text-gray-600">
            Já tem uma conta? <Link href="/login" className="text-blue-600 hover:underline">Login</Link>
          </p>
          <p className="mt-2 text-xs text-center text-gray-500">
            Ao criar uma conta, você está concordando com os nossos Termos de Serviço e Política de Privacidade
          </p>
        </div>
      </div>
    </div>
  );
}

export default ModalEmail;