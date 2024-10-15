'use client'

import { useState } from 'react';

import FrequentlyAsked from '@/componentes/home/FrequentlyAsked';
import PricingCard from './PricingCard/PricingCard';
import AlwaysIncluded from './AlwaysIncluded/AlwaysIncluded';
import PriceComparison from './PriceComparison/PriceComparison';
import FeaturedIn from '@/componentes/home/FeaturedIn';

export default function Precos() {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <div className="bg-white w-full">
    <div className="container mx-auto px-4 sm:px-6 md:px-30 lg:px-30 xl:px-48 py-15 md:py-10 lg:py-10 lg:pb-3">
    <div className="bg-white flex flex-col min-h-screen">
      <main className="py-20 md:py-26 lg:py-26 lg:pb-3">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-gray-900  text-center mb-6">Escolha o plano perfeito</h1>
          <p className="text-xl text-gray-900  text-center mb-12">Planos flexíveis para se adequar ao seu escritório, sem surpresas</p>
          
          <div className="flex justify-center mb-8">
            <div className="bg-gray-100 rounded-full p-1 flex">
              <button 
                className={`px-4 py-2 rounded-full ${isMonthly ? 'bg-gray-900 text-white' : 'text-gray-900 '}`}
                onClick={() => setIsMonthly(true)}
              >
                Mensal
              </button>
              <button 
                className={`px-4 py-2 rounded-full ${!isMonthly ? 'bg-gray-900 text-white' : 'text-gray-900 '}`}
                onClick={() => setIsMonthly(false)}
              >
                Anual (Economize 20%)
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <PricingCard 
              title="Advogado"
              price={isMonthly ? "R$49" : "R$470"}
              features={["Para quem trabalha por conta própria"]}
            />
            <PricingCard 
              title="Escritório"
              price={isMonthly ? "R$69" : "R$662"}
              features={["Para escritórios de pequeno e médio porte"]}
            />
            <PricingCard 
              title="Banca"
              price={isMonthly ? "R$89" : "R$854"}
              features={["Para grandes escritórios com múltiplas unidades"]}
              isPopular={true}
            />
            <PricingCard 
              title="Customizado"
              price={isMonthly ? "R$" : "R$"}
              features={["Solução personalizada para grandes escritórios, com funcionalidades adaptadas e suporte dedicado"]}
            />
          </div>

          <div className="text-center mt-12">
          <a 
                href="#compare-judbr-plans" 
                className="text-gray-900 hover:text-gray-700 font-semibold 
                          underline underline-offset-4 decoration-2 decoration-judbrmain
                          "
              >
                Comparar todos os planos
              </a>
          </div>
          <FeaturedIn title="Confiavel por" />
        </div>
      </main>
    
        </div>
    </div>
        

        <div className="bg-gray-100 w-full">
            <div className="container mx-auto px-4 sm:px-6 md:px-30 lg:px-40 xl:px-48 py-15 md:py-20 lg:py-20 lg:pb-3">
                <AlwaysIncluded />
            </div>
        </div>

        <div className="bg-gray-100 w-full">
            <div className="container mx-auto px-4 sm:px-6 md:px-30 lg:px-40 xl:px-48 py-15 md:py-20 lg:py-20 lg:pb-3">
                <PriceComparison />
            </div>
        </div>


        <div className="bg-white w-full">
            <div className="container mx-auto px-4 sm:px-6 md:px-30 lg:px-40 xl:px-48 py-15 md:py-20 lg:py-20 lg:pb-3">
                 <FrequentlyAsked />
            </div>
        </div>

     
      
    </div>
  );
}