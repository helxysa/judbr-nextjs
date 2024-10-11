'use client'

import Section from './Section';
import FrequentlyAsked from './FrequentlyAsked';
import LegalPracticeStats from './LegalPraticeStats';

import { ModalProvider } from '../modals/ModalEmail';
import EmailModal from '../modals/ModalEmail';


const HomePage = () => {

 

  return (

    <div className="flex flex-col min-h-screen">
      
      <main className="flex-grow">
        <section className="bg-[rgb(115,103,240)]/[0.16] py-20">
          <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-3xl md:text-5xl font-bold text-purple-800 mb-6">Gestão Jurídica Simplificada</h1>
              <p className="text-lg md:text-xl text-purple-700 mb-8">Automatize seu escritório e aumente sua produtividade com o JUDBR.</p>
              <form className="flex flex-col sm:flex-row" onSubmit={(e) => e.preventDefault()}>
                <input type="email" placeholder="Seu e-mail" className="mb-4 sm:mb-0 sm:mr-4 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 w-full sm:w-auto" />
                <button type="submit"  className="bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700 transition duration-300 w-full sm:w-auto">Comece Grátis</button>
              </form>
              <p className="mt-4 text-sm text-purple-600">7 dias de teste grátis. Não é necessário cartão de crédito.</p>
            </div>
            
            <div className="md:w-1/2 text-center md:text-right mt-10 md:mt-0">
            <div className="text-4xl md:text-6xl font-bold text-purple-300  p-4 rounded-lg   inline-block">
              <img 
                src="https://ultimatum.com.br/wp-content/uploads/2019/10/home-15-banner-simage-new-1.png" 
                alt="JUDBR Logo" 
                className="max-w-full h-auto"
              />  
              </div>
            </div>
          </div>
        </section>

        <section className="py-40 ">
          <div className="container mx-auto px-6 ">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Recursos Principais</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-purple-700 mb-4">Gestão de Casos</h3>
                <p className="text-gray-900">Organize e acompanhe todos os seus casos em um só lugar.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-purple-700 mb-4">Faturamento Automático</h3>
                <p className="text-gray-900">Crie e envie faturas com poucos cliques.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-purple-700 mb-4">Agenda Integrada</h3>
                <p className="text-gray-900">Gerencie compromissos e prazos com facilidade.</p>
              </div>
            </div>
          </div>
        </section>

        <Section />
        <LegalPracticeStats />
        <FrequentlyAsked />
        
        <ModalProvider>
          <EmailModal  />
        </ModalProvider>
      </main>

    </div>  
  );
};

export default HomePage;