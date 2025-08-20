import React from 'react';
import sponsor1 from '../assets/sponsor/1.jpg';
import sponsor2 from '../assets/sponsor/2.png';
import sponsor3 from '../assets/sponsor/3.webp';
import sponsor4 from '../assets/sponsor/4.png';
import sponsor5 from '../assets/sponsor/5.webp';
import sponsor6 from '../assets/sponsor/6.jpg';

const sponsors = [
  { id: 1, image: sponsor1, name: 'Sponsor 1' },
  { id: 2, image: sponsor2, name: 'Sponsor 2' },
  { id: 3, image: sponsor3, name: 'Sponsor 3' },
  { id: 4, image: sponsor4, name: 'Sponsor 4' },
  { id: 5, image: sponsor5, name: 'Sponsor 5' },
  { id: 6, image: sponsor6, name: 'Sponsor 6' },
  // Add placeholders to fill the grid
  { id: 7, image: sponsor1, name: 'Sponsor 7' },
  { id: 8, image: sponsor2, name: 'Sponsor 8' },
  { id: 9, image: sponsor3, name: 'Sponsor 9' }
];

const SponsorSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="text-2xl md:text-3xl"
          style={{
            color: '#4D341E',
            fontFamily: 'Metamorphous'
          }}
        >
          SPONSOR
        </h2>

        <div className="mt-8 grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-9 gap-6">
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.id}
              className="aspect-square bg-white rounded-lg border border-gray-200 p-4 flex items-center justify-center hover:shadow-lg transition-shadow duration-300 group cursor-pointer"
            >
              <img
                src={sponsor.image}
                alt={sponsor.name}
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SponsorSection;




