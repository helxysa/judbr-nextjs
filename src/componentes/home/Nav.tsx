'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Nav(){
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-[#0337CC]">
    <nav className="bg-blue-700 py-4">
      <div className="container mx-auto px-9 md:px-30 lg:px-40 xl:px-48 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="text-white font-bold text-xl"><Image src="/image/judbr-white.png" alt="JUDBR Logo" width={80} height={80} /></Link>
        </div>
        
        {/* Menu para desktop */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/pages/precos/" className="text-white hover:text-gray-200 transition-colors">Precos</Link>
          <Link href="/pages/recursos" className="text-white hover:text-gray-200 transition-colors">Recursos</Link>
          <Link href="/pages/sobre-nos" className="text-white hover:text-gray-200 transition-colors">Quem somos</Link>
          <Link href="/pages/contato" className="text-white hover:text-gray-200 transition-colors">Contato</Link>
        </div>
        
        {/* Botão de menu para mobile */}
        <button onClick={toggleMobileMenu} className="md:hidden focus:outline-none" aria-label="Menu">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        
        <div className="hidden md:block">
          <Link href="#" className="bg-[#24B364] text-white px-4 py-2 rounded-full hover:bg-[#008c3f] transition duration-300">
            Experimente Grátis
          </Link>
        </div>
      </div>
      
      {/* Menu mobile */}
      <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="/pages/precos" className="block text-white hover:text-gray-100 py-2">Preços</Link>
          <Link href="#" className="block text-white hover:text-gray-100 py-2">Recursos</Link>
          <Link href="#" className="block text-white hover:text-gray-100 py-2">Sobre Nós</Link>
          <Link href="#" className="block text-white hover:text-gray-100 py-2">Contato</Link>
          <Link href="#" className="block bg-[#24B364] text-white px-4 py-2 rounded-full hover:bg-purple-700 mt-4 transition duration-300">
            Experimente Grátis
          </Link>
        </div>
      </div>
    </nav>
    </header>
  );
};

