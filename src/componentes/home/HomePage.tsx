'use client'

import Link from 'next/link';
import Nav from './Nav';
import Footer from './Footer';

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Nav />
      <main className="flex-grow">
        <section className="bg-purple-100 py-20">
          <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-3xl md:text-5xl font-bold text-purple-800 mb-6">Gestão Jurídica Simplificada</h1>
              <p className="text-lg md:text-xl text-purple-700 mb-8">Automatize seu escritório e aumente sua produtividade com o JUDBR.</p>
              <form className="flex flex-col sm:flex-row" onSubmit={(e) => e.preventDefault()}>
                <input type="email" placeholder="Seu e-mail" className="mb-4 sm:mb-0 sm:mr-4 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 w-full sm:w-auto" />
                <button type="submit" className="bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700 transition duration-300 w-full sm:w-auto">Comece Grátis</button>
              </form>
              <p className="mt-4 text-sm text-purple-600">7 dias de teste grátis. Não é necessário cartão de crédito.</p>
            </div>
            
            <div className="md:w-1/2 text-center md:text-right mt-10 md:mt-0">
              <h2 className="text-4xl md:text-6xl font-bold text-purple-300 bg-purple-100 p-4 rounded-lg shadow-md inline-block">Bem vindo ao <span className="text-purple-800">JUDBR</span></h2>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-purple-800 text-center mb-12">Recursos Principais</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-purple-700 mb-4">Gestão de Casos</h3>
                <p className="text-purple-600">Organize e acompanhe todos os seus casos em um só lugar.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-purple-700 mb-4">Faturamento Automático</h3>
                <p className="text-purple-600">Crie e envie faturas com poucos cliques.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-purple-700 mb-4">Agenda Integrada</h3>
                <p className="text-purple-600">Gerencie compromissos e prazos com facilidade.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-purple-700 text-white py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-8">Pronto para simplificar sua prática jurídica?</h2>
            <Link href="/signup" className="bg-white text-purple-700 px-8 py-3 rounded-md font-semibold hover:bg-purple-100 transition duration-300 inline-block">
              Comece seu teste gratuito
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>  
  );
};

export default HomePage;