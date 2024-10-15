import Image from 'next/image';

export default function FeaturedIn ({title}: {title: string}){
  const logos = [
    { src: "/image/above-law.png", alt: "Above The Law", maxWidth: 50 },
    { src:"/image/abc.png", alt: "ABC", maxWidth: 32},
    { src:"/image/msnbc.webp", alt: "MSNBC", maxWidth: 80 },
    { src:"/image/miami.webp", alt: "The Miami Herald", maxWidth: 120  },
    { src:"/image/national.png", alt: "National Law Review", maxWidth: 150},
    { src:"/image/abc.png", alt: "ABC", maxWidth: 32},

    
  ];

  return (
    <section className="bg-white py-[90px] pb-[4px] " style={{
        '--padding-desktop-top': '25px',
        '--padding-desktop-bottom': '70px',
      } as React.CSSProperties}>
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-20 flex justify-center">
          <div className="hidden md:flex items-center">
            <h2 className="text-1xs text-gray-600 whitespace-nowrap pr-6 relative">
              {title}
              <span className="absolute top-1/2 right-0 h-7 w-px bg-gray-600 transform translate-y-[-50%]"></span>
            </h2>
            <div className="flex items-center space-x-6 lg:space-x-10 pl-6">
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

