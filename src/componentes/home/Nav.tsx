'use client'

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ModalEmail } from '../modals/ModalEmail';

export default function Nav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSolucoesOpen, setIsSolucoesOpen] = useState(false);
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleSolucoes = () => {
    setIsSolucoesOpen(!isSolucoesOpen);
  };

  const openEmailModal = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsEmailModalOpen(true);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
       <header className="bg-judbr-main">
        <nav className="bg-judbr-main">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-5">
            {/* Logo (não modificada) */}
            
            <div className="hidden md:block ml-10">
            <Link href="/" className="text-white font-bold text-xl ">
              <Image src="/image/judbr-white.png" alt="JUDBR Logo" width={130} height={120} />
            </Link>
            </div>

            {/* Menu para desktop (não modificado) */}
            <div className="hidden md:flex items-center space-x-6">
            <Link href="/pages/precos" className="text-white hover:text-gray-200">Preços</Link>
              <div className="relative group">
                
                <button className="text-white hover:text-gray-200 flex items-center">
                  Soluções
                  <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="py-2">
                    <h3 className="text-sm font-semibold text-gray-800 px-4 py-2">Tipos de Prática</h3>
                    <Link href="/solucoes/praticas-solo" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Práticas Solo</Link>
                    <Link href="/solucoes/pequenas-medias-empresas" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Pequenas e Médias Empresas</Link>
                    <Link href="/solucoes/grandes-empresas" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Grandes empresas</Link>
                    <h3 className="text-sm font-semibold text-gray-800 px-4 py-2 mt-2">Áreas de Atuação</h3>
                    <Link href="/areas/lei-falencias" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Lei de Falências</Link>
                    <Link href="/areas/danos-pessoais" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Danos Pessoais</Link>
                    <Link href="/areas/contencioso-civel" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Contencioso Cível</Link>
                    <Link href="/areas/todas" className="block px-4 py-2 text-sm text-blue-600 hover:text-blue-800">TODAS AS ÁREAS DE ATUAÇÃO &gt;</Link>
                  </div>
                </div>
              </div>
              <Link href="/pages/recursos" className="text-white hover:text-gray-200">Recursos</Link>
              <Link href="/pages/sobre-nos" className="text-white hover:text-gray-200">Quem somos</Link>
              <Link href="/pages/contato" className="text-white hover:text-gray-200">Contato</Link>
            </div>
            
            {/* Botão "Experimente Grátis" para desktop (não modificado) */}
            <div className="hidden md:block">
              <Link href="#" onClick={openEmailModal} className="bg-[#24B364] text-white px-4 py-2 rounded-full hover:bg-[#008c3f] transition duration-300">
                Experimente Grátis
              </Link>
              <Link href="/pages/contato" className="text-white hover:text-gray-200 ml-4">Login</Link>
            </div>

            {/* Layout mobile */}
            <div className="md:hidden flex items-center justify-between w-full">
              {/* Botão de menu para mobile (à esquerda) */}
              <button 
                onClick={toggleMobileMenu} 
                className="text-white focus:outline-none" 
                aria-label="Menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>

              {/* Logo centralizada para mobile */}
              <Link href="/" className="text-white font-bold text-xl mx-auto">
                <Image src="/image/judbr-white.png" alt="JUDBR Logo" width={130} height={120} />
              </Link>

              {/* Espaço vazio para manter o layout flexbox */}
              <div className="w-6"></div>
            </div>
          </div>
          
          {/* Menu mobile (barra lateral) */}
          <div className={`fixed inset-0 z-50 bg-blue-800 transform ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}>
              <div className="flex flex-col h-full w-full">
                <div className="flex justify-end p-4">
                  <button onClick={toggleMobileMenu} className="text-white focus:outline-none">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <div className="flex-grow overflow-y-auto">
                  <div className="px-4 py-2 space-y-1">
                    <div>
                      <Link href="/pages/precos" className="block text-white hover:text-gray-200 py-2 border-b border-white" onClick={() => setIsMobileMenuOpen(false)}>Preços</Link>
                      <button onClick={toggleSolucoes} className="flex items-center justify-between w-full text-white hover:text-gray-200 py-2 border-b border-white" >
                        Soluções
                        <svg className={`w-4 h-4 transition-transform duration-300 ${isSolucoesOpen ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </button>
                      <div className={`pl-4 space-y-2 overflow-hidden transition-all duration-300 ease-in-out ${isSolucoesOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                        <div>
                          <h3 className="text-sm font-semibold text-gray-200 mt-2 mb-1">Tipos de Prática</h3>
                          <ul className="space-y-1">
                            <li>
                              <Link href="/solucoes/praticas-solo" className="block text-sm text-gray-300 hover:text-white py-1" onClick={() => setIsMobileMenuOpen(false)}>
                                Práticas Solo
                              </Link>
                            </li>
                            <li>
                              <Link href="/solucoes/pequenas-medias-empresas" className="block text-sm text-gray-300 hover:text-white py-1" onClick={() => setIsMobileMenuOpen(false)}>
                                Pequenas e Médias Empresas
                              </Link>
                            </li>
                            <li>
                              <Link href="/solucoes/grandes-empresas" className="block text-sm text-gray-300 hover:text-white py-1" onClick={() => setIsMobileMenuOpen(false)}>
                                Grandes empresas
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h3 className="text-sm font-semibold text-gray-200 mt-2 mb-1">Áreas de Atuação</h3>
                          <ul className="space-y-1">
                            <li>
                              <Link href="/areas/lei-falencias" className="block text-sm text-gray-300 hover:text-white py-1" onClick={() => setIsMobileMenuOpen(false)}>
                                Lei de Falências
                              </Link>
                            </li>
                            <li>
                              <Link href="/areas/danos-pessoais" className="block text-sm text-gray-300 hover:text-white py-1" onClick={() => setIsMobileMenuOpen(false)}>
                                Danos Pessoais
                              </Link>
                            </li>
                            <li>
                              <Link href="/areas/contencioso-civel" className="block text-sm text-gray-300 hover:text-white py-1" onClick={() => setIsMobileMenuOpen(false)}>
                                Contencioso Cível
                              </Link>
                            </li>
                            <li>
                              <Link href="/areas/todas" className="block text-sm text-blue-400 hover:text-blue-300 mt-1" onClick={() => setIsMobileMenuOpen(false)}>
                                TODAS AS ÁREAS DE ATUAÇÃO &gt;
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                 
                  <Link href="/pages/recursos" className="block text-white hover:text-gray-200 py-2 border-b border-white" onClick={() => setIsMobileMenuOpen(false)} >Recursos</Link>
                  <Link href="/pages/sobre-nos" className="block text-white hover:text-gray-200 py-2 border-b border-white" onClick={() => setIsMobileMenuOpen(false)}>Quem somos</Link>
                  <Link href="/pages/contato" className="block text-white hover:text-gray-200 py-2 border-b border-white" onClick={() => setIsMobileMenuOpen(false)}>Contato</Link>
                  <div className="flex justify-center items-center w-full py-4">
                    <Link href="#" onClick={openEmailModal} className="bg-[#24B364] text-white px-6 py-3 rounded-full hover:bg-[#008c3f] transition duration-300">
                      Experimente Grátis
                    </Link>
                  </div>
                  <Link href="/" className="block text-white hover:text-gray-200 py-2 border-b border-white" onClick={() => setIsMobileMenuOpen(false)}>Conecte-se</Link>
                </div>
                
              </div>
              
            </div>
          </div>
        </nav>
      </header>
      
      <ModalEmail isOpen={isEmailModalOpen} onClose={() => setIsEmailModalOpen(false)} />
    </>
  );
}