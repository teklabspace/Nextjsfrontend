'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

const logos = [
  { src: '/Group 15122.svg', alt: 'Logo 1' },
  { src: '/Group 15123.svg', alt: 'Intel' },
  { src: '/Group 15125.svg', alt: 'Green Arrow' },
  { src: '/Group 15126.svg', alt: 'GE' },
  { src: '/Group 15128.svg', alt: 'M' },
  { src: '/Group 15160.svg', alt: 'Adobe' },
  { src: '/Group 15161.svg', alt: 'Google' },
  { src: '/WindowaMicrosoft.svg', alt: 'Microsoft' },
  { src: '/Docker.svg', alt: 'Docker' },
  { src: '/Meta.svg', alt: 'Meta' },
];

const TrustedPartners = () => {
  const titleRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (titleRef.current) {
      titleRef.current.style.opacity = 0;
      titleRef.current.style.transform = 'translateY(20px)';
      setTimeout(() => {
        titleRef.current.style.transition =
          'opacity 1s ease, transform 1s ease';
        titleRef.current.style.opacity = 1;
        titleRef.current.style.transform = 'translateY(0)';
      }, 100);
    }
  }, []);

  // Animation variants for the marquee effect
  const marqueeVariants = {
    animate: {
      x: ['0%', '-100%'],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: 10, // Adjust speed of the animation
          ease: 'linear',
        },
      },
    },
  };

  return (
    <div className='bg-gradient-to-r md:-mt-70 md:z-10 from-[#B70AC1] via-[#292F43] to-[#292F43] py-10 text-center relative overflow-hidden'>
      <div className='absolute inset-0 bg-gradient-to-tr from-purple-700/20 via-indigo-800/10 to-transparent animate-pulse' />

      <h2
        ref={titleRef}
        className='relative z-10 inline-block text-white text-4xl font-bold border-b-4 border-[#7B2EA8] pb-3 mb-5 tracking-wide'
      >
        Trusted <span className='text-[#7B2EA8] font-extrabold'>Partners</span>
      </h2>

      <div
        className='relative mt-5 z-10 w-full overflow-hidden'
        ref={containerRef}
      >
        <motion.div
          className='flex gap-10 px-4'
          variants={marqueeVariants}
          animate='animate'
          style={{ display: 'inline-flex', whiteSpace: 'nowrap' }}
        >
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.15 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className='p-3 rounded-xl bg-white/5 backdrop-blur-sm hover:shadow-[0_0_30px_#7B2EA8] transition duration-300 flex-shrink-0'
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className='w-20 h-20 md:w-24 md:h-24 object-contain'
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default TrustedPartners;
