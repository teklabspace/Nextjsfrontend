'use client';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { useEffect } from 'react';

const generateRandomDots = count => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    top: Math.random() < 0.5 ? `${Math.floor(Math.random() * 80) + 10}%` : 'auto', // Added 10% padding
    bottom: Math.random() < 0.5 ? `${Math.floor(Math.random() * 80) + 10}%` : 'auto',
    left: Math.random() < 0.5 ? `${Math.floor(Math.random() * 80) + 10}%` : 'auto',
    right: Math.random() < 0.5 ? `${Math.floor(Math.random() * 80) + 10}%` : 'auto',
    bgColor: Math.random() < 0.5 ? '#D9D9D9' : '#B70AC1',
  }));
};

const randomDots = generateRandomDots(12);

const WhyTeklabspace = () => {
  useEffect(() => {
    // GSAP animation for entrance
    gsap.fromTo(
      '.card',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: 'power3.out' }
    );
  }, []);

  // Framer Motion hover animation
  const cardVariants = {
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  return (
    <>
      <div className='flex items-center bg-[#292F43] px-4 sm:px-6 lg:px-8 justify-center min-h-screen'>
        <div className='w-full relative py-8 sm:py-12'>
          {/* Random Dots - Hidden on Mobile */}
          <div className='absolute inset-0 hidden sm:block pointer-events-none z-0'> {/* Set z-0 to place dots below cards */}
            {randomDots.map(dot => (
              <div
                key={dot.id}
                className='w-[20px] h-[20px] rounded-full absolute'
                style={{
                  top: dot.top,
                  bottom: dot.bottom,
                  left: dot.left,
                  right: dot.right,
                  backgroundColor: dot.bgColor,
                }}
              />
            ))}
          </div>
          <h1 className='text-4xl font-bold text-[#292F43] text-center mb-6 sm:mb-8 lg:mb-12'>
            <span className='inline-block text-white border-b-2 border-[#FFFFFF] pb-2'>
              Why <span className='text-[#B70AC1]'>Teklabspace</span>
            </span>
          </h1>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-full sm:max-w-3xl lg:max-w-5xl mx-auto pt-4 sm:pt-8 relative z-10'> {/* Set z-10 for cards */}
            {/* First Column - Secure Collaboration */}
            <div className='flex justify-center'>
              <motion.div
                className='card bg-[#FFFFFF] rounded-2xl p-4 text-center flex flex-col items-center md:w-[254px] md:h-[283px] lg:mt-52'
                variants={cardVariants}
                whileHover='hover'
                style={{ boxShadow: '1px 20px 13.6px 0 rgba(0, 0, 0, 0.3)' }}
              >
                <div className='w-14 mt-10 sm:w-16 h-14 sm:h-16 flex items-center justify-center mb-3 sm:mb-4'>
                  <img src='Lock.svg' alt='Secure Collaboration Icon' />
                </div>
                <h2 className='text-base text-[#B70AC1] font-bold mb-2'>
                  Secure Collaboration
                </h2>
                <p className='text-base'>
                  Submit, track, and resolve vulnerabilities in a controlled,
                  transparent environment.
                </p>
              </motion.div>
            </div>

            {/* Second Column - Elite Researcher Network (Top Right on Tablet) */}
            <div className='flex justify-center lg:col-start-2 lg:row-start-1'>
              <motion.div
                className='card bg-[#FFFFFF] rounded-lg p-3 text-center text-white flex flex-col items-center w-full md:w-[254px] md:h-[283px]'
                style={{ boxShadow: '1px 20px 13.6px 0 rgba(0, 0, 0, 0.3)' }}
                variants={cardVariants}
                whileHover='hover'
              >
                <img
                  src='Group 15124.svg'
                  alt='Elite Researcher Network Icon'
                  className='mb-3 sm:mb-4 mt-10'
                />
                <h2 className='text-base text-[#B70AC1] font-bold mb-2'>
                  Elite Researcher Network
                </h2>
                <p className='text-base text-[#292F43]'>
                  Tap into a vetted, global community of ethical hackers.
                </p>
              </motion.div>
            </div>

            {/* Third Column - AI-Powered Insights (Bottom Right on Tablet) */}
            <div className='flex justify-center sm:col-start-2 sm:row-start-2 lg:col-start-2 lg:row-start-2'>
              <motion.div
                className='card bg-[#FFFFFF] rounded-lg p-4 text-center text-white flex flex-col items-center md:w-[254px] md:h-[263px]'
                style={{ boxShadow: '1px 20px 13.6px 0 rgba(0, 0, 0, 0.3)' }}
                variants={cardVariants}
                whileHover='hover'
              >
                <div className='w-14 mt-6 sm:w-16 h-14 sm:h-16 bg-white rounded-full flex items-center justify-center mb-3 sm:mb-4'>
                  <img src='Group 15133.svg' alt='' />
                </div>
                <h2 className='text-base text-[#B70AC1] font-bold mb-2'>
                  Continuous Coverage
                </h2>
                <p className='text-base text-[#292F43]'>
                  Move beyond point-in-time tests with always-on security from
                  those who know threats best.
                </p>
              </motion.div>
            </div>

            {/* Fourth Column - Continuous Coverage (Bottom Left on Tablet) */}
            <div className='flex justify-center sm:col-start-1 sm:row-start-2 lg:col-start-3 lg:row-start-1'>
              <motion.div
                className='card bg-[#FFFFFF] rounded-lg p-4 text-center text-white flex flex-col items-center md:w-[254px] md:h-[283px] lg:mt-52'
                style={{ boxShadow: '1px 20px 13.6px 0 rgba(0, 0, 0, 0.3)' }}
                variants={cardVariants}
                whileHover='hover'
              >
                <div className='w-14 mt-10 sm:w-16 h-14 sm:h-16 bg-white rounded-full flex items-center justify-center mb-3 sm:mb-4'>
                  <img src='Group 15137.svg' alt='' />
                </div>
                <h2 className='text-base text-[#B70AC1] font-bold mb-2'>
                  Continuous Coverage
                </h2>
                <p className='text-base text-[#292F43]'>
                  Move beyond point-in-time tests with always-on security from
                  those who know threats best.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyTeklabspace;