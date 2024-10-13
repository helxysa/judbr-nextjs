import Link from "next/link";

const testimonials = [
    {
      quote: "Desde que começamos a usar o JudBR, nossa produtividade aumentou 30% e os clientes percebem a diferença",
      author: "Maria Silva",
      role: "Advogada",
      avatarColor: "#4A90E2",
      
    },
    {
      quote: "O JUDBR é como ter um funcionário em tempo integral por uma fração do custo. Não conseguiria administrar meu escritório de advocacia sem o JUDBR. O software é fácil de usar, o suporte é excelente e a empresa está sempre lançando novos recursos para tornar a gestão do meu escritório mais fácil e eficiente!",
      author: "Kathleen Amaral",
      role: "Escritório de Advocacia",
      avatarColor: "#50E3C2",
      
    },
    {
        quote: "O JUDBR revolucionou nossa prática jurídica. Economizamos horas preciosas todos os meses com a gestão de processos e prazos. Com apenas alguns cliques, temos acesso a todos os detalhes dos casos, intimações e decisões judiciais.",
        author: "João da Silva",
        role: "Advogado",
        avatarColor: "#F5A623",
      }
  ];
  
export default function Testimonials() {
    return (
        <section className="bg-gray-100 pt-8 pb-4 md:pt-6 md:pb-3">
        <div className="container mx-auto px-4 sm:px-6 md:px-30 lg:px-40 xl:px-48">
          <h2 className="text-3xl md:text-4xl text-center mb-12 font-bold ">O que nossos clientes dizem</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
                
                <div key={index} className="bg-white p-3 rounded-lg shadow-md flex flex-col justify-between">
                <div>
                  <span className="text-green-500 text-4xl">"</span>
                  <div className="text-center">
                    <p className="text-gray-700 mb-4">{testimonial.quote}</p>
                  </div>
                </div>
                <div>
                <div className="flex flex-col items-center mb-3">
                <svg className="w-10 h-10 mb-2" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20" cy="20" r="20" fill={testimonial.avatarColor} />
                    <path d="M26.67 16.67C26.67 20.35 23.68 23.33 20 23.33C16.32 23.33 13.33 20.35 13.33 16.67C13.33 12.99 16.32 10 20 10C23.68 10 26.67 12.99 26.67 16.67Z" fill="white" />
                    <path d="M32.5 31.67C32.5 33.05 31.38 34.17 30 34.17H10C8.62 34.17 7.5 33.05 7.5 31.67C7.5 27.06 11.23 23.33 15.83 23.33H24.17C28.77 23.33 32.5 27.06 32.5 31.67Z" fill="white" />
                </svg>
                <p className="font-semibold text-gray-800 text-sm text-center">{testimonial.author}</p>
                <p className="text-xs text-gray-600 text-center">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
         
           
        </div>
      </div>
      <div className="flex justify-center py-10">
          <Link href="/pages/sobre-nos" className="text-blue-500 hover:text-blue-600 underline">Veja mais depoimentos</Link>
          </div>
    </section>
    );
  };
  
