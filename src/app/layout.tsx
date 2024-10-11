import Nav from "@/componentes/home/Nav";
import "./globals.css";
import Footer from "@/componentes/home/Footer";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white">
        <Nav />
        {children}
        <Footer />
        </body>
    </html>
  );
}