import Link from 'next/link';

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  isPopular?: boolean;
}

export default function PricingCard({ title, price, features, isPopular = false }: PricingCardProps) {
  return (
    <div className="relative h-full group">
      {isPopular && (
        <div className="absolute -top-4 -right-4 z-10 overflow-hidden pt-4 pr-4">
          <div className="relative">
            <div className="absolute top-0 right-0 w-24 h-24 bg-judbr-main transform rotate-45 origin-bottom-left"></div>
            <span className="absolute top-4 right-1 text-white text-xs font-bold transform rotate-45 sm:text-sm">
              Popular
            </span>
          </div>
        </div>
      )}
      <div className={`
        bg-white p-6 md:p-8 rounded-lg shadow-lg flex flex-col relative overflow-hidden h-full
        ${isPopular ? 'border-t-8 border-judbr-main ring-2 ring-judbr-main' : 'border-t-8 border-[#252525]'}
        transition-all duration-300 ease-in-out
        group-hover:shadow-xl group-hover:scale-105
      `}>
        <h2 className="text-xl font-bold text-[#252525] mb-4 font-rubik">{title.toUpperCase()}</h2>
        <p className="text-4xl font-semibold text-[#252525] mb-1">{price}</p>
        <p className="text-sm text-gray-500 mb-6">por usuário/mês</p>
        <ul className="mb-8 flex-grow space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start px-2 py-1">
              <svg className="w-4 h-4 mr-2 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm text-[#252525]">{feature}</span>
            </li>
          ))}
        </ul>
        <Link 
          href="#" 
          className={`text-white text-center px-6 py-3 rounded-full transition duration-300 text-sm font-semibold whitespace-nowrap overflow-hidden text-ellipsis ${isPopular ? 'bg-judbr-main hover:bg-opacity-90' : 'bg-[#252525] hover:bg-gray-900'}`}
        >
          OBTER {title.toUpperCase()}
        </Link>
      </div>
    </div>
  );
}