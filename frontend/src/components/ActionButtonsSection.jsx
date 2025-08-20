import React from 'react';

const ActionButtonsSection = () => {
  const buttons = [
    {
      text: "Attend Siamese Filmart",
      bgColor: "bg-yellow-400",
      hoverColor: "hover:bg-yellow-500"
    },
    {
      text: "Register Your Booth",
      bgColor: "bg-yellow-400",
      hoverColor: "hover:bg-yellow-500"
    },
    {
      text: "Submit Your Film",
      bgColor: "bg-yellow-400",
      hoverColor: "hover:bg-yellow-500"
    },
    {
      text: "Get Your Passes",
      bgColor: "bg-yellow-400",
      hoverColor: "hover:bg-yellow-500"
    }
  ];

  return (
    <section className="relative -mt-16 mb-16 z-20 bg-transparent">
      <div className="flex justify-center">
        {/* Main container following the exact CSS specs */}
        <div 
          className="flex flex-col items-center justify-center gap-2.5 bg-white rounded-[10px]"
          style={{
            width: '1070px',
            padding: '30px 50px',
            boxShadow: '0 4px 4px 0 rgba(0, 0, 0, 0.25)'
          }}
        >
          {/* Action buttons in horizontal layout */}
          <div className="flex flex-wrap gap-6 justify-center items-center">
            {buttons.map((button, index) => (
                              <button 
                  key={index} 
                  className="flex justify-center items-center gap-2.5 text-black relative overflow-hidden group"
                  style={{
                    fontFamily: 'Futura',
                    fontSize: '16px',
                    fontStyle: 'normal',
                    fontWeight: '500',
                    lineHeight: 'normal',
                    padding: '10px 20px',
                    borderRadius: '5px',
                    background: 'var(--mainyell1, #F9C712)',
                    boxShadow: '0 4px 4px 0 rgba(255, 255, 255, 0.25) inset, 0 4px 4px 0 rgba(0, 0, 0, 0.25)',
                    minWidth: '200px'
                  }}
                >
                  <span className="relative z-10">{button.text}</span>
                  <span className="text-black font-bold">›</span>
                </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActionButtonsSection;

