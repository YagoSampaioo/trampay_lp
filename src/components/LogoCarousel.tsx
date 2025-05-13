import React from 'react';

const LogoCarousel = () => {
  // Array de logos dos clientes
  const logos = [
    {
      src: 'https://izmzxqzcsnaykofpcjjh.supabase.co/storage/v1/object/public/media/logos/Logo%20scorpions%20.jpg',
      alt: 'Scorpions'
    },
    {
      src: 'https://izmzxqzcsnaykofpcjjh.supabase.co/storage/v1/object/public/media/logos/logo%20CR.jpeg',
      alt: 'CR'
    },
    {
      src: 'https://izmzxqzcsnaykofpcjjh.supabase.co/storage/v1/object/public/media/logos/Logo%20Logus.jpg',
      alt: 'Logus'
    },
    {
      src: 'https://izmzxqzcsnaykofpcjjh.supabase.co/storage/v1/object/public/media/logos/logo%20star.jpg',
      alt: 'Star'
    },
    {
      src: 'https://izmzxqzcsnaykofpcjjh.supabase.co/storage/v1/object/public/media/logos/logo%20SL.jpg',
      alt: 'SL'
    }
  ];

  return (
    <section className="py-24 bg-profundo relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white mb-6">
            <span className="text-sm font-medium">Clientes</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white font-poppins mb-8">
            Alguns clientes que já escalamos
          </h2>
        </div>

        <div className="relative">
          {/* Efeito de gradiente de desvanecimento nas laterais */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-profundo to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-profundo to-transparent z-10"></div>

          <div className="flex space-x-12 overflow-x-hidden group">
            <div className="flex space-x-12 animate-scroll group-hover:[animation-play-state:paused]">
              {[...logos, ...logos].map((logo, index) => (
                <div
                  key={index}
                  className="w-40 h-40 flex items-center justify-center bg-white rounded-2xl p-6 hover:bg-white/90 transition-all duration-300"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="max-w-full max-h-full object-contain hover:opacity-90 transition-opacity duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-16">
          <a
            href="#contact-form"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-trampay to-objetivo text-profundo font-semibold rounded-xl hover:shadow-[0_8px_30px_rgba(40,250,123,0.3)] transition-all duration-300 transform hover:-translate-y-1"
          >
            Seja mais um Case de Sucesso
          </a>
        </div>
      </div>
    </section>
  );
};

export default LogoCarousel;