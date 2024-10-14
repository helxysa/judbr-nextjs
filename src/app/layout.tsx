import Nav from "@/componentes/home/Nav";
import "./globals.css";
import Footer from "@/componentes/home/Footer";
import ColorPicker from "@/componentes/ColorPicker/ColorPicker";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white pt-20">
        <Nav />
        {children}
        <Footer />
        <ColorPicker />
        </body>
    </html>
  );
}