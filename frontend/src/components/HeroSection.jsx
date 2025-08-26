import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import teeyodImage from '../assets/teeyod.jpg';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
                    <section 
                  className="relative h-[95vh] flex items-center bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: `url(${teeyodImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/30"></div>

                  {/* Content */}
                  <div className="relative z-10 w-full px-8 sm:px-12 lg:px-16 text-white">
                    <div className="text-left max-w-none">
                      <h1 
                        className={`text-3xl md:text-5xl font-bold mb-5 transition-all duration-1000 ease-out ${
                          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}
                        style={{
                          fontFamily: 'Metamorphous',
                          lineHeight: '1.1'
                        }}
                      >
                        SIAMESE<br/>
                        <span className="ml-0">FILMART</span>
                      </h1>
          <p 
            className={`mb-1 text-white transition-all duration-1000 ease-out delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{
              fontFamily: 'Metamorphous',
              fontSize: '18px',
              fontWeight: '400',
              lineHeight: '1.2'
            }}
          >
            Southeast Asia's Premier Film
          </p>
          <p 
            className={`mb-6 text-white transition-all duration-1000 ease-out delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{
              fontFamily: 'Metamorphous',
              fontSize: '18px',
              fontWeight: '400',
              lineHeight: '1.2'
            }}
          >
            Festival, Market & Conference
          </p>
          <p 
            className={`mb-4 text-white transition-all duration-1000 ease-out delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{
              fontFamily: 'Metamorphous',
              fontSize: '28px',
              fontWeight: '400',
              lineHeight: 'normal'
            }}
          >
            24-26 June 2026
          </p>
          <p 
            className={`mb-8 text-white transition-all duration-1000 ease-out delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{
              fontFamily: 'Metamorphous',
              fontSize: '20px',
              fontWeight: '400',
              lineHeight: 'normal'
            }}
          >
            AT ICONSIAM Bangkok
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
