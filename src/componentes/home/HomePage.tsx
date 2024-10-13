'use client'

import Section from './Section';
import FrequentlyAsked from './FrequentlyAsked';
import LegalPracticeStats from './LegalPraticeStats';
import FeaturedIn from './FeaturedIn';
import Testimonials from './Testmonials';

import { ModalProvider } from '../modals/ModalEmail';
import EmailModal from '../modals/ModalEmail';


const HomePage = () => {

 

  return (

    <div className="flex flex-col min-h-screen">
      
      <main className="flex-grow">
      

      
      <section className="bg-white py-20">
  <div className="container mx-auto px-9 md:px-12 lg:px-24 xl:px-32 flex flex-col md:flex-row items-center justify-between">
    <div className="md:w-1/2 mb-10 md:mb-0 md:pr-8 lg:pr-16 md:ml-8 lg:ml-16">
      <h1 className="text-xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">Gestão Jurídica Simplificada</h1>
      <p className="text-lg md:text-xl lg:text-2xl text-gray-900 mb-8">Automatize seu escritório e aumente sua produtividade com o JUDBR.</p>
      <form className="flex flex-col sm:flex-row" onSubmit={(e) => e.preventDefault()}>
        <input 
          type="email" 
          placeholder="Seu e-mail" 
          className="mb-4 sm:mb-0 sm:mr-4 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 w-full sm:w-auto bg-gray-100"
        />
        <button 
          type="submit" 
          className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition duration-300 w-full sm:w-auto"
        >
          INICIAR TESTE GRÁTIS
        </button>
      </form>
      <p className="mt-4 text-sm text-gray-600">7 dias de teste grátis • Sem necessidade de cartão de crédito</p>
    </div>
    <div className="md:w-1/2 text-center md:text-right mt-10 md:mt-0">
      <div className="text-4xl md:text-5xl lg:text-4xl font-bold text-gray-900 p-4 rounded-lg inline-block">
        <video 
          src="/video/pratice-panther.mp4" 
          autoPlay 
          loop 
          muted 
          playsInline
          className="max-w-full h-auto md:max-w-[100%] lg:max-w-[100%] mx-auto rounded-lg"
        >
          Seu navegador não suporta o elemento de vídeo.
        </video>
      </div>
    </div>
  </div>
  <FeaturedIn />
  
</section>
<div className="container bg-gray-100 mx-auto px-4 sm:px-6 md:px-30 lg:px-40 xl:px-48 space-y-16 py-12 md:py-10">
<Testimonials />
</div>


<div className="container mx-auto px-4 sm:px-6 md:px-30 lg:px-40 xl:px-48 space-y-16 py-12 md:py-5">
  <Section />
</div>

<div className="bg-gray-100 w-full">
  <div className="container mx-auto px-4 sm:px-6 md:px-30 lg:px-40 xl:px-48 py-15 md:py-20">
    <LegalPracticeStats />
  </div>
</div>

<div className="container bg-gray-200 mx-auto px-4 sm:px-6 md:px-30 lg:px-40 xl:px-48 space-y-16 py-12 md:py-20">
  <FrequentlyAsked />
</div>
          
          <ModalProvider>
            <EmailModal />
          </ModalProvider>
        </main>
      </div>  
  );
};

export default HomePage;


{/* <section className="bg-gray-10 py-20">
<div className="container mx-auto px-9 md:px-12 lg:px-24 xl:px-32 flex flex-col md:flex-row items-center justify-between">
  <div className="md:w-1/2 mb-10 md:mb-0 md:pr-8 lg:pr-16">
    <h1 className="text-xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">Gestão Jurídica Simplificada</h1>
    <p className="text-lg md:text-xl lg:text-2xl text-gray-900 mb-8">Automatize seu escritório e aumente sua produtividade com o JUDBR.</p>
    <form className="flex flex-col sm:flex-row" onSubmit={(e) => e.preventDefault()}>
      <input type="email" placeholder="Seu e-mail" className="mb-4 sm:mb-0 sm:mr-4 px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 w-full sm:w-auto" />
      <button type="submit" className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 transition duration-300 w-full sm:w-auto">START FREE TRIAL</button>
    </form>
    <p className="mt-4 text-sm text-gray-600">7-Day Free Trial • No Credit Card Needed</p>
  </div>
  
  <div className="md:w-1/2 text-center md:text-right mt-10 md:mt-0">
    <div className="inline-block">
      <video 
        src="/videos/pratice-panther.mp4" 
        autoPlay 
        loop 
        muted 
        playsInline
        className="max-w-full h-auto md:max-w-[100%] lg:max-w-[100%] mx-auto rounded-lg shadow-lg"
      />
    </div>
  </div>
</div>
</section> */}