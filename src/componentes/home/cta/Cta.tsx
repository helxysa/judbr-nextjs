import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Cta() { 
    const [email, setEmail] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Email submitted:', email);
        // Adicione aqui a lógica para processar o email
    };

    return ( 
        <div className="hidden md:block bg-white overflow-hidden py-16 sm:py-24 lg:py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
                <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
                    <div className="relative lg:flex lg:items-center p-8">
                        <div className="lg:w-1/4 relative flex justify-center items-center">
                            <div className="absolute transform right-[30px]">
                                <Image 
                                    src="/image/judbr-preto.png" 
                                    alt="JUDBR Logo"
                                    width={300}
                                    height={300}
                                    className="w-49 h-49 lg:w-45 lg:h-45"
                                />
                            </div>
                        </div>
                        <div className="lg:w-2/3">
                            <h2 className="text-3xl font-extrabold text-gray-800 sm:text-4xl mb-4">
                                Gostou do que vê? Experimente o JUDBR gratuitamente!
                            </h2>
                            <p className="text-lg text-gray-700 mb-6">
                                Teste o melhor software de gestão de práticas jurídicas gratuitamente por 7 dias, sem necessidade de cartão de crédito. Comece a criar processos, testar fluxos de trabalho e enviar faturas. Adicione seus colegas para obter o efeito completo, sem riscos!
                            </p>
                            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
                                <input 
                                    type="email" 
                                    placeholder="Digite seu email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="flex-grow px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-judbr-main"
                                    required
                                />
                                <button 
                                    type="submit"
                                    className="bg-green-500 text-white font-semibold py-2 px-6 rounded-full hover:bg-green-600 transition duration-300"
                                >
                                    ACESSO GRATUITO
                                </button>
                            </form>
                            <p className="mt-4 text-sm text-gray-600">
                                Já tem uma conta? <Link href="https://app.judbr.com.br/auth/login" target="_blank" className="text-judbr-main underline">Login</Link>
                            </p>
                            <p className="mt-2 text-xs text-gray-500">
                                Ao criar uma conta, você está concordando com os nossos{' '}
                                <Link href="/termos" className="text-judbr-main underline">Termos de Serviço</Link> e{' '}
                                <Link href="/privacidade" className="text-judbr-main underline">Política de Privacidade</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}