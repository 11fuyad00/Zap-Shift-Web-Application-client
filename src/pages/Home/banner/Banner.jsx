import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import bannerImg1 from '../../../assets/banner/banner1.png';
import bannerImg2 from '../../../assets/banner/banner2.png';
import bannerImg3 from '../../../assets/banner/banner3.png';

const Banner = () => {
  return (
    <div className="relative">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={3000}
        transitionTime={500}
        stopOnHover={false}
        swipeable
        className="rounded-xl overflow-hidden shadow-2xl"
      >
        {/* Slide 1 */}
        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
          <img
            src={bannerImg1}
            alt="Banner 1"
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent flex items-start justify-start pt-12 sm:pt-20 md:pt-28 ">
            <div className="text-white ml-4 sm:ml-10 md:ml-20">
              <div className="flex flex-col sm:flex-row gap-3">
                <button className="bg-[#CAEB66] text-gray-900 px-6 py-2 sm:px-8 sm:py-3 rounded-lg font-semibold hover:bg-[#d5f075] transform hover:scale-105 transition-all duration-300 shadow-lg translate-y-100">
                  Track Your Parcel
                </button>
                <button className="bg-white text-gray-900 px-6 py-2 sm:px-8 sm:py-3 rounded-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg translate-y-100">
                  Be A Rider
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
          <img
            src={bannerImg2}
            alt="Banner 2"
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent flex items-center justify-start">
            <div className="text-white ml-4 sm:ml-10 md:ml-20 max-w-md">
              <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4 animate-slide-in">
                Lightning Fast
              </h2>
              <p className="text-sm sm:text-lg md:text-xl mb-4 lg:mb-6">
                Your deliveries, at the speed of light
              </p>
              <button className="bg-[#CAEB66] text-gray-900 px-6 py-2 sm:px-8 sm:py-3 rounded-lg font-semibold hover:bg-[#d5f075] transform hover:scale-105 transition-all duration-300">
                Get Started
              </button>
            </div>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
          <img
            src={bannerImg3}
            alt="Banner 3"
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-black/50 to-transparent flex items-center justify-end">
            <div className="text-white mr-4 sm:mr-10 md:mr-20 max-w-md text-right">
              <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4 animate-slide-in-right">
                24/7 Service
              </h2>
              <p className="text-sm sm:text-lg md:text-xl mb-4 lg:mb-6">
                Always there when you need us
              </p>
              <button className="bg-white text-gray-900 px-6 py-2 sm:px-8 sm:py-3 rounded-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </Carousel>

      {/* Animations */}
      <style>{`
        @keyframes fade-in {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-in {
          0% { opacity: 0; transform: translateX(-50px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes slide-in-right {
          0% { opacity: 0; transform: translateX(50px); }
          100% { opacity: 1; transform: translateX(0); }
        }

        .animate-fade-in { animation: fade-in 1s ease-out; }
        .animate-slide-in { animation: slide-in 1s ease-out; }
        .animate-slide-in-right { animation: slide-in-right 1s ease-out; }

        .carousel .control-dots .dot {
          background: white;
          width: 12px;
          height: 12px;
          margin: 0 6px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.3);
        }

        .carousel .control-dots .dot.selected {
          background: #caeb66;
          transform: scale(1.2);
        }
      `}</style>
    </div>
  );
};

export default Banner;
