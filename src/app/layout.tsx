import Nav from "@/componentes/home/Nav";
import "./globals.css";
import Footer from "@/componentes/home/Footer";
import ColorPicker from "@/componentes/ColorPicker/ColorPicker";
import { Metadata, Viewport } from 'next';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-roboto',
});



export const metadata: Metadata = {
  title: 'Judbr',
  description: 'Judbr é uma plataforma de gestão de processos e prazos para advogados e escritórios.',
  icons: {
    icon: '/image/favicon.ico',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1.0,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white pt-20 font-roboto" >
        <Nav />
        {children}
        <Footer />
        <ColorPicker />
      </body>
    </html>
  );
}