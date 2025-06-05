'use client';
import { motion } from 'framer-motion';

const cards = [
  {
    icon: '/user.svg',
    title: 'Strength in Numbers',
    description:
      'Leverage a diverse and dynamic global researcher community to uncover critical issues missed by scanners and automated tools—without slowing down innovation.',
  },
  {
    icon: '/Group 3589.svg',
    title: 'Insight-Driven Management',
    description:
      'Easily configure scope, bounties, and rules of engagement while receiving data-driven guidance and insights to strengthen your defenses.',
  },
  {
    icon: '/Always.svg',
    title: 'Always-On Protection',
    description:
      'Integrate effortlessly into your CI/CD and DevSecOps pipelines—ensuring continuous, scalable testing and fast remediation.',
  },
  {
    icon: '/Elite.svg',
    title: 'Elite Security Researchers',
    description:
      'Collaborate with vetted security researchers from around the world who bring deep expertise and fresh perspectives to your security program.',
  },
];

const platformHighlights = () => {
  return (
    <div className='py-20 px-4 md:px-12 bg-white'>
      <div className=' relative text-center mb-12'>
        <h2 className='text-4xl border-b-2 border-[#292F43] inline-block font-bold text-[#B70AC1] mb-0 pb-2'>
          Platform Highlights
        </h2>

        <div className='absolute -top-20 hidden md:block md:right-0 w-[200px] h-[200px] bg-[#B70AC1] opacity-50 blur-[80px] z-0'></div>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
        {cards.map((card, idx) => (
          <motion.div
            key={idx}
            className='card  bg-[#292F43] rounded-xl p-6 text-white'
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className='flex justify-center items-center text-purple-400 text-3xl mb-4'>
              {card.icon.endsWith('.svg') ? (
                <img src={card.icon} alt={card.title} className='' />
              ) : (
                <span>{card.icon}</span>
              )}
            </div>

            <h3 className='text-lg font-semibold text-[#F886FF] mb-2'>
              {card.title}
            </h3>
            <p className='text-sm text-[#FFFFFF] leading-relaxed'>
              {card.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default platformHighlights;
