import React from 'react';

const HowItWorks = () => {
  const features = [
    {
      id: 1,
      title: 'Booking Pick & Drop',
      description:
        'From personal packages to business shipments — we deliver on time, every time.',
      icon: '📦',
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-50 to-cyan-50',
      borderColor: 'border-blue-200',
      delay: '0',
    },
    {
      id: 2,
      title: 'Cash On Delivery',
      description:
        'From personal packages to business shipments — we deliver on time, every time.',
      icon: '💰',
      gradient: 'from-green-500 to-emerald-500',
      bgGradient: 'from-green-50 to-emerald-50',
      borderColor: 'border-green-200',
      delay: '200',
    },
    {
      id: 3,
      title: 'Delivery Hub',
      description:
        'From personal packages to business shipments — we deliver on time, every time.',
      icon: '🚚',
      gradient: 'from-orange-500 to-red-500',
      bgGradient: 'from-orange-50 to-red-50',
      borderColor: 'border-orange-200',
      delay: '400',
    },
    {
      id: 4,
      title: 'Booking SME & Corporate',
      description:
        'From personal packages to business shipments — we deliver on time, every time.',
      icon: '🏢',
      gradient: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-50 to-pink-50',
      borderColor: 'border-purple-200',
      delay: '600',
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute -top-20 -left-20 w-60 h-60 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute -top-10 -right-10 w-60 h-60 bg-cyan-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-20 left-1/2 w-60 h-60 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Simple, fast, and reliable delivery process designed for your
            convenience
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#CAEB66] to-cyan-500 rounded-full mx-auto mt-6"></div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map(feature => (
            <div key={feature.id} className="relative group">
              {/* Animated Card */}
              <div
                className={`bg-white rounded-2xl p-6 shadow-lg border ${feature.borderColor} transform group-hover:scale-105 group-hover:shadow-2xl transition-all duration-500 animate-slide-up`}
                style={{ animationDelay: `${feature.delay}ms` }}
              >
                {/* Icon Container */}
                <div
                  className={`w-20 h-20 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 transform group-hover:rotate-12 transition-transform duration-500 shadow-lg mx-auto`}
                >
                  <span className="text-3xl">{feature.icon}</span>
                </div>

                {/* Step Number */}
                <div
                  className={`absolute -top-3 -left-3 w-8 h-8 bg-gradient-to-r ${feature.gradient} rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg`}
                >
                  {feature.id}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-800 mb-4 text-center group-hover:text-gray-900 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {feature.description}
                </p>

                {/* Hover Effect Line */}
                <div
                  className={`w-0 h-1 bg-gradient-to-r ${feature.gradient} rounded-full mt-4 mx-auto transition-all duration-500 group-hover:w-full`}
                ></div>

                {/* Floating Elements */}
                <div
                  className={`absolute -z-10 top-2 right-2 w-6 h-6 bg-gradient-to-r ${feature.gradient} rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                ></div>
                <div
                  className={`absolute -z-10 bottom-2 left-2 w-4 h-4 bg-gradient-to-r ${feature.gradient} rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                ></div>
              </div>

              {/* Connector Lines for Desktop */}
              {feature.id < 4 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-gray-300 to-gray-200 transform translate-y-4">
                  <div className="w-3 h-3 bg-[#CAEB66] rounded-full absolute -top-1 -right-1 animate-pulse"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <button className="bg-[#CAEB66] text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#d5f075] transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center mx-auto space-x-2">
            <span>Get Started Today</span>
            <span className="text-xl">🚀</span>
          </button>
        </div>
      </div>

      {/* Custom Animations */}
      <style>{`
        @keyframes slide-up {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes pulse {
          0%,
          100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.5;
          }
        }
        .animate-slide-up {
          animation: slide-up 0.6s ease-out forwards;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default HowItWorks;
