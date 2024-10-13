import Link from 'next/link';


interface PricingCardProps {
    title: string;
    price: string;
    features: string[];
    isPopular?: boolean;
  }
  
  export default function PricingCard({ title, price, features, isPopular = false }: PricingCardProps) {
    return (
        <div className="bg-white p-6 md:p-8 rounded shadow-lg flex flex-col relative overflow-hidden">
            {isPopular && (
  <div className="absolute top-0 right-0 bg-green-500 text-white px-8 py-1 text-xs font-semibold transform rotate-45 translate-x-7 -translate-y-3">
    POPULAR
  </div>
)}
        <h2 className="text-xl font-bold text-gray-800 mb-4">{title.toUpperCase()}</h2>
        <p className="text-4xl font-bold text-gray-900 mb-1">R${price}</p>
        <p className="text-sm text-gray-500 mb-6">por usuário/mês</p>
        <ul className="mb-8 flex-grow space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start px-2 py-1">
            <svg className="w-4 h-4 mr-2 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-sm text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
      <Link 
            href="#" 
            className="bg-gray-800 text-white text-center px-6 py-3 rounded-full transition duration-300 text-sm font-semibold hover:bg-gray-900 whitespace-nowrap overflow-hidden text-ellipsis"
            >
            OBTER {title.toUpperCase()}
            </Link>
        </div>
    );
  }