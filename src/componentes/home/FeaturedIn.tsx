import Image from 'next/image';

export default function FeaturedIn (){
  const logos = [
    { src: "/image/above-law.png", alt: "Above The Law", maxWidth: 62 },
    { src:"/image/abc.png", alt: "ABC", maxWidth: 37},
    { src:"/image/msnbc.webp", alt: "MSNBC", maxWidth: 94 },
    { src:"/image/miami.webp", alt: "The Miami Herald", maxWidth: 142  },
    { src:"/image/national.png", alt: "National Law Review", maxWidth: 165},
  ];

  return (
    <section className="bg-white py-[60px] pb-[20px]" style={{
        '--padding-desktop-top': '30px',
        '--padding-desktop-bottom': '80px',
      } as React.CSSProperties}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-24 flex justify-center">
          <div className="hidden md:flex items-center">
            <h2 className="text-xl font-semibold text-gray-500 whitespace-nowrap pr-8 relative">
              Featured In
              <span className="absolute top-1/2 right-0 h-8 w-px bg-gray-500 transform translate-y-[-50%]"></span>
            </h2>
            <div className="flex items-center space-x-8 lg:space-x-12 pl-8">
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

