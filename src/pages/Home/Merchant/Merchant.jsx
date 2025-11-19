import React from 'react';
import BannerIllustration from '../../../assets/location-merchant.png';

const Merchant = () => {
  const primaryTextColor = 'text-white';
  const secondaryTextColor = 'text-gray-300';
  const merchantBtnColor = 'bg-[#C1E750]'; // Lime green for "Become a Merchant"
  const courierBtnBorder = 'border-2 border-white'; // White border

  return (
    <section className="py-10 bg-[#19404B] w-full">
      {' '}
      {/* Full width background */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Card Container */}
        <div className="p-8 md:p-12 lg:p-16 rounded-2xl bg-[#19404B] shadow-2xl relative overflow-hidden">
          {/* Subtle Graphic Lines */}
          <div className="absolute top-0 left-0 w-full h-full opacity-40 mix-blend-screen">
            <svg
              className="absolute top-0 left-0 w-full h-full"
              viewBox="0 0 1000 400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M-100 100C100 -50 400 50 600 0L600 300C400 350 100 250 -100 300L-100 100Z"
                fill="url(#waveGradient)"
              />
              <defs>
                <linearGradient
                  id="waveGradient"
                  x1="0"
                  y1="0"
                  x2="1000"
                  y2="400"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#37707E" stopOpacity="0.8" />
                  <stop offset="1" stopColor="#00A7D9" stopOpacity="0.4" />
                </linearGradient>
              </defs>
              <path
                d="M-100 50C100 10 300 200 600 100L600 350C400 400 100 300 -100 350L-100 50Z"
                stroke="#00A7D9"
                strokeWidth="2"
                strokeOpacity="0.2"
              />
            </svg>
          </div>

          {/* Content Grid */}
          <div className="flex flex-col md:flex-row items-center relative z-10">
            {/* Text and Buttons (Left Side) */}
            <div className="md:w-3/5 w-full text-center md:text-left md:pr-10 mb-8 md:mb-0">
              <h2
                className={`text-4xl md:text-5xl font-bold ${primaryTextColor} mb-6 leading-tight`}
              >
                Merchant and Customer Satisfaction is Our First Priority
              </h2>

              <p
                className={`text-lg ${secondaryTextColor} mb-10 max-w-lg md:max-w-none`}
              >
                We offer the lowest delivery charge with the highest value along
                with <strong>100% safety of your product</strong>. Pathao
                courier delivers your parcels in every corner of Bangladesh
                right on time.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <button
                  className={`px-8 py-3 rounded-xl font-semibold text-lg text-gray-900 ${merchantBtnColor} shadow-lg transition-transform duration-300 hover:scale-[1.02]`}
                >
                  Become a Merchant
                </button>

                <button
                  className={`px-8 py-3 rounded-xl font-semibold text-lg ${primaryTextColor} ${courierBtnBorder} transition-colors duration-300 hover:bg-white hover:text-gray-900`}
                >
                  Earn with ZapShift Courier
                </button>
              </div>
            </div>

            {/* Illustration (Right Side) */}
            <div className="md:w-2/5 w-full flex justify-center md:justify-end">
              <img
                src={BannerIllustration}
                alt="Merchant Illustration"
                className="w-full max-w-[400px] object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Merchant;
