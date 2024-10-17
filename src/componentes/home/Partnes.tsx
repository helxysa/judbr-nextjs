import Image from 'next/image';

export default function Partnes(){
  const logos = [
    { src: "/image/above-law.png", alt: "Above The Law", maxWidth: 50 },
    { src:"/image/abc.png", alt: "ABC", maxWidth: 32},
    { src:"/image/msnbc.webp", alt: "MSNBC", maxWidth: 80 },
    { src:"/image/miami.webp", alt: "The Miami Herald", maxWidth: 120  },
    { src:"/image/national.png", alt: "National Law Review", maxWidth: 150},
    { src:"/image/abc.png", alt: "ABC", maxWidth: 32},

    
  ];

  return (
    <section className="bg-[#eceff5] py-[5px] pb-[4px] " style={{
        '--padding-desktop-top': '25px',
        '--padding-desktop-bottom': '70px',
      } as React.CSSProperties}>
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-20 flex flex-col items-center">
          <h2 className="text-1xs text-gray-600 whitespace-nowrap mb-6 text-center font-thin">
            JUDBBR colabora com essas empresas
          </h2>
          <div className="hidden md:flex items-center justify-center w-full">
            <div className="flex items-center space-x-6 lg:space-x-20">
              {logos.map((logo, index) => (
                <div key={index} className="flex items-center">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.maxWidth}
                    height={40}
                    className="w-auto h-auto object-contain"
                    style={{ maxWidth: `${logo.maxWidth}px` }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> 
  );
};
