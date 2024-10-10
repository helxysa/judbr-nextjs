'use client';

import { useState } from 'react';
import Link from 'next/link';


const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <div className="text-purple-700 font-bold text-xl">
            <Link href="/">JUDBR</Link>
          </div>
          
          {/* Menu para desktop */}
          <div className="hidden md:flex space-x-6">
            <Link href="/pages/payment" className="text-purple-600 hover:text-purple-800">Preços</Link>
            <Link href="#" className="text-purple-600 hover:text-purple-800">Recursos</Link>
            <Link href="#" className="text-purple-600 hover:text-purple-800">Sobre Nós</Link>
            <Link href="#" className="text-purple-600 hover:text-purple-800">Contato</Link>
          </div>
          
          {/* Botão de menu para mobile */}
          <button onClick={toggleMobileMenu} className="md:hidden focus:outline-none" aria-label="Menu">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          
          <div className="hidden md:block">
            <Link href="#" className="bg-[#7367F0] text-white px-4 py-2 rounded-md hover:bg-[#8F85F3] transition duration-300">
              Experimente Grátis
            </Link>
          </div>
        </div>
        
        {/* Menu mobile */}
        <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/pages/payment" className="block text-purple-600 hover:text-purple-800 py-2">Preços</Link>
            <Link href="#" className="block text-purple-600 hover:text-purple-800 py-2">Recursos</Link>
            <Link href="#" className="block text-purple-600 hover:text-purple-800 py-2">Sobre Nós</Link>
            <Link href="#" className="block text-purple-600 hover:text-purple-800 py-2">Contato</Link>
            <Link href="#" className="block bg-[#7367F0] text-white px-4 py-2 rounded-md hover:bg-purple-700 mt-4 transition duration-300">
              Experimente Grátis
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;