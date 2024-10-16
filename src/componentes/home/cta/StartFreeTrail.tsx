import Image from 'next/image';

export default function StartFreeTrial(){
  return (

    

    <section className=" bg-judbr-main text-white py-16 px-4 sm:px-6 lg:px-8 font-sans2">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <Image
            src="/image/jud-br.png.png"
            alt="JUDBR Logo"
            width={80}
            height={80}
            className="mx-auto"
          />
        </div>
        <h2 className="text-3xl sm:text-2xl font-bold tracking-wide mb-4">
          Comece Seu Período de Teste Gratuito Hoje
        </h2>
        <p className="text-[19px] mb-8 font-light tracking-wider">
          JUDBR é o software líder em gestão de práticas jurídicas. Inicie um teste gratuito hoje e descubra o poder da automação no seu escritório.
        </p>
        <form className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-6">
          <input
            type="email"
            placeholder="Digite seu e-mail"
            className="w-full sm:w-64 px-4 py-2 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            className="font-light tracking-wider w-full sm:w-auto px-6 py-2 bg-green-500 hover:bg-green-600 rounded-full font-semibold transition duration-300"
          >
            INICIAR TESTE GRATUITO
          </button>
        </form>
        <p className="text-sm text-white-200">
          Ao criar uma conta, você concorda com nossos{' '}
          <a href="/termos" className="underline hover:text-gray-300">
            Termos de Serviço
          </a>{' '}
          e{' '}
          <a href="/privacidade" className="underline hover:text-gray-300">
            Política de Privacidade
          </a>
        </p>
      </div>
    </section>
  );
};
