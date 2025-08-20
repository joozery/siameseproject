import React from 'react';
import bgFooter from '../assets/bgfooter.png';
import siameseLogo from '../assets/siameselogo.png';

const Footer = () => {
  return (
    <footer
      className="text-black"
      style={{
        backgroundImage: `url(${bgFooter})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: 'transparent',
        backgroundBlendMode: 'normal'
      }}
    >
      <div className="w-full" style={{ paddingLeft: '100px', paddingRight: '100px' }}>
        <div className="w-full max-w-7xl mx-auto py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div>
              <div className="mb-4">
                <div className="grid grid-cols-[auto_1fr_auto] items-center">
                  <div className="justify-self-start">
                    <img src={siameseLogo} alt="Siamese Filmart" className="h-10 md:h-14 w-auto" />
                  </div>
                  <div
                    className="justify-self-center flex items-center justify-center gap-8"
                    style={{
                      color: '#000',
                      textAlign: 'center',
                      fontFamily: 'Metamorphous',
                      fontSize: '16px',
                      fontStyle: 'normal',
                      fontWeight: 400,
                      lineHeight: 'normal'
                    }}
                  >
                    <a href="#contact" className="transition hover:text-gray-700 whitespace-nowrap leading-tight">Contact Us</a>
                    <a href="#media-press" className="transition hover:text-gray-700 whitespace-nowrap leading-tight">Media & Press</a>
                    <a href="#map-address" className="transition hover:text-gray-700 whitespace-nowrap leading-tight">Map / Address</a>
                  </div>
                  <div></div>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
                <h3 className="text-lg md:text-xl font-normal mb-4">General Inquiry</h3>
                <form className="space-y-3">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full bg-transparent border-b border-gray-300 focus:border-black outline-none py-2"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full bg-transparent border-b border-gray-300 focus:border-black outline-none py-2"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full bg-transparent border-b border-gray-300 focus:border-black outline-none py-2"
                  />
                  <input
                    type="text"
                    placeholder="Title"
                    className="w-full bg-transparent border-b border-gray-300 focus:border-black outline-none py-2"
                  />
                  <textarea
                    rows="3"
                    placeholder="Message"
                    className="w-full bg-transparent border-b border-gray-300 focus:border-black outline-none py-2 resize-none"
                  />
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="text-white px-4 py-1 rounded"
                      style={{ background: '#4D341E' }}
                    >
                      SEND MESSAGE
                    </button>
                  </div>
                </form>
              </div>

              <div className="mt-6 flex items-center space-x-4 flex-nowrap">
                <a href="#" aria-label="facebook" className="hover:opacity-75 transition">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22 12.06C22 6.48 17.52 2 11.94 2S2 6.48 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.41c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.23.2 2.23.2v2.45h-1.25c-1.23 0-1.61.76-1.61 1.54v1.86h2.74l-.44 2.91h-2.3V22c4.78-.76 8.44-4.92 8.44-9.94z"/>
                  </svg>
                </a>
                <a href="#" aria-label="instagram" className="hover:opacity-75 transition">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm5.5-.75a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z"/>
                  </svg>
                </a>
                <a href="#" aria-label="linkedin" className="hover:opacity-75 transition">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6.94 6.5a1.94 1.94 0 11-3.88 0 1.94 1.94 0 013.88 0zM3.5 8.5h3v12h-3v-12zm6 0h2.87v1.64h.04c.4-.76 1.37-1.56 2.83-1.56 3.03 0 3.59 1.99 3.59 4.58V20.5h-3v-5.35c0-1.27-.02-2.9-1.77-2.9-1.77 0-2.04 1.38-2.04 2.81v5.44h-3v-12z"/>
                  </svg>
                </a>
                <span className="text-sm whitespace-nowrap">
                  For direct contact, contact us at
                  {' '}<a href="mailto:wuttaya@gat.co.th" className="underline">wuttaya@gat.co.th</a>
                  {' '}or{' '}
                  <a href="mailto:info@siamesefilmart.com" className="underline">info@siamesefilmart.com</a>
                </span>
              </div>
            </div>

            <div className="space-y-3 mt-10 sm:mt-12 md:mt-16">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <iframe
                  title="map"
                  src="https://www.google.com/maps?q=19/117%20Kubon%2028,%20Ramintra,%20Kannayao,%20Bangkok%2010230&output=embed"
                  className="w-full h-64 md:h-[360px] border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <p className="text-sm leading-snug">
                19/117 Kubon 28, Ramintra, Kannayao, Bangkok 10230
              </p>
            </div>
          </div>

          <div className="mt-8 border-t border-black pt-4 flex flex-col md:flex-row md:items-center md:justify-between text-xs">
            <p>
              Copyright © 2025 GAT International Co., Ltd. All rights reserved.
            </p>
            <p className="mt-2 md:mt-0">
              Legal: <a className="underline" href="#">Terms</a> | <a className="underline" href="#">Privacy Policy</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;