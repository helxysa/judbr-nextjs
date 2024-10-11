export default function Resources() {
  return <div>
    <section className="py-20 bg-gray-100">
  <div className="container mx-auto px-9 md:px-30 lg:px-40 xl:px-48">
    <h2 className="text-3xl md:text-3xl lg:text-3xl font-bold text-gray-900 text-center mb-12">Recursos Principais</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">Gestão de Casos</h3>
        <p className="text-gray-900 text-base">Organize e acompanhe todos os seus casos em um só lugar.</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-gra-700 mb-4">Faturamento Automático</h3>
        <p className="text-gray-900 text-base">Crie e envie faturas com poucos cliques.</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">Agenda Integrada</h3>
        <p className="text-gray-900 text-base">Gerencie compromissos e prazos com facilidade.</p>
      </div>
    </div>
  </div>
</section>
  </div>;
}

