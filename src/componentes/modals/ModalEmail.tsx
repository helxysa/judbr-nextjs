import { useState } from 'react';
import Link from 'next/link';

interface ModalEmailProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ModalEmail({ isOpen, onClose }: ModalEmailProps) {
  const [email, setEmail] = useState('');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
      <div className="relative w-full max-w-5xl bg-judbr-main rounded-lg shadow-xl overflow-hidden pt-20 mb-20">
        <img 
          src="/image/judbr-white.png" 
          alt="Logo da JUDBR" 
          className="absolute top-10 left-10 w-24 sm:w-28 md:w-32 lg:w-36 h-auto"
        />
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white hover:text-gray-200 z-10">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="flex flex-col md:flex-row">
          <div className="p-10 pt-15 md:w-3/5">
            <h2 className="text-4xl md:text-4xl font-bold text-white mb-4">
              Gestão Jurídica<br />
              Simplificada
            </h2>
            <p className="text-white text-base md:text-lg mb-8">
              Ajudamos você a fazer o que é certo pelos seus clientes e a chegar em casa para jantar a tempo. Vencedores.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Digite seu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-grow px-4 py-2 rounded-full focus:outline-none"
                required
              />
              <button
                type="submit"
                className="bg-green-500 text-white font-semibold py-2 px-6 rounded-full hover:bg-green-600 transition duration-300"
              >
                ACESSO GRATUITO
              </button>
            </form>
            <p className="mt-4 text-sm text-white">
              Já tem uma conta? <Link href="https://app.judbr.com.br/auth/login" target="_blank" className="text-white underline">Login</Link>
            </p>
            <p className="mt-2 text-xs text-gray-200">
              Ao criar uma conta, você está concordando com os nossos{' '}
              <Link href="/termos" className="underline">Termos de Serviço</Link> e{' '}
              <Link href="/privacidade" className="underline">Política de Privacidade</Link>
            </p>
          </div>
          <div className="hidden md:block md:w-2/5 overflow-hidden">
            <img 
              src="https://www.practicepanther.com/wp-content/uploads/dynamic/2020/07/home-modal-616x0-c-default.png" 
              alt="Dashboard Preview" 
              className="w-30px h-full object-cover object-left"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalEmail;