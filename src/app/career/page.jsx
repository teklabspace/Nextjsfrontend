'use client';

import Footer from '@/components/Footer';
import MetaTags from '@/components/MetaTags';
import Navbar from '@/components/Navbar';
import { useInView } from 'framer-motion';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import BenefitsSection from './BenefitsSection.jsx';
import OpeningsSection from './OpeningsSection.jsx';
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
      <MetaTags page='career' />

      <Navbar />

      {/* Hero Section */}
      <section
        className='w-full min-h-screen flex flex-col justify-center items-center bg-no-repeat bg-center bg-cover'
        style={{ backgroundImage: "url('/carrersbg.png')" }}
      >
        <div className='text-center mt-30 px-4 sm:px-6 md:px-10 max-w-7xl w-full mb-8'>
          <h1 className='text-[#FFFFFF] text-2xl sm:text-3xl md:text-4xl  font-bold mb-6'>
            CAREERS
          </h1>
          <p className='text-[#292F43] text-sm sm:text-base  max-w-2xl mx-auto'>
            Get to know what inspires us, our core values and our Team
          </p>
        </div>

        {/* Content Grid */}
        <div
          ref={orgRef}
          className='grid grid-cols-1 md:grid-cols-2 gap-6 px-4 sm:px-6 md:px-10 max-w-7xl w-full mb-12'
        >
          <div className='flex flex-col justify-center'>
            <h2 className='text-[#FFFFFF] text-xl sm:text-2xl md:text-4xl font-semibold mb-4'>
              Join Our Amazing Team
            </h2>
            <p className='text-[#292F43] text-sm sm:text-base'>
              At Teklabspace, we're always on the lookout for talented, driven,
              and passionate individuals who are eager to make an impact in the
              world of security and technology. If you thrive in innovative
              environments, love tackling real-world challenges, and want to be
              part of a team that's shaping the future of digital security, then
              Teklabspace might be the perfect place for you. We offer more than
              just jobs — we offer careers where your growth, creativity, and
              contributions truly matter. Whether you’re an experienced
              professional or just starting out, we believe in empowering our
              team members to think big, collaborate freely, and build
              meaningful solutions that make a difference.
            </p>
          </div>
          <div className='flex justify-center items-center'>
            <div className='relative w-full max-w-[300px] sm:max-w-[400px] aspect-square'>
              <img
                src='https://fullego.com/3.gif'
                alt='Team illustration'
                className='w-full h-full object-contain'
              />
            </div>
          </div>
        </div>
      </section>
      {/* Benefits Section */}
      <BenefitsSection />

      {/* Openings Section */}
      <OpeningsSection />
      <Footer />
    </section>
  );
}
