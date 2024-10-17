import { useState, useEffect, useRef } from 'react';


const stats = [
    { value: '8+', description: 'horas economizadas por semana em tarefas administrativas' },
    { value: '73%', description: 'redução em contas a receber no final do ano' },
    { value: '70%', description: 'pagamento mais rápido que a média da indústria' },
  ];
  
  const partners = [
    { name: 'Beverly Hills Bar Association', svg: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <rect width="100" height="100" fill="#f0f0f0"/>
        <text x="50" y="50" fontSize="20" textAnchor="middle" dominantBaseline="middle" fill="#333">BHBA</text>
      </svg>
    )},
    { name: 'Some Other Association', svg: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <circle cx="50" cy="50" r="45" fill="#f0f0f0"/>
        <text x="50" y="50" fontSize="20" textAnchor="middle" dominantBaseline="middle" fill="#333">SOA</text>
      </svg>
    )},
    { name: 'MSBA', svg: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <polygon points="50,10 90,90 10,90" fill="#f0f0f0"/>
        <text x="50" y="60" fontSize="20" textAnchor="middle" dominantBaseline="middle" fill="#333">MSBA</text>
      </svg>
    )},
    { name: 'Oklahoma Bar Association', svg: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <rect width="100" height="100" fill="#f0f0f0"/>
        <text x="50" y="50" fontSize="20" textAnchor="middle" dominantBaseline="middle" fill="#333">OBA</text>
      </svg>
    )},
    { name: 'MDB', svg: (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <circle cx="50" cy="50" r="45" fill="#f0f0f0"/>
        <text x="50" y="50" fontSize="20" textAnchor="middle" dominantBaseline="middle" fill="#333">MDB</text>
      </svg>
    )},
  ];
  
  
export default function LegalPracticeStats() {
  const [counts, setCounts] = useState(stats.map(() => 0));
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const intervals = stats.map((stat, index) => {
      return setInterval(() => {
        setCounts(prevCounts => {
          const newCounts = [...prevCounts];
          if (newCounts[index] < parseFloat(stat.value)) {
            newCounts[index] += stat.value.includes('%') ? 1 : 0.1;
          } else {
            clearInterval(intervals[index]);
          }
          return newCounts;
        });
      }, 40);
    });

    return () => intervals.forEach(clearInterval);
  }, [isVisible]);

 
  
  return (
    <div ref={ref} className="py-20 bg-[#eceff5] ">
      <div className="container mx-auto px-4 md:px-30 lg:px-40 xl:px-48">
        <h1 className="text-3xl font-semibold text-gray-900 text-center mb-12">
          Mais do que um software de gerenciamento de prática legal
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-gray-200 p-6 rounded-lg shadow-md flex flex-col items-center"
              style={{ 
                animationDelay: `${index * 200}ms`,
              }}
            >
              <p className="text-4xl font-bold text-judbr-main mb-4 text-center">
                {isVisible
                  ? (stat.value.includes('+') 
                      ? counts[index].toFixed(0) + '+'
                      : counts[index].toFixed(0) + '%')
                  : '0'}
              </p>
              <div className="w-16 h-px bg-gray-400 mb-4"></div>
              <p className="text-gray-700 text-sm text-center font-thin tracking-wide">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

  {/*     

    Adicionar parceiros depois
        <p className="text-center text-lg mb-8">
          PracticePanther Partners With Over 50 Bar Associations
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-8">
          {partners.map((partner, index) => (
            <div key={index} className="w-24 h-24 grayscale hover:grayscale-0 transition-all">
              {partner.svg}
            </div>
          ))}
        </div> */}