import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "O que é software de gerenciamento de prática jurídica?",
    answer: "Software de gerenciamento de prática jurídica ou software de gerenciamento de prática legal é um tipo de software projetado especificamente para ajudar equipes jurídicas a gerenciar suas práticas e relacionamentos com clientes. Ele serve como um hub digital onde equipes jurídicas podem armazenar e organizar informações críticas de caso, contato e documento, permitindo que eles acessem e rastream as informações necessárias para lidar com casos de forma eficaz..."
  },
  {
    question: "Como o software de gerenciamento de prática jurídica pode beneficiar as empresas jurídicas?",
    answer: "O software de gerenciamento de prática jurídica pode beneficiar as empresas jurídicas de várias maneiras..."
  },
  {
    question: "Qual é o melhor software de gerenciamento de prática jurídica?",
    answer: "O melhor software de gerenciamento de prática jurídica depende das necessidades específicas da sua empresa jurídica..."
  },
  {
    question: "Qual é o melhor software de gerenciamento de prática jurídica?",
    answer: "O melhor software de gerenciamento de prática jurídica depende das necessidades específicas da sua empresa jurídica..."
  },
  {
    question: "Qual é o melhor software de gerenciamento de prática jurídica?",
    answer: "O melhor software de gerenciamento de prática jurídica depende das necessidades específicas da sua empresa jurídica..."
  },
  {
    question: "Qual é o melhor software de gerenciamento de prática jurídica?",
    answer: "O melhor software de gerenciamento de prática jurídica depende das necessidades específicas da sua empresa jurídica..."
  },
  // Add more FAQ items as needed
];

export default function FrequentlyAsked() {
    return (
      <div className="w-full mx-auto px-4 py-12 md:py-20 sm:px-6 md:px-30 lg:px-40 xl:px-48 bg-white">
        <div className="max-w-7xl mx-auto ">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-bold text-center mb-8 text-gray-900">
            Perguntas Frequentes
          </h2>
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <FAQItem key={index} question={item.question} answer={item.answer} />
            ))}
          </div>
        </div>
      </div>
    );
  }
  
  function FAQItem({ question, answer }: FAQItem) {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <div className="bg-white border-b border-gray-200">
        <button
          className="flex justify-between items-center w-full py-5 px-4 text-left focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="font-medium text-gray-900 text-sm sm:text-base md:text-lg lg:text-base">{question}</span>
          <span className={`ml-6 flex-shrink-0 text-gray-400 transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''}`}>
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </span>
        </button>
        <div 
          className={`overflow-hidden bg-white transition-all duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'}`}
        >
          <div className="p-4 pt-0 text-sm sm:text-base md:text-lg lg:text-base text-gray-700">
            <p>{answer}</p>
          </div>
        </div>
      </div>
    );
  }