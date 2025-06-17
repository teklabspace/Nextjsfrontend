'use client';


import Footer from '@/components/Footer';
import MetaTags from '@/components/MetaTags';
import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';
import Link from 'next/link';
import cards from './data.js';

const SLA = () => {
  return (
    <div>
      <MetaTags page='sla' />

      <Navbar />

      <section className='py-30 px-4 sm:px-6 md:px-10 bg-white'>
        <h2 className='text-3xl md:text-4xl font-bold text-[#292F43] text-center '>
          SERVICE <span className='text-[#B70AC1]'>LEVEL</span> AGREEMENT
        </h2>
        <p className='text-center text-sm sm:text-base text-[#B70AC1] mt-4 mb-6'>
          To ensure that we serve you better, we created our code of conduct.
          <br />
          Kindly read through and agree before sign up to our services.
        </p>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto'>
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className='bg-white bg-opacity-70 backdrop-blur-md rounded-lg shadow-md border-gray-200 hover:bg-opacity-90 transition-all duration-300'
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className='text-lg sm:text-xl font-semibold bg-[#292F43] text-white py-3 border-t-4 border-white rounded-t-lg mb-3 text-center'>
                {card.title}
              </h3>
              <p className='text-sm px-3 sm:text-base text-[#292F43] text-start leading-relaxed'>
                {card.description}
              </p>
              <div className='my-4  px-3 text-start'>
                <Link
                  href={`/SLA/${card.route}`}
                  className='text-[#B70AC1] hover:underline'
                >
                  {card.link}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default SLA;
