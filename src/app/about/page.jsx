'use client';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { motion, useInView } from 'framer-motion';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import MetaTags from '../../components/MetaTags.js';
import TeamMembers from './TeamMembers.jsx';

const values = [
  {
    title: 'Reliability',
    desc: 'We deliver professional and world class service. leverage on our compitency pool from ethical hackers with reputable track records with speed in delivery and at a very competitive afordable cost',
    icon: '/Frame.svg',
  },
  {
    title: 'Commitment',
    desc: 'To be Africa #1 ethical hacking and bug bounty platform, that will help organizations improve their security posture, identify threats quickly and also assist to protect their digital assets',
    icon: '/Frame2.svg',
  },
  {
    title: 'Integrity',
    desc: 'Hear what our partners and customers are talking about us on how our platform provides an easy and friendly platform enviroment with trust.',
    icon: '/Frame3.svg',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

export default function AboutPage() {
  const orgRef = useRef(null);
  const isInView = useInView(orgRef, { once: true, amount: 0.3 });

  useEffect(() => {
    if (isInView && orgRef.current) {
      gsap.fromTo(
        orgRef.current,
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
      );
    }
  }, [isInView]);

  return (
    <section>
      <MetaTags page='about' />
      <Navbar />

      {/* Hero Section */}
      <section
        className='bg-white w-full h-100 flex justify-center items-center bg-no-repeat bg-center'
        style={{ backgroundImage: "url('/Aboutpage.png')" }}
      >
        <div className='text-center px-4 sm:px-6 md:px-10 max-w-7xl w-full'>
          <h1 className='text-[#292F43] text-2xl sm:text-3xl md:text-5xl font-bold mb-6'>
            About Us
          </h1>
          <p className='text-[#B70AC1] text-sm sm:text-base md:text-lg'>
            Get to know what inspires us, our core values, and our Team
          </p>
        </div>
      </section>

      {/* Inspire & Organization Section */}
      <section className='bg-[#292F43] text-white mx-4 sm:mx-6 md:mx-8 px-6 py-12 sm:py-16'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-2 items-center'>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className='space-y-4'
          >
            <h2 className='text-xl sm:text-3xl font-semibold'>
              What <span className='text-[#c74aff]'>inspires</span> us
            </h2>
            <p className='text-xs sm:text-base text-gray-300'>
              As technologies transcend and agile solution development
              implements changes at blistering speeds, new threats and
              vulnerabilities arise at the same pace. The ever-changing
              cybersecurity landscape requires reliable and continuous risk
              detection methods and strategies to be effective in the technology
              ecosystem. The protection of digital assets is a common concern as
              it affects all organizations and is not a battle we are supposed
              to fight alone.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src='https://fullego.com/abt us.gif'
              alt='Inspire'
              className='w-full max-w-sm mx-auto rounded-lg'
            />
          </motion.div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-16'>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1 }}
          >
            <img
              src='https://fullego.com/abt us2.gif'
              alt='Organizations'
              className='w-full max-w-sm mx-auto rounded-lg'
            />
          </motion.div>
          <motion.div ref={orgRef} className='space-y-4'>
            <h2 className='text-xl sm:text-3xl font-semibold'>
              For <span className='text-[#c74aff]'>Organizations</span>
            </h2>
            <p className='text-xs sm:text-base text-gray-300'>
              Our platform enables organizational businesses to effectively
              implement DevSecOps which refers to continuous applications and
              systems security testing for numerous assets, with the assistance
              of a scalable custom crowd of security researchers that fits the
              needs. Reporting is done in a secure and structured way,
              generating actionable data that can be seamlessly implemented in
              development cycles. Incoming testing results are validated by a
              team of security professionals that help throughout the journey
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className='bg-white text-center py-12 sm:py-16 px-4 sm:px-6'>
        <h2 className='text-2xl sm:text-4xl font-bold text-gray-800 mb-8 sm:mb-10'>
          Values
        </h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto'>
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              custom={i}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              className='bg-white p-4 sm:p-6 hover:scale-105 transition-all'
            >
              <div className='mb-4 flex justify-center'>
                <img
                  src={value.icon}
                  alt={value.title}
                  className='w-16 h-16 object-contain'
                />
              </div>
              <h3 className='text-lg sm:text-2xl font-semibold mb-2 text-[#151525]'>
                {value.title}
              </h3>
              <p className='text-xs sm:text-base text-gray-600'>{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <TeamMembers />

      <Footer />
    </section>
  );
}
