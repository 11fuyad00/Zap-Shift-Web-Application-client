import React from 'react';
import LiveTrackingImage from '../../../assets/live-tracking.png';
import SafeDeliveryImage from '../../../assets/safe-delivery.png';
import CallCenterImage from '../../../assets/safe-delivery.png';

const FeaturesSection = () => {
  const features = [
    {
      id: 1,
      title: 'Live Parcel Tracking',
      description:
        'Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment’s journey and get instant status updates for complete peace of mind.',
      image: LiveTrackingImage,
    },
    {
      id: 2,
      title: '100% Safe Delivery',
      description:
        'We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.',
      image: SafeDeliveryImage,
    },
    {
      id: 3,
      title: '24/7 Call Center Support',
      description:
        'Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.',
      image: CallCenterImage,
    },
  ];

  const sectionBgColor = 'bg-[#F4F9FA]';
  const cardBgColor = 'bg-white';
  const cardBorderColor = 'border-[#E0E7FF]';

  return (
    <section className={`py-12 md:py-16 ${sectionBgColor}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          {features.map(feature => (
            <div
              key={feature.id}
              className={`flex flex-col md:flex-row items-center p-8 md:p-10 ${cardBgColor} rounded-xl shadow-sm border border-opacity-70 ${cardBorderColor}`}
            >
              <div className="flex-shrink-0 w-full md:w-1/3 mb-6 md:mb-0 md:pr-8 flex justify-center">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full max-w-[180px] object-contain"
                />
              </div>

              <div className="w-full md:w-2/3">
                <h3 className="text-xl font-bold text-gray-800 mb-3 text-center md:text-left">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed text-center md:text-left">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
