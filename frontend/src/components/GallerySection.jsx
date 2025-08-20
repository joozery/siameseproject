import React from 'react';
import img1 from '../assets/gallery/1.jpg';
import img2 from '../assets/gallery/2.jpg';
import img3 from '../assets/gallery/3.jpeg';
import img4 from '../assets/gallery/4.jpg';
import img5 from '../assets/gallery/5.jpg';
import img6 from '../assets/gallery/6.jpeg';
import img7 from '../assets/gallery/7.jpeg';
import img8 from '../assets/gallery/8.jpg';

const images = [img1, img2, img3, img4, img5, img6, img7, img8];

const GallerySection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="text-3xl md:text-4xl text-center"
          style={{
            color: '#4D341E',
            fontFamily: 'Metamorphous'
          }}
        >
          Gallery
        </h2>

      </div>
      <div className="mt-8 grid grid-cols-4 gap-0 w-full">
        {images.map((src, index) => (
          <div key={index} className="w-full aspect-[16/9] overflow-hidden">
            <img src={src} alt={`Gallery ${index + 1}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default GallerySection;


