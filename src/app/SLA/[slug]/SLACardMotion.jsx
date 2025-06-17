// components/SLACardMotion.jsx
'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const SLACardMotion = ({ card }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className='w-full bg-[#292F43]'
    >
      <h1 className='text-3xl sm:text-4xl md:text-5xl p-5 font-bold bg-[#B70AC1] text-[#FFFFFF] text-center mb-6'>
        {card.title}
      </h1>

      <div className='flex  p-5 flex-col md:flex-row md:space-x-6'>
        <div className='w-full md:w-1/2 mb-6 md:mb-0'>
          <p className='text-sm sm:text-base md:text-lg text-[#FFFFFF] leading-relaxed'>
            {card.paragraph}
          </p>
        </div>

        <div className='w-full md:w-1/2'>
          <div className='relative w-full h-[300px] md:h-[488px]'>
            <Image
              src={card.image}
              alt={card.heading}
              fill
              className='object-cover rounded-lg shadow-md'
            />
          </div>
        </div>
      </div>

      <div className='p-4'>
        <p className='text-sm sm:text-base md:text-lg text-[#FFFFFF] leading-relaxed mb-8'>
          {card.paragraph2}
        </p>
      </div>
    </motion.div>
  );
};

export default SLACardMotion;
