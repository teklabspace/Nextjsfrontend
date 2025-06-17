'use client';

import MetaTags from '@/components/MetaTags';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Company() {
  const router = useRouter();

  useEffect(() => {
    gsap.from('.card', {
      opacity: 100,
      y: 50,
      duration: 1,
      stagger: 0.2,
    });
  }, []);

  return (
    <main className='bg-[#FFFFFF] text-white min-h-screen'>
      <MetaTags page='company' />

      {/* Hero Section */}
      <section
        className='relative w-full min-h-[90vh] bg-cover bg-center flex items-center justify-center px-4 md:px-10'
        style={{ backgroundImage: "url('/Group 15144.png')" }}
      >
        <div className='absolute inset-0 bg-black/60' /> {/* Dark overlay */}
        <div className='relative z-10 text-center max-w-4xl space-y-6 py-30'>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className='text-4xl font-bold leading-tight'
          >
            HARNESS THE <span className='text-fuchsia-500'>POWER OF CROWD</span>{' '}
            SOURCE
          </motion.h1>

          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1 }}
            className='flex justify-center'
          >
            <img
              src='https://fullego.com/Electric-quantity-unscreen.gif'
              alt='Hero Icon'
              className='w-28 sm:w-36 md:w-40 lg:w-92 object-contain mx-auto'
            />
          </motion.div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            className='bg-white cursor-pointer text-[#B70AC1] font-semibold px-6 py-3 rounded-full shadow'
            onClick={() => router.push(`/researcher`)}
          >
            How it works
          </motion.button>
        </div>
      </section>

      {/* Cards Section */}
      <section className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 px-4 md:px-12 pb-16'>
        <motion.div className='card bg-[#292F43]  rounded-xl shadow-lg space-y-4 hover:shadow-xl transition-shadow duration-300'>
          <img
            src='https://fullego.com/company1.gif'
            className=' rounded-xl h-[321px] w-full'
            alt=''
          />

          <h2 className='text-lg sm:text-xl px-3 font-semibold'>
            ACT NOW TO <span className='text-[#B70AC1]'> STAY </span> AHEAD OF
            THREATS
          </h2>
          <p className='text-base text-[#FFFFFF] px-3'>
            <span className='text-base'>
              {' '}
              Secure your systems before it’s too late.
            </span>{' '}
            <br />
            Teklabspace products and services enhance your security efforts to
            keep your valuable data safe from those looking to steal your
            assets, tarnish your brand, and undermine your customers’ trust.
            It’s easy to get started, whether you’re a security team of one or
            you need pinpoint expertise to enhance{' '}
            <span className='text-[#B70AC1] underline'> Read More </span>
          </p>
          <button
            className='bg-[#B70AC1] cursor-pointer  text-white py-2 px-6 mx-3 mb-6 rounded-full'
            onClick={() => router.push(`/researcher`)}
          >
            How it works
          </button>
        </motion.div>{' '}
        <motion.div className='card bg-[#292F43]  rounded-xl shadow-lg space-y-4 hover:shadow-xl transition-shadow duration-300'>
          <img
            src='https://fullego.com/company2.gif'
            className=' rounded-xl h-[321px] w-full'
            alt=''
          />

          <h2 className='text-lg sm:text-xl px-3 font-semibold'>
            TEKLAB<span className='text-[#B70AC1]'>SPACE</span> VDP
          </h2>
          <p className='text-base text-[#FFFFFF] px-3'>
            <span className='text-base'>
              {' '}
              Respond Quickly To Security Flaws{' '}
            </span>{' '}
            <br />
            Every organization should welcome the assistance of individuals
            seeking to point out potential vulnerabilities. A Vulnerability
            Disclosure Policy (VDP) provides clear guidelines to hackers and
            researchers for reporting vulnerabilities. It's also a best practice
            and a regulatory expectation.
            <span className='text-[#B70AC1] underline'> Read More </span>
          </p>
          <button
            className='bg-[#B70AC1] cursor-pointer   text-white py-2 px-6 mx-3 mb-6 rounded-full'
            onClick={() => router.push(`/researcher`)}
          >
            How it works
          </button>
        </motion.div>{' '}
        <motion.div className='card bg-[#292F43]  rounded-xl shadow-lg space-y-4 hover:shadow-xl transition-shadow duration-300'>
          <img
            src='https://fullego.com/company3.gif'
            className=' rounded-xl h-[321px] w-full'
            alt=''
          />

          <h2 className='text-lg sm:text-xl px-3 font-semibold'>
            TEKLAB<span className='text-[#B70AC1]'>SPACE</span> BOUNTY
          </h2>
          <p className='text-base text-[#FFFFFF] px-3'>
            <span className='text-base'>
              {' '}
              Award Bounties for continues avarge
            </span>{' '}
            <br />
            Bug bounty programs give ethical hackers an incentive to test your
            organization’s security. They leverage the talent, creativity,
            experience, and continuous efforts of these hackers to search for
            potential vulnerabilities in pinpoint areas or across broad attack
            surfaces.
            <span className='text-[#B70AC1] underline'> Read More </span>
          </p>
          <button
            className='bg-[#B70AC1]  cursor-pointer text-white py-2 px-6 mx-3 mb-6 rounded-full'
            onClick={() => router.push(`/researcher`)}
          >
            How it works
          </button>
        </motion.div>
        <motion.div className='card bg-[#292F43]  rounded-xl shadow-lg space-y-4 hover:shadow-xl transition-shadow duration-300'>
          <img
            src='https://fullego.com/company4.gif'
            className=' rounded-xl h-[321px] w-full'
            alt=''
          />

          <h2 className='text-lg sm:text-xl px-3 font-semibold'>
            TEKLABSPACE <span className='text-[#B70AC1]'>FACE</span>{' '}
            VERIFICATION
          </h2>
          <p className='text-base text-[#FFFFFF] px-3'>
            <span className='text-base'>
              Secure Identity, Seamlessly Facial{' '}
            </span>{' '}
            <br />
            verification is a critical layer of modern identity security.
            Teklabspace uses advanced AI algorithms to accurately match faces in
            real-time, reducing fraud and streamlining user access.Whether for
            onboarding, login, or transaction confirmation, our face
            verification.
            <span className='text-[#B70AC1] underline'> Read More </span>
          </p>
          <button
            className='bg-[#B70AC1] cursor-pointer  text-white py-2 px-6 mx-3 mb-6 rounded-full'
            onClick={() => router.push(`/researcher`)}
          >
            How it works
          </button>
        </motion.div>
        <motion.div className='card bg-[#292F43]  rounded-xl shadow-lg space-y-4 hover:shadow-xl transition-shadow duration-300'>
          <img
            src='https://fullego.com/company1.gif'
            className=' rounded-xl h-[321px] w-full'
            alt=''
          />

          <h2 className='text-lg sm:text-xl px-3 font-semibold'>
            TEKLABSPACE <span className='text-[#B70AC1]'>PENETRATION</span>{' '}
            TESTING
          </h2>
          <p className='text-base text-[#FFFFFF] px-3'>
            <span className='text-base'>Test Before The Threats Do</span>
            <br /> A proactive approach to cybersecurity begins with knowing
            your weaknesses. Teklabspace’s penetration testing simulates
            real-world attacks to uncover hidden vulnerabilities before
            malicious actors can exploit them. Our expert team identifies
            <span className='text-[#B70AC1] underline'> Read More </span>
          </p>
          <button
            className='bg-[#B70AC1] cursor-pointer  text-white py-2 px-6 mx-3 mb-6 rounded-full'
            onClick={() => router.push(`/researcher`)}
          >
            How it works
          </button>
        </motion.div>
        <motion.div className='card bg-[#292F43]  rounded-xl shadow-lg space-y-4 hover:shadow-xl transition-shadow duration-300'>
          <img
            src='https://fullego.com/company6.gif'
            className=' rounded-xl h-[321px] w-full'
            alt=''
          />

          <h2 className='text-lg sm:text-xl px-3 font-semibold'>
            TEKLABSPACE <span className='text-[#B70AC1]'>THREAT</span>{' '}
            INTELLIGENCE
          </h2>
          <p className='text-base text-[#FFFFFF] px-3'>
            <span className='text-base'>Stay Ahead Of Evolving Threats</span>
            <br />
            Cyber threats evolve daily, and staying ahead requires more than
            just defense—it demands intelligence. Teklabspace delivers real-time
            threat intelligence that helps your team detect and respond to risks
            faster. From identifying malicious domains to monitoring dark web
            chatter,
            <span className='text-[#B70AC1] underline'> Read More </span>
          </p>
          <button
            className='bg-[#B70AC1] cursor-pointer  text-white py-2 px-6 mx-3 mb-6 rounded-full'
            onClick={() => router.push(`/researcher`)}
          >
            How it works
          </button>
        </motion.div>
      </section>
    </main>
  );
}
