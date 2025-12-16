import React, { useEffect } from 'react';

const SocialFeedSection = () => {
  useEffect(() => {
    // Load Elfsight script
    const script = document.createElement('script');
    script.src = 'https://elfsightcdn.com/platform.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script when component unmounts
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <h2
          className="text-3xl md:text-4xl text-left mb-12"
          style={{
            color: '#4D341E',
            fontFamily: 'Metamorphous'
          }}
        >
          Social Feed
        </h2>

        {/* Elfsight Social Feed */}
        <div
          className="elfsight-app-43fa3775-8ecd-46fe-b8d6-fecde5b7107c"
          data-elfsight-app-lazy
        ></div>
      </div>
    </section>
  );
};

export default SocialFeedSection;
