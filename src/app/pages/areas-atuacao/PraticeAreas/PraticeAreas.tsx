export default function PracticeAreas() {
    const areas = [
      {
        icon: "🏛️",
        title: "Direito Civil",
        description: "Gerencie casos civis com facilidade. Agende audiências, organize documentos e acompanhe prazos importantes.",
      },
      {
        icon: "⚖️",
        title: "Direito Penal",
        description: "Simplifique sua prática criminal. Gerencie comunicações com clientes, salve documentos e organize datas de tribunal.",
      },
      {
        icon: "💼",
        title: "Direito Trabalhista",
        description: "Acompanhe processos trabalhistas, gerencie prazos e mantenha toda a documentação organizada em um só lugar.",
      },
      {
        icon: "🏢",
        title: "Direito Empresarial",
        description: "Gerencie contratos, fusões e aquisições. Mantenha registros corporativos e documentos legais organizados.",
      },
      {
        icon: "👨‍👩‍👧‍👦",
        title: "Direito de Família",
        description: "Lide com casos de divórcio, guarda e adoção. Mantenha informações sensíveis seguras e organize audiências.",
      },
      {
        icon: "🌱",
        title: "Direito Ambiental",
        description: "Gerencie casos de conformidade ambiental, litígios e consultoria. Organize documentos e prazos regulatórios.",
      },
    ];
  
    return (
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Todas as Áreas de Prática</h2>
          <div className="flex flex-wrap -mx-4">
            {areas.map((area, index) => (
              <div key={index} className={`w-full md:w-1/2 lg:w-1/3 px-4 mb-8 ${index % 3 === 0 ? 'md:mb-24' : index % 3 === 1 ? 'md:mb-16' : 'md:mb-8'}`}>
                <div className="bg-white p-6 rounded-lg shadow-md h-full flex flex-col">
                  <div className="text-4xl mb-10 text-center text-blue-500  p-4">{area.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-left">{area.title}</h3>
                  <p className="text-gray-600 mb-4 flex-grow text-left">{area.description}</p>
                  <a href="#" className="text-blue-600 font-semibold hover:underline uppercase text-center">Saiba mais &gt;</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }



