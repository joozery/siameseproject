import React from 'react';

const WhySiamSection = () => {
  return (
    <section
      className="py-20"
      style={{
        backgroundImage: `url('/assets/bgwhychoose.png')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-[1200px]">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Left Side - Movie Poster */}
          <div className="lg:w-1/2 relative">
            <div className="relative">
              {/* Movie poster in the foreground */}
              <div className="relative z-10 flex items-center justify-center" style={{ height: 'calc(var(--posterWidth) * 1.35)' }}>
                <div 
                  className="rounded-lg shadow-2xl overflow-hidden"
                  style={{ width: 'var(--posterWidth)', height: 'calc(var(--posterWidth) * 1.25)' }}
                >
                  <img 
                    src="/assets/poster.jpg"
                    alt="Movie Poster"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="lg:w-1/2 space-y-6 flex flex-col items-center text-center w-full" style={{ maxWidth: '760px' }}>
            <h2 
              className="text-4xl md:text-5xl font-bold"
              style={{
                color: '#F9C712',
                fontFamily: 'Metamorphous'
              }}
            >
              Why Siam?
            </h2>
            
            <p 
              className="text-lg text-gray-800 leading-relaxed"
              style={{
                fontFamily: 'Futura'
              }}
            >
              Experience the heart of Southeast Asian cinema and entertainment industry.
            </p>

            <p 
              className="text-lg text-gray-800 leading-relaxed"
              style={{
                fontFamily: 'Futura'
              }}
            >
              Bangkok serves as the perfect gateway to explore emerging markets, forge international partnerships, and discover the next wave of creative talent from Asia and beyond.
            </p>
            
            {/* Call to Action Button */}
            <div className="relative inline-block self-center">
              <button
                className="relative transition-transform duration-200 hover:-translate-y-0.5"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '44px',
                  padding: '0 28px',
                  paddingRight: '64px',
                  gap: '8px',
                  borderRadius: '12px',
                  background: '#F9C712',
                  color: '#FFFFFF',
                  fontFamily: 'Futura',
                  fontWeight: 700,
                  fontSize: '18px',
                  letterSpacing: '0.02em',
                  boxShadow: '0 6px 16px rgba(0,0,0,0.18)'
                }}
              >
                LEARN MORE
                <span
                  className="absolute top-1/2 -translate-y-1/2"
                  style={{
                    right: '-18px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '36px',
                    height: '36px',
                    borderRadius: '9999px',
                    background: '#F9C712',
                    boxShadow: '0 6px 16px rgba(0,0,0,0.18)'
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 17L17 7" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 7H17V16" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySiamSection;
