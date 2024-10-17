import Nav from "@/componentes/home/Nav";
import "./globals.css";
import Footer from "@/componentes/home/Footer";
import ColorPicker from "@/componentes/ColorPicker/ColorPicker";
import { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';


const metropolis = localFont({
  src: [
    {
      path: '../../public/fonts/Metropolis-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Metropolis-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Metropolis-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Metropolis-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-metropolis',
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
    <html lang="en" className={`${metropolis.variable}` }>
      <body className="bg-white pt-20 font-figtree" >
        <Nav />
        {children}
        <Footer />
        <ColorPicker />
      </body>
    </html>
  );
}