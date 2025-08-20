import React from 'react';
import bgWhyChoose from '../assets/bgwhychoose.png';

const WhySiamSection = () => {
  return (
    <section
      className="py-20"
      style={{
        backgroundImage: `url(${bgWhyChoose})`,
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
                    src="/src/assets/poster.jpg"
                    alt="Movie Poster"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="lg:w-1/2 space-y-6">
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
                fontFamily: 'Arial, sans-serif'
              }}
            >
              Experience the heart of Southeast Asian cinema and entertainment industry.
            </p>
            
            <p 
              className="text-lg text-gray-800 leading-relaxed"
              style={{
                fontFamily: 'Arial, sans-serif'
              }}
            >
              Bangkok serves as the perfect gateway to explore emerging markets, forge international partnerships, and discover the next wave of creative talent from Asia and beyond.
            </p>
            
            {/* Call to Action Button */}
            <div className="relative inline-block">
              <button 
                className="px-8 py-4 bg-yellow-400 text-black font-bold uppercase tracking-wide hover:bg-yellow-500 transition-colors duration-300 flex items-center space-x-2 rounded-lg shadow-md"
                style={{
                  fontFamily: 'Futura'
                }}
              >
                <span>LEARN MORE</span>
                <svg className="w-4 h-4" fill="black" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySiamSection;
