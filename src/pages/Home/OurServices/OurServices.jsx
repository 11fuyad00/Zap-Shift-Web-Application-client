import React from 'react';
import serviceImg from '../../../assets/service.png';

const OurServices = () => {
  const services = [
    {
      id: 1,
      title: 'Express & Standard Delivery',
      description:
        'We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.',

      iconUrl: '',
      bgColor: 'bg-white',
      highlighted: false,
    },
    {
      id: 2,
      title: 'Nationwide Delivery',
      description:
        'We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.',
      iconUrl: '',
      bgColor: 'bg-[#CAEB66]',
      highlighted: true,
    },
    {
      id: 3,
      title: 'Fulfillment Solution',
      description:
        'We also offer customized service with inventory management support, online order processing, packaging, and after sales support.',
      iconUrl: '',
      bgColor: 'bg-white',
      highlighted: false,
    },
    {
      id: 4,
      title: 'Cash on Home Delivery',
      description:
        '100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.',
      iconUrl: '',
      bgColor: 'bg-white',
      highlighted: false,
    },
    {
      id: 5,
      title: 'Corporate Service / Contract In Logistics',
      description:
        'Customized corporate services which includes warehouse and inventory management support.',
      iconUrl: '',
      bgColor: 'bg-white',
      highlighted: false,
    },
    {
      id: 6,
      title: 'Parcel Return',
      description:
        'Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.',
      iconUrl: '',
      bgColor: 'bg-white',
      highlighted: false,
    },
  ];

  const mainBgColor = 'bg-[#0F424E]';
  const headingColor = 'text-white';
  const subtextColor = 'text-gray-300';
  const cardTitleColor = 'text-gray-900';
  const cardDescriptionColor = 'text-gray-600';

  return (
    <section className={`py-20 ${mainBgColor}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold ${headingColor} mb-4`}>
            Our Services
          </h2>
          <p
            className={`text-base ${subtextColor} max-w-3xl mx-auto leading-relaxed`}
          >
            Enjoy fast, reliable parcel delivery, with real-time tracking and
            zero hassle. From personal packages to business shipments — we
            deliver on time, every time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(service => (
            <div
              key={service.id}
              className={`rounded-2xl p-6 shadow-xl h-full transition-all duration-300 ${
                service.bgColor
              } 
              ${service.highlighted ? 'shadow-xl' : 'shadow-md'} 
              ${service.highlighted ? 'border-2 border-green-500' : ''}
              `}
            >
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-3xl">
                  <img src={serviceImg} alt="" />
                </span>
              </div>

              <h3
                className={`text-xl font-semibold ${cardTitleColor} mb-3 text-center`}
              >
                {service.title}
              </h3>

              <p
                className={`text-sm ${cardDescriptionColor} text-center leading-relaxed`}
              >
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
