'use client';

import { useState } from 'react';

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
    { name: 'ADVOGADO', monthlyPrice: 49, annualPrice: 470, features: [0, 1, 2, 3, 4, 5, 6, 7, 8] },
    { name: 'ESCRITORIO', monthlyPrice: 69, annualPrice: 662, features: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] },
    { name: 'BANCA', monthlyPrice: 89, annualPrice: 854, features: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] },
  ];
  
  export default function PricingComparison() {
    const [isAnnual, setIsAnnual] = useState(false);
  
    return (
      <div className="container mx-auto md:px-20 md:py-5 px-1 py-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8 " id='compare-judbr-plans'>Compare os planos do JUDBR</h1>
  
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
                    {plan.name === 'BANCA' && (
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
