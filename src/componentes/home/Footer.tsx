import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-blue-800 text-blue-200 py-10">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">JUDBR</h2>
            <p>Software de gestão jurídica para o advogado moderno</p>
          </div>
          <div className="flex space-x-6">
            <Link href="/termos" className="hover:text-white transition duration-300">
              Termos de Uso
            </Link>
            <Link href="/privacidade" className="hover:text-white transition duration-300">
              Política de Privacidade
            </Link>
            <Link href="/contato" className="hover:text-white transition duration-300">
              Contato
            </Link>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; {new Date().getFullYear()} JUDBR. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
