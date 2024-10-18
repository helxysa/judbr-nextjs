'use client'

import { useState, useEffect, useLayoutEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ModalEmail } from '../modals/ModalEmail';

export default function Nav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSolucoesOpen, setIsSolucoesOpen] = useState(false);
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useLayoutEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1369);
    };
  
    handleResize();
    window.addEventListener('resize', handleResize);
  
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);




  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const toggleSolucoes = () => {
    setIsSolucoesOpen((prev) => !prev);
  };

  const openEmailModal = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsEmailModalOpen(true);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
        <header className="bg-judbr-main">
        <nav className="bg-judbr-main fixed top-0 w-full z-50">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-5">
            
              <div className="flex-shrink-0 -ml-10 max-[1360px]:hidden">
                <Link href="/" className="flex items-center">
                <img src="/image/judbr-white.png" alt="JUDBR Logo" width={120} height={120} className="w-24 sm:w-28 md:w-32 lg:w-40" />
              </Link>
            </div>
            
           


            <div className={`${isMobile ? 'hidden' : 'hidden lg:flex'} items-center space-x-6 justify-center flex-grow  ml-6`}>
              <div className="flex items-center space-x-6">
                <Link href="/pages/precos" className="text-white hover:text-gray-200 font-semibold">Preços</Link>
                <div className="relative group">
                  <button className="text-white hover:text-gray-200 flex items-center font-semibold">
                    Soluções
                    <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>

                  <div className="absolute left-0 mt-5 w-[800px] bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    <div className="py-10 px-16 flex">
                      <div className="w-1/2 pr-12">
                        <h3 className="text-lg font-semibold text-gray-800 mb-6">Funcionalidades</h3>
                        <div className="space-y-5">
                          <Link href="/solucoes/praticas-solo" className="flex items-center text-base text-gray-700 hover:text-judbr-main">
                            <div className="bg-gray-200 rounded-full p-3 mr-4">
                              <svg className="w-7 h-7 text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"></path></svg>
                            </div>
                            <div>
                              <div className="font-medium">Práticas Solo</div>
                              <div className="text-sm text-gray-500">Handle and prepare cases</div>
                            </div>
                          </Link>
                          <Link href="/solucoes/pequenas-medias-empresas" className="flex items-center text-base text-gray-700 hover:text-judbr-main">
                            <div className="bg-gray-200 rounded-full p-3 mr-4">
                              <svg className="w-7 h-7 text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path></svg>
                            </div>
                            <div>
                              <div className="font-medium">Pequenas e Médias Empresas</div>
                              <div className="text-sm text-gray-500">Organize, manage, and track</div>
                            </div>
                          </Link>
                          <Link href="/solucoes/grandes-empresas" className="flex items-center text-base text-gray-700 hover:text-judbr-main">
                            <div className="bg-gray-200 rounded-full p-3 mr-4">
                              <svg className="w-7 h-7 text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                            </div>
                            <div>
                              <div className="font-medium">Grandes empresas</div>
                              <div className="text-sm text-gray-500">Simple payments and invoicing</div>
                            </div>
                          </Link>
                        </div>
                      </div>
                      <div className="w-1/2 pl-12 border-l border-gray-200">
                        <h3 className="text-lg font-semibold text-gray-800 mb-6">Áreas de Atuação</h3>
                        <div className="space-y-5">
                          <Link href="/pages/areas-atuacao" className="flex items-center text-base text-gray-700 hover:text-judbr-main">
                            <div className="bg-gray-200 rounded-full p-3 mr-4">
                              <svg className="w-7 h-7 text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"></path></svg>
                            </div>
                            <div className="font-medium">Lei de Falências</div>
                          </Link>
                          <Link href="/pages/areas-atuacao" className="flex items-center text-base text-gray-700 hover:text-judbr-main">
                            <div className="bg-gray-200 rounded-full p-3 mr-4">
                              <svg className="w-7 h-7 text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 1.944A11.954 11.954 0 012.166 5C2.056 5.649 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.35-.166-2.001A11.954 11.954 0 0110 1.944zM11 14a1 1 0 11-2 0 1 1 0 012 0zm0-7a1 1 0 10-2 0v3a1 1 0 102 0V7z" clipRule="evenodd"></path></svg>
                            </div>
                            <div className="font-medium">Danos Pessoais</div>
                          </Link>
                          <Link href="/pages/areas-atuacao" className="flex items-center text-base text-gray-700 hover:text-judbr-main">
                            <div className="bg-gray-200 rounded-full p-3 mr-4">
                              <svg className="w-7 h-7 text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 1.944A11.954 11.954 0 012.166 5C2.056 5.649 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.35-.166-2.001A11.954 11.954 0 0110 1.944zM11 14a1 1 0 11-2 0 1 1 0 012 0zm0-7a1 1 0 10-2 0v3a1 1 0 102 0V7z" clipRule="evenodd"></path></svg>
                            </div>
                            <div className="font-medium">Contencioso Cível</div>
                          </Link>
                          <Link href="/pages/areas-atuacao" className="flex items-center text-base text-judbr-main hover:text-judbr-main mt-6">
                            <span className="font-medium">TODAS AS ÁREAS DE ATUAÇÃO</span>
                            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Link href="/pages/recursos" className="text-white hover:text-gray-200 font-semibold">Recursos</Link>
                <Link href="/pages/sobre-nos" className="text-white hover:text-gray-200 font-semibold">Quem somos</Link>
                <Link href="/pages/contato" className="text-white hover:text-gray-200 font-semibold">Contato</Link>
              </div>
            </div>
            
            <div className={`${isMobile ? 'hidden' : 'hidden lg:block'}`}>
              <Link href="#" onClick={openEmailModal} className="bg-[#24B364] text-white tracking-wide font-semibold px-4 py-2 rounded-full hover:bg-[#008c3f] transition duration-300">
                Experimente Grátis
              </Link>
              <Link href="https://app.judbr.com.br/auth/login/" target="_blank" className="text-white hover:text-gray-200 ml-4 font-semibold">Login</Link>
            </div>

            {/* Layout mobile */}
            {isMobile && (
              <div className="flex items-center justify-between w-full">
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
            )}
          </div>
          
          {/* Menu mobile (barra lateral) */}
          <div 
            className={`fixed inset-0 z-50 bg-judbr-main transform ${
              isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
            } transition-transform duration-300 ease-in-out ${
              isMobile ? 'block' : 'hidden'
            }`}
          >
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
                  <Link href="https://app.judbr.com.br/auth/login/" target="_blank" className="block text-white hover:text-gray-200 py-2 border-b border-white" onClick={() => setIsMobileMenuOpen(false)}>Conecte-se</Link>
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