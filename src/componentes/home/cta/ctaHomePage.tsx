export default function CtaHomePage() {
    return (
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
          <section className="bg-white pt-10 pb-2">
            <div className="container mx-auto px-9 md:px-12 lg:px-24 xl:px-32 flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 mb-10 md:mb-0 md:pr-8 lg:pr-16 md:ml-8 lg:ml-16">
                <h1 className="text-3xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-3">
                  Simplifique a Gestão do Seu Escritório de Advocacia
                </h1>
                <p className="text-base md:text-lg lg:text-1xs text-gray-900 mb-8">Gerencie clientes, documentos e processos jurídicos em uma plataforma intuitiva e segura.</p>
                <form className="flex flex-col sm:flex-row" onSubmit={(e) => e.preventDefault()}>
                  <input 
                    type="email" 
                    placeholder="Seu e-mail" 
                    className="mb-4 sm:mb-0 sm:mr-4 px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-judbr-main w-full sm:w-auto bg-gray-100 text-sm"
                  />
                  <button 
                    type="submit" 
                    className="bg-green-500 text-white px-5 py-2 rounded-full hover:bg-green-600 transition duration-300 w-full sm:w-auto text-sm"
                  >
                    INICIAR TESTE GRÁTIS
                  </button>
                </form>
              </div>
              <div className="md:w-1/2 text-center md:text-right mt-10 md:mt-0">
                <div className="text-4xl md:text-5xl lg:text-4xl font-bold text-gray-900 p-4 rounded-lg inline-block">
                  <img 
                    src="https://www.practicepanther.com/wp-content/uploads/dynamic/2020/05/group-48-925x0-c-default.png" 
                    alt="Practice Panther Interface"
                    className="w-full h-auto md:max-w-[100%] lg:max-w-[100%] mx-auto rounded-lg"
                  />
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    )
  }