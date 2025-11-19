import React from 'react';
import casioLogo from '../../../assets/brands/casio.png';
import amazonLogo from '../../../assets/brands/amazon.png';
import moonstarLogo from '../../../assets/brands/moonstar.png';
import starPlusLogo from '../../../assets/brands/star.png';
import startpeopleLogo from '../../../assets/brands/start_people.png';
import randstadLogo from '../../../assets/brands/randstad.png';

const Brands = () => {
  const logos = [
    { name: 'Casio', imageUrl: casioLogo },
    { name: 'Amazon', imageUrl: amazonLogo },
    { name: 'Moonstar', imageUrl: moonstarLogo },
    { name: 'STAR+', imageUrl: starPlusLogo },
    { name: 'Startpeople', imageUrl: startpeopleLogo },
    { name: 'Randstad', imageUrl: randstadLogo },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl lg:text-5xl font-bold text-[#03373d] mb-6">
            We've helped thousands of sales teams
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-slate-50 via-blue-50 to-transparent z-20 pointer-events-none"></div>
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-cyan-50 via-blue-50 to-transparent z-20 pointer-events-none"></div>

          <div className="overflow-hidden mb-8">
            <div className="flex animate-marquee gap-16 py-6">
              {[...logos, ...logos, ...logos].map((logo, index) => (
                <div
                  key={`first-${index}`}
                  className="flex-shrink-0 flex items-center justify-center group"
                >
                  <div className="w-48 h-24 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl border border-gray-200/50 flex items-center justify-center p-6 transform group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-500">
                    <img
                      src={logo.imageUrl}
                      alt={`${logo.name} Logo`}
                      className="max-h-16 max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 opacity-80 group-hover:opacity-100"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden">
            <div className="flex animate-marquee-reverse gap-16 py-6">
              {[...logos, ...logos, ...logos].map((logo, index) => (
                <div
                  key={`second-${index}`}
                  className="flex-shrink-0 flex items-center justify-center group"
                >
                  <div className="w-48 h-24 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl border border-gray-200/50 flex items-center justify-center p-6 transform group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-500">
                    <img
                      src={logo.imageUrl}
                      alt={`${logo.name} Logo`}
                      className="max-h-16 max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 opacity-80 group-hover:opacity-100"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes marquee-reverse {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-marquee {
          animation: marquee 30s linear infinite;
          display: flex;
          width: max-content;
        }

        .animate-marquee-reverse {
          animation: marquee-reverse 35s linear infinite;
          display: flex;
          width: max-content;
        }

        /* Pause animation on hover */
        .animate-marquee:hover,
        .animate-marquee-reverse:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Brands;
