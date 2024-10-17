'use client'

import Section from './Section';
import FrequentlyAsked from './FrequentlyAsked';
import LegalPracticeStats from './LegalPraticeStats';
import FeaturedIn from './FeaturedIn';
import Testimonials from './Testmonials';
import StartFreeTrial from './cta/StartFreeTrail';
import Partnes from './Partnes';
import ColorPicker from '../ColorPicker/ColorPicker';


export default function HomePage (){

 

  return (

    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
      <ColorPicker /> {/* Tirar isso depois */}
      

      <section className="bg-white py-20 ">
  <div className="container mx-auto  px-4 md:px-8 lg:px-16 xl:px-24 flex flex-col md:flex-row items-center justify-between">
    <div className="md:w-1/2 mb-5 md:mb-0 md:pr-4 lg:pr-8">
      <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold text-gray-700 mb-5">
        Simplifique a Gestão <br/> do  Seu Escritório de Advocacia
      </h1>
      <p className="text-base md:text-lg tracking-wider lg:text-xl text-gray-800 mb-8">Gerencie clientes, documentos e processos jurídicos <br/>em uma plataforma intuitiva e segura.</p>
      <form className="flex flex-col sm:flex-row" onSubmit={(e) => e.preventDefault()}>
        <input 
          type="email" 
          placeholder="Seu e-mail" 
          className="mb-4 sm:mb-0 sm:mr-4 px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-green-600 w-full sm:w-auto bg-gray-100 text-sm"
        />
        <button 
          type="submit" 
          className="bg-green-500 text-white font-semibold tracking-wide px-5 py-2 rounded-full hover:bg-green-600 transition duration-300 w-full sm:w-auto text-sm"
        >
          INICIAR TESTE GRÁTIS
        </button>
      </form>

      <div className="flex flex-wrap items-center text-sm text-gray-600 mt-4">
        <div className="flex items-center mr-6 mb-2">
          <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#24B364] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
          <span className='tracking-wider'>7 dias de teste grátis</span>
        </div>
        
        <div className="flex items-center mb-2">
          <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#24B364] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
          <span className='tracking-wider'>Sem necessidade de cartão de crédito</span>
        </div>
      </div>
    </div>
    <div className="md:w-1/2 text-center md:text-right mt-10 md:mt-0">
      <div className="inline-block">
        <video 
          src="/video/pratice-panther.mp4" 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-auto md:max-w-[150%] lg:max-w-[160%] mx-auto rounded-lg"
        >
          Seu navegador não suporta o elemento de vídeo.
        </video>
      </div>
    </div>
  </div>
  <FeaturedIn title="Aparece em" />
</section> 
     


<div className="bg-[#eceff5] w-full">
  <div className="container mx-auto px-4 sm:px-6 md:px-40 lg:px-64 xl:px-52 py-16 md:py-14 md:pb-8">
  <Testimonials />
  </div>
</div>


<div className="container mx-auto px-4 sm:px-6 md:px-34 lg:px-44 xl:px-52 space-y-18 py-14 md:py-7">
  <Section />
</div>

<div className="bg-[#eceff5] w-full">
  <div className="container mx-auto px-4 sm:px-6 md:px-34 lg:px-44 xl:px-52 py-16 md:py-22">
    <LegalPracticeStats />
    <Partnes />
  </div>
</div>

<StartFreeTrial />

<div className="container bg-white mx-auto px-4 sm:px-6 md:px-34 lg:px-44 xl:px-52 space-y-18 py-14 md:py-22">
  <FrequentlyAsked />
</div>

{/*           
          <ModalProvider>
            <EmailModal />
          </ModalProvider> */}

        </main>
      </div>  
  );
};



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