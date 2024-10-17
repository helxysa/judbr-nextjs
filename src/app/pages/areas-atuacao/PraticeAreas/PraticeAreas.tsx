export default function PracticeAreas() {
  const areas = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
        </svg>
      ),
      title: "Direito Civil",
      description: "Gerencie casos civis com facilidade. Agende audiências, organize documentos e acompanhe prazos importantes.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: "Direito Penal",
      description: "Simplifique sua prática criminal. Gerencie comunicações com clientes, salve documentos e organize datas de tribunal.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Direito Trabalhista",
      description: "Acompanhe processos trabalhistas, gerencie prazos e mantenha toda a documentação organizada em um só lugar.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: "Direito Empresarial",
      description: "Gerencie contratos, fusões e aquisições. Mantenha registros corporativos e documentos legais organizados.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Direito de Família",
      description: "Lide com casos de divórcio, guarda e adoção. Mantenha informações sensíveis seguras e organize audiências.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Direito Ambiental",
      description: "Gerencie casos de conformidade ambiental, litígios e consultoria. Organize documentos e prazos regulatórios.",
    },
  ];


    return (
      <section className="bg-[#F3F4F6] py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Todas as Áreas de Prática</h2>
          <div className="flex flex-wrap -mx-4">
            {areas.map((area, index) => (
              <div key={index} className={`w-full md:w-1/2 lg:w-1/3 px-4 mb-8 ${index % 3 === 0 ? 'md:mb-24' : index % 3 === 1 ? 'md:mb-16' : 'md:mb-8'}`}>
                <div className="bg-white rounded-lg shadow-md h-full flex flex-col overflow-hidden">
                  <div className="bg-[#F6F6F6] p-7 flex items-center justify-center">
                    <div className="text-4xl text-blue-500">{area.icon}</div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-semibold mb-2 text-left">{area.title}</h3>
                    <p className="text-gray-600 mb-20 flex-grow text-left">{area.description}</p>
                    <div className="mt-auto -mx-6 -mb-6">
                      <a href="#" className="block w-full py-3 px-4 bg-white border-t border-gray-200 text-blue-500 font-semibold text-center hover:bg-gray-50 transition duration-300">
                        LEARN MORE &gt;
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }