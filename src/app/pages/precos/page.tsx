'use client'

import { useState } from 'react';
import Link from 'next/link';
import FrequentlyAsked from '@/componentes/home/FrequentlyAsked';

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  isPopular?: boolean;
}

function PricingCard({ title, price, features, isPopular = false }: PricingCardProps) {
  return (
    <div className={`bg-white p-8 rounded-lg shadow-md flex flex-col relative overflow-hidden ${isPopular ? 'border-2 border-blue-500' : ''}`}>
      {isPopular && (
        <div className="absolute top-0 right-0 bg-blue-500 text-white px-3 py-1 text-sm font-semibold">
          Popular
        </div>
      )}
      <h2 className="text-2xl font-bold text-purple-800 mb-4">{title}</h2>
      <p className="text-4xl font-bold text-purple-700 mb-4">{price}<span className="text-sm font-normal">/mês</span></p>
      <ul className="mb-8 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center mb-2">
            <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
      <Link 
        href="#" 
        className={`text-white text-center px-6 py-2 rounded-md transition duration-300 ${
          isPopular ? 'bg-blue-500 hover:bg-blue-600' : 'bg-purple-600 hover:bg-purple-700'
        }`}
      >
        Escolher {title}
      </Link>
    </div>
  );
}

export default function Precos() {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <div className="bg-[rgb(115,103,240)]/[0.16] flex flex-col min-h-screen">
      <main className="py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-purple-800 text-center mb-6">Escolha o plano perfeito</h1>
          <p className="text-xl text-purple-700 text-center mb-12">Planos flexíveis para se adequar ao seu escritório, sem surpresas</p>
          
          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-full p-1 flex">
              <button 
                className={`px-4 py-2 rounded-full ${isMonthly ? 'bg-purple-600 text-white' : 'text-purple-600'}`}
                onClick={() => setIsMonthly(true)}
              >
                Mensal
              </button>
              <button 
                className={`px-4 py-2 rounded-full ${!isMonthly ? 'bg-purple-600 text-white' : 'text-purple-600'}`}
                onClick={() => setIsMonthly(false)}
              >
                Anual (Economize 20%)
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PricingCard 
              title="Solo"
              price={isMonthly ? "R$49" : "R$470"}
              features={["Chat Interno", "Notificações em Tempo Real", "Pagamentos Nativos"]}
            />
            <PricingCard 
              title="Essential"
              price={isMonthly ? "R$69" : "R$662"}
              features={["Tudo do plano Solo", "Campos Personalizados", "Funções de Segurança Personalizadas"]}
            />
            <PricingCard 
              title="Business"
              price={isMonthly ? "R$89" : "R$854"}
              features={["Tudo do plano Essential", "Mensagens Bidirecionais", "Assinatura Digital Ilimitada"]}
              isPopular={true}
            />
          </div>

          <div className="text-center mt-12">
            <a href="#compare-judbr-plans" className="text-purple-600 hover:text-purple-800 font-semibold">Comparar todos os planos</a>
          </div>
        </div>
      </main>
      <AlwaysIncluded />
      <PricingComparison />
      <div className='bg-white'>
      <FrequentlyAsked />
      
      </div>
    
    </div>
  );
}

const features = [
    { name: 'Contact & Matter Management', category: 'ALWAYS INCLUDED' },
    { name: 'Billable Time & Expense Tracking', category: 'ALWAYS INCLUDED' },
    { name: 'World Class Support', category: 'ALWAYS INCLUDED' },
    { name: 'Secure Client Portal', category: 'ALWAYS INCLUDED' },
    { name: 'Unlimited Data Storage', category: 'ALWAYS INCLUDED' },
    { name: 'iPhone, iPad & Android App', category: 'ALWAYS INCLUDED' },
    { name: 'Internal Chat', category: 'ADVANCED FEATURES' },
    { name: 'Real-Time Notifications', category: 'ADVANCED FEATURES' },
    { name: 'Daily Agenda Email', category: 'ADVANCED FEATURES' },
    { name: 'Custom Security Roles', category: 'ADVANCED FEATURES' },
    { name: 'Custom Fields', category: 'ADVANCED FEATURES' },
    { name: 'Invoice Read Alerts', category: 'ADVANCED FEATURES' },
    { name: 'Native eSignature', category: 'ADVANCED FEATURES' },
    { name: 'Native 2-Way Business Texting', category: 'ADVANCED FEATURES' },
    { name: 'Text Message Event & Reminder Alerts', category: 'ADVANCED FEATURES' },
    { name: 'User Groups', category: 'ADVANCED FEATURES' },
  ];
  
  const plans = [
    { name: 'SOLO', monthlyPrice: 49, annualPrice: 470, features: [0, 1, 2, 3, 4, 5, 6, 7, 8] },
    { name: 'ESSENTIAL', monthlyPrice: 69, annualPrice: 662, features: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] },
    { name: 'BUSINESS', monthlyPrice: 89, annualPrice: 854, features: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] },
  ];
  
  function PricingComparison() {
    const [isAnnual, setIsAnnual] = useState(false);
  
    return (
      <div className="container mx-auto md:px-20 px-1 py-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8" id='compare-judbr-plans'>Compare os planos do JUDBR</h1>
  
        <div className="overflow-x-auto">
          <table className="w-full text-xs sm:text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-900 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-2 sm:px-6 py-2 sm:py-3 ">
                  <div className="flex items-center justify-between ">
                    <span className='md:text-sm sm:text-xs sm:px-2 '>Planos</span>
                    <div className="flex items-center space-x-2 sm:text-[2px]">
                      <span className={`md:text-sm text-xs  ${!isAnnual ? 'font-bold' : ''}`}>Mensal</span>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" value="" className="sr-only peer" checked={isAnnual} onChange={() => setIsAnnual(!isAnnual)} />
                        <div className="w-11 h-6 bg-purple-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 rounded-full peer dark:bg-purple-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"></div>
                      </label>
                      <span className={`text-sm ${isAnnual ? 'font-bold' : ''}`}>Anual <span className="text-green-500 text-xs">(20% off)</span></span>
                    </div>
                  </div>
                </th>
                {plans.map((plan, index) => (
                  <th key={index} scope="col" className="px-2 sm:px-6 py-2 sm:py-3 text-center">
                    {plan.name}
                    <div className="text-lg sm:text-2xl font-bold text-gray-900">
                      R${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                    </div>
                    <div className="text-xs">por usuário/mês</div>
                    {plan.name === 'BUSINESS' && (
                      <div className="bg-[#24B364] text-white text-xs font-semibold px-1 sm:px-2 py-0.5 sm:py-1 rounded mt-1 sm:mt-2">
                        POPULAR
                      </div>
                    )}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((feature, featureIndex) => (
                <tr key={featureIndex} className="bg-white border-b">
                  <th scope="row" className=" px-2 sm:px-6 py-2 sm:py-4 font-medium text-gray-900 whitespace-normal sm:whitespace-nowrap">
                    {feature.category !== features[featureIndex - 1]?.category && (
                      <div className="font-bold text-gray-700 mt-3 sm:mt-4 mb-1 sm:mb-2">{feature.category}</div>
                    )}
                    {feature.name}
                  </th>
                  {plans.map((plan, planIndex) => (
                    <td key={planIndex} className="px-2 sm:px-6 py-2 sm:py-4 text-center">
                      {plan.features.includes(featureIndex) ? (
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#24B364] mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      ) : (
                        <span className="text-gray-400">—</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }


  
interface FeatureProps {
    icon: React.ReactNode;
    alt: string;
    text: string;
  }
  
  function Feature({ icon, text }: FeatureProps) {
    return (
      <div className="flex flex-col items-center text-center py-10 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg hover:bg-purple-50 rounded-lg">
        <div className="mb-2 text-purple-600">{icon}</div>
        <p className="text-sm">{text}</p>
      </div>
    );
  }
  
  function AlwaysIncluded() {
    const features: FeatureProps[] = [
      { icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-12 h-12">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ), alt: 'Contact & Matter Management', text: 'Contact & Matter Management' },
      { icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-12 h-12">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ), alt: 'Billable Time & Expense Tracking', text: 'Billable Time & Expense Tracking' },
      { icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-12 h-12">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ), alt: 'World Class Support', text: 'World Class Support' },
      { icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-12 h-12">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ), alt: 'Secure Client Portal', text: 'Secure Client Portal' },
      { icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-12 h-12">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
        </svg>
      ), alt: 'Unlimited Data Storage', text: 'Unlimited Data Storage' },
      { icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-12 h-12">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ), alt: 'iPhone, iPad & Android App', text: 'iPhone, iPad & Android App' },
    ];
    return (
      <div className="bg-white md:py-20 px-4 sm:px-6 py-12 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">
         Sempre incluído, independente do plano escolhido
        </h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {features.map((feature, index) => (
            <Feature key={index} {...feature} />
          ))}
        </div>
      </div>
    );
  }