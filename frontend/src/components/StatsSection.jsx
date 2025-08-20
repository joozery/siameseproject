import React from 'react';

const StatsSection = () => {
  const stats = [
    {
      number: "1000+",
      label: "Satisfied Customers"
    },
    {
      number: "50+",
      label: "Successful Projects"
    },
    {
      number: "24/7",
      label: "Support"
    },
    {
      number: "99.9%",
      label: "Uptime"
    }
  ];

  return (
    <section className="py-20 bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="text-4xl font-bold mb-2">{stat.number}</div>
              <div className="text-blue-200">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

