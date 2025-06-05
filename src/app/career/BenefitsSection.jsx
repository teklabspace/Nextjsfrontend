'use client';

import Image from 'next/image';
import { useState } from 'react';

const benefits = [
  {
    icon: '/Group 15154.svg', // Default icon for inactive state
    activeIcon: '/Group 15155.svg', // Active icon (e.g., white or filled version)
    title: 'Work with the best',
    description:
      'You help shape the future of the platform, bringing your own flare and skill set to our world-class team.',
  },
  {
    icon: '/Group 15158.svg',
    activeIcon: '/Group 15157.svg',
    title: 'Excellent benefits',
    description:
      'Benefits of being part of the team will include attendance of conferences, full access to the Teklabspace offerings and flexibility in working hours.',
  },
  {
    icon: '/Group 15159.svg',
    activeIcon: '/Group 15166.svg',
    title: 'Experience over education',
    description:
      'We understand that not everyone given the opportunity of getting a university degree. We are always looking applicants who are eager to better themselves.',
  },
  {
    icon: '/Group 15162.svg',
    activeIcon: '/Group 151437.svg',
    title: 'Work with latest technology',
    description:
      'We make sure you have the tools and infrastructure you need to get the job right.',
  },
];

const BenefitsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className='py-12 px-4 sm:px-6 md:px-10 bg-white'>
      <h2 className='text-3xl md:text-4xl font-bold text-[#292F43] text-center mb-10'>
        Benefits
      </h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto'>
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className={`flex flex-col items-center text-center px-6 py-4 rounded-lg shadow-md transition-all duration-300 ${
              activeIndex === index
                ? 'bg-[#B70AC1] text-white'
                : 'bg-white text-[#292F43]'
            }`}
            style={{ boxShadow: '1px 20px 13.6px 0 rgba(0, 0, 0, 0.3)' }}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
          >
            <div className='w-16 h-16 mb-4 relative'>
              <Image
                src={activeIndex === index ? benefit.activeIcon : benefit.icon}
                alt={`${benefit.title} icon`}
                fill
                className='object-contain'
              />
            </div>
            <h3 className='text-lg sm:text-xl font-semibold mb-3'>
              {benefit.title}
            </h3>
            <p className='text-sm sm:text-base'>{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BenefitsSection;
