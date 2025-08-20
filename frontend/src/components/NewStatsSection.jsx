import React, { useEffect, useState } from 'react';

const NewStatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    attendees: 0,
    countries: 0,
    pavilions: 0,
    speakers: 0,
    exhibitors: 0
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Start counter animation
          const targets = {
            attendees: 15000,
            countries: 40,
            pavilions: 10,
            speakers: 100,
            exhibitors: 150
          };

          const duration = 2000; // 2 seconds
          const steps = 60;
          const stepDuration = duration / steps;

          let currentStep = 0;
          const interval = setInterval(() => {
            currentStep++;
            const progress = currentStep / steps;
            
            setCounters({
              attendees: Math.floor(targets.attendees * progress),
              countries: Math.floor(targets.countries * progress),
              pavilions: Math.floor(targets.pavilions * progress),
              speakers: Math.floor(targets.speakers * progress),
              exhibitors: Math.floor(targets.exhibitors * progress)
            });

            if (currentStep >= steps) {
              clearInterval(interval);
              // Set final values
              setCounters(targets);
            }
          }, stepDuration);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.querySelector('.stats-section');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);
  const stats = [
    { number: `${counters.attendees.toLocaleString()}+`, label: 'Attendees' },
    { number: `${counters.countries}+`, label: 'Countries' },
    { number: `${counters.pavilions}+`, label: 'Country Pavilions' },
    { number: `${counters.speakers}+`, label: 'Speakers' },
    { number: `${counters.exhibitors}+`, label: 'Exhibitors' }
  ];

  return (
    <section className="py-8 bg-white stats-section -mt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center items-center space-x-8 lg:space-x-12">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={`flex items-center transition-all duration-1000 ease-out delay-${index * 200} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="text-center">
                <div 
                  className="mb-2"
                  style={{
                    color: '#98805F',
                    fontFamily: 'Futura',
                    fontSize: '40px',
                    fontWeight: '500',
                    lineHeight: 'normal'
                  }}
                >
                  {stat.number}
                </div>
                <div 
                  className="text-center"
                  style={{
                    color: '#000',
                    fontFamily: 'Metamorphous',
                    fontSize: '16px',
                    fontWeight: '400',
                    lineHeight: 'normal'
                  }}
                >
                  {stat.label}
                </div>
              </div>
              {index < stats.length - 1 && (
                <div 
                  className={`hidden md:block w-px h-16 mx-8 transition-all duration-1000 ease-out delay-${(index + 1) * 200} ${
                    isVisible ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'
                  }`}
                  style={{
                    backgroundColor: '#F9C712'
                  }}
                ></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewStatsSection;
