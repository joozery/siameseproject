import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { heroSlideAPI } from '../services/api';
import teeyodImage from '../assets/Awards.png';

const HeroSection = () => {
  const [slides, setSlides] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSlides();
  }, []);

  useEffect(() => {
    setIsVisible(true);
  }, [currentSlide]);

  useEffect(() => {
    if (slides.length > 1) {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000); // Auto-slide every 5 seconds

      return () => clearInterval(timer);
    }
  }, [slides.length]);

  const fetchSlides = async () => {
    try {
      setLoading(true);
      const response = await heroSlideAPI.getAll({ active: true });
      if (response.data && response.data.length > 0) {
        setSlides(response.data);
      } else {
        // Fallback to default slide
        setSlides([{
          _id: 'default',
          title: 'SIAMESE\nFILMART',
          subtitle: "Southeast Asia's Premier Film",
          description: 'Festival, Market & Conference\n24-26 June 2026\nAT ICONSIAM Bangkok',
          imageUrl: teeyodImage,
          buttonText: '',
          buttonLink: ''
        }]);
      }
    } catch (error) {
      console.error('Error fetching slides:', error);
      // Fallback to default slide
      setSlides([{
        _id: 'default',
        title: 'SIAMESE\nFILMART',
        subtitle: "Southeast Asia's Premier Film",
        description: 'Festival, Market & Conference\n24-26 June 2026\nAT ICONSIAM Bangkok',
        imageUrl: teeyodImage,
        buttonText: '',
        buttonLink: ''
      }]);
    } finally {
      setLoading(false);
    }
  };

  const nextSlide = () => {
    setIsVisible(false);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setIsVisible(true);
    }, 300);
  };

  const prevSlide = () => {
    setIsVisible(false);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      setIsVisible(true);
    }, 300);
  };

  const goToSlide = (index) => {
    setIsVisible(false);
    setTimeout(() => {
      setCurrentSlide(index);
      setIsVisible(true);
    }, 300);
  };

  if (loading) {
    return (
      <section className="relative h-[95vh] flex items-center bg-gray-900">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-white text-xl">Loading...</div>
        </div>
      </section>
    );
  }

  const slide = slides[currentSlide];

  return (
    <section
      className="relative h-[95vh] flex items-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${slide.imageUrl})`,
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
            className={`text-3xl md:text-5xl font-bold mb-5 transition-all duration-1000 ease-out whitespace-pre-line ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            style={{
              fontFamily: 'Metamorphous',
              lineHeight: '1.1'
            }}
          >
            {slide.title}
          </h1>

          {slide.subtitle && (
            <p
              className={`mb-1 text-white transition-all duration-1000 ease-out delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              style={{
                fontFamily: 'Metamorphous',
                fontSize: '18px',
                fontWeight: '400',
                lineHeight: '1.2'
              }}
            >
              {slide.subtitle}
            </p>
          )}

          {slide.description && (
            <p
              className={`mb-8 text-white transition-all duration-1000 ease-out delay-300 whitespace-pre-line ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              style={{
                fontFamily: 'Metamorphous',
                fontSize: '20px',
                fontWeight: '400',
                lineHeight: 'normal'
              }}
            >
              {slide.description}
            </p>
          )}

          {slide.buttonText && slide.buttonLink && (
            <Link
              to={slide.buttonLink}
              className={`inline-block px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              style={{
                fontFamily: 'Futura',
                transitionDelay: '400ms'
              }}
            >
              {slide.buttonText}
            </Link>
          )}
        </div>
      </div>

      {/* Navigation Arrows */}
      {slides.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-black/30 hover:bg-black/50 text-white rounded-full transition-all duration-300"
            aria-label="Previous slide"
          >
            <HiChevronLeft className="h-8 w-8" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-black/30 hover:bg-black/50 text-white rounded-full transition-all duration-300"
            aria-label="Next slide"
          >
            <HiChevronRight className="h-8 w-8" />
          </button>
        </>
      )}

      {/* Dots Indicator */}
      {slides.length > 1 && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide
                  ? 'bg-white w-8'
                  : 'bg-white/50 hover:bg-white/75'
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default HeroSection;
