'use client';

import MetaTags from '@/components/MetaTags';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { useSearchParams } from 'next/navigation';
import { Suspense, useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollToPlugin);

// Component that uses useSearchParams
function ResearcherContent() {
  const vulnerabilitySectionRef = useRef(null);
  const searchParams = useSearchParams();
  const service = searchParams.get('service');

  useEffect(() => {
    gsap.from('.fade-in', { opacity: 100, y: 50, duration: 1, stagger: 0.2 });
  }, []);

  useEffect(() => {
    if (service && vulnerabilitySectionRef.current) {
      console.log('Ref:', vulnerabilitySectionRef.current);
      setTimeout(() => {
        gsap.to(window, {
          duration: 1,
          scrollTo: { y: vulnerabilitySectionRef.current, offsetY: 50 },
          ease: 'power2.out',
        });
      }, 100);
    }
  }, [service]);

  const serviceContent = {
    vapt: {
      title: 'Vulnerability Assessment and Penetration Testing',
      inshort: 'VAPT',
      description:
        'Premium Pentest is typically designed to check the box on Teklabspace gives you so much more. We start by working with you to align the project’s scope with your needs. We’ll then gather details on your attack surface and ensure hackers are fully aware of your unique targets and goals. As hackers use real-world tactics to assess your scope for vulnerabilities, they’ll submit reports through our platform, giving you instant visibility into findings and potential risks. At the conclusion of the pentest, you’ll receive a detailed report of findings, recommendations, and remediation results to share with your auditors and use to improve your overall security.',
      imgSrc: 'https://fullego.com/vapt.gif',
      cards: [
        {
          icon: '/user.svg',
          description:
            'Develop Vulnerability disclosure policy. Teklabspace recieves and disseminates vulnerability information',
        },
        {
          icon: '/Ellipse 28.svg',
          description: 'Recieve vulnerability report from external source',
        },
        {
          icon: '/recipt.svg',
          description: 'Acknoledgement Receipt',
        },
        {
          icon: '/3456.svg',
          description: 'Verify Report',
        },
        {
          icon: '/no.svg',
          description: 'if No, inform Finder',
        },
        {
          icon: '/yes.svg',
          description: 'if Yes, Develop resolution',
        },
        {
          icon: '/654323589.svg',
          description: 'Disseminate Advisory',
        },
        {
          icon: '/9876543456.svg',
          description: 'Engage in post-resolution activities',
        },
      ],
    },
    vdp: {
      title: 'Vulnerability Disclosure Program',
      inshort: 'VDP',
      description:
        'A VDP is the digital equivalent of “if you see something, say something.” Teklabspace makes it easy to get started working directly with hackers to minimize risk. We’ll help you draft your VDP using NISTrecommended practices tailored for your unique needs. We’ll then publish it and start directing friendly hackers to submit findings through our platform. Every submission will then arrive to those who need to be aware in a consistent format, and, if validated, the information will integrate seamlessly with your existing systems and workflows.',
      imgSrc: 'https://fullego.com/vapt.gif',
      cards: [
        {
          icon: '/user.svg',
          description:
            'Develop Vulnerability disclosure policy. Teklabspace recieves and disseminates vulnerability information',
        },
        {
          icon: '/Ellipse 28.svg',
          description: 'Recieve vulnerability report from external source',
        },
        {
          icon: '/recipt.svg',
          description: 'Acknoledgement Receipt',
        },
        {
          icon: '/3456.svg',
          description: 'Verify Report',
        },
        {
          icon: '/no.svg',
          description: 'if No, inform Finder',
        },
        {
          icon: '/yes.svg',
          description: 'if Yes, Develop resolution',
        },
        {
          icon: '/654323589.svg',
          description: 'Disseminate Advisory',
        },
        {
          icon: '/9876543456.svg',
          description: 'Engage in post-resolution activities',
        },
      ],
    },
    bugbounty: {
      title: 'Bug Bounty Program',
      inshort: 'BUG BOUNTY',
      description:
        'Bounty programs pay hackers when they find a valid security vulnerability, and Teklabspace Bounty puts you in total control of your program. You’ll start by detailing your program’s scope of targets, what types of findings are eligible, the rewards hackers can earn, and what information hackers should include in their reports. We’ll then help you invite select hackers to a private program or promote a public program to our community of hundreds of thousands of global hackers. As new bug reports start arriving, your team or our white-glove optional triage services team will use the Teklabspace platform to communicate with the hacker, validate the reported bug, and standardize the reported information. Teklabspace then pushes that information to your remediation teams and systems, and then pays the hacker their earned bounty. Along the way, you gain instant visibility into report trends, bug details, bounty payments, and more, to continuously improve your security efforts. Our experts will design, manage, and support your bug bounty.',
      imgSrc: 'https://fullego.com/vapt.gif',
      cards: [
        {
          icon: '/user.svg',
          description:
            'Develop Vulnerability disclosure policy. Teklabspace recieves and disseminates vulnerability information',
        },
        {
          icon: '/Ellipse 28.svg',
          description: 'Recieve vulnerability report from external source',
        },
        {
          icon: '/recipt.svg',
          description: 'Acknoledgement Receipt',
        },
        {
          icon: '/3456.svg',
          description: 'Verify Report',
        },
        {
          icon: '/no.svg',
          description: 'if No, inform Finder',
        },
        {
          icon: '/yes.svg',
          description: 'if Yes, Develop resolution',
        },
        {
          icon: '/654323589.svg',
          description: 'Disseminate Advisory',
        },
        {
          icon: '/9876543456.svg',
          description: 'Engage in post-resolution activities',
        },
      ],
    },
    default: {
      title: 'Vulnerability Disclosure Program',
      inshort: 'VDP',
      description:
        'A VDP is the digital equivalent of “if you see something, say something.” Teklabspace makes it easy to get started working directly with hackers to minimize risk. We’ll help you draft your VDP using NISTrecommended practices tailored for your unique needs. We’ll then publish it and start directing friendly hackers to submit findings through our platform. Every submission will then arrive to those who need to be aware in a consistent format, and, if validated, the information will integrate seamlessly with your existing systems and workflows.',
      imgSrc: 'https://fullego.com/vapt.gif',
      cards: [
        {
          icon: '/user.svg',
          description:
            'Develop Vulnerability disclosure policy. Teklabspace recieves and disseminates vulnerability information',
        },
        {
          icon: '/Ellipse 28.svg',
          description: 'Recieve vulnerability report from external source',
        },
        {
          icon: '/recipt.svg',
          description: 'Acknoledgement Receipt',
        },
        {
          icon: '/3456.svg',
          description: 'Verify Report',
        },
        {
          icon: '/no.svg',
          description: 'if No, inform Finder',
        },
        {
          icon: '/yes.svg',
          description: 'if Yes, Develop resolution',
        },
        {
          icon: '/654323589.svg',
          description: 'Disseminate Advisory',
        },
        {
          icon: '/9876543456.svg',
          description: 'Engage in post-resolution activities',
        },
      ],
    },
  };

  const { title, description, imgSrc, cards, inshort } =
    serviceContent[service] || serviceContent.default;

  return (
    <section>
      <MetaTags page='researcher' />
      <div
        className='bg-white  w-full h-screen flex justify-center items-center bg-no-repeat bg-top-left'
        style={{ backgroundImage: "url('/shapes.png')" }}
      >
        <div className='fade-in px-3 md:px-10 mt-[500px] md:mt-50'>
          <h1 className='text-[#B70AC1] text-4xl font-bold text-center'>
            Research
          </h1>
          <div className='grid pt-10 grid-cols-1 mb-20 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center'>
            <div className='text-left'>
              <h2 className='text-[#292F43] text-3xl font-semibold mb-4 sm:mb-6'>
                Act Now to <span className='text-[#B70AC1]'>Stay</span> Ahead of
                <br />
                Threats
              </h2>
              <p className='text-gray-700 text-base leading-relaxed'>
                Teklabspace products and services enhance your security efforts
                to keep your valuable data safe from those looking to steal your
                assets, tarnish your brand, and undermine your customers’ trust.
                It’s easy to get started, whether you’re a security team of one
                or you need pinpoint expertise to enhance an already mature
                security apparatus. We can help you develop and launch a VDP;
                add private, public, or focused bug bounty programs; get more
                from your pentests, and advise your overall security strategy.
                Technology moves at a rapid pace. Nearly every bit of
                information we interact with today is now captured, stored,
                processed, and delivered faster than ever.
              </p>
            </div>
            <div className='flex justify-center'>
              <img
                src='https://fullego.com/reserch1.gif'
                alt='Security research animation'
                className='h-auto rounded-lg shadow-md w-full'
              />
            </div>
          </div>
        </div>
      </div>

      <div className='bg-[#292F43] relative mt-70 md:mt-30 py-20 overflow-x-hidden w-full h-full'>
        <h2 className='text-center text-white text-4xl font-bold '>
          How It <span className='text-[#B70AC1]'>Works</span>
        </h2>
        <div className='w-56 h-[2px] bg-white mx-auto '></div>

        {/* Blur effect as a subtle background glow */}
        <div className='absolute top-0 right-10 w-[200px] h-[200px] bg-[#B70AC1] opacity-50 blur-[80px] z-0'></div>

        <div className='max-w-7xl mt-10 mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 md:grid-cols-5 gap-8 sm:gap-10 lg:gap-12 items-start'>
            {/* Step 1 */}
            <div className='fade-in relative text-left'>
              <div className='flex justify-center mb-4'>
                <div className='flex items-center justify-center'>
                  <img src='Group 15144.svg' alt='' />
                </div>
              </div>
              <h3 className='text-white text-lg font-semibold mb-2 sm:mb-3'>
                Signup on <span className='text-[#B70AC1]'>Teklabspace</span>
              </h3>
              <p className='text-[#FFFFFF] text-sm sm:text-base leading-relaxed'>
                It’s easy to create an account and verify that you are human.
              </p>
            </div>
            <div className='fade-in mt-10 relative text-left'>
              <div className='flex justify-center mb-4'>
                <div className='flex items-center justify-center'>
                  <img src='Group 15145.svg' alt='' />
                </div>
              </div>
              <h3 className='text-white text-lg font-semibold mb-2 sm:mb-3'>
                Accept the <span className='text-[#B70AC1]'>Code</span> of
                conduct
              </h3>
              <p className='text-[#FFFFFF] text-sm sm:text-base leading-relaxed'>
                We provide a friendly environment for people with different
                race, culture, religious belief, political affiliation and
                personal orientation on Teklabspace. We only allow positive
                vibes and interpersonal respect when attempting the rules of
                engagement
              </p>
            </div>
            <div className='fade-in mt-20 relative text-left'>
              <div className='flex justify-center mb-4'>
                <div className='flex items-center justify-center'>
                  <img src='Group 15146.svg' alt='' />
                </div>
              </div>
              <h3 className='text-white text-lg font-semibold mb-2 sm:mb-3'>
                Check Up <span className='text-[#B70AC1]'>open</span> programs
              </h3>
              <p className='text-[#FFFFFF] text-sm sm:text-base leading-relaxed'>
                As a new user you have limited view to programs listed on the
                Discovery after signing in. To increase your chance of a wide
                range of programs, you can submit security vulnerabilities on
                open programs and fulfill your KYC
              </p>
            </div>
            <div className='fade-in mt-30 relative text-left'>
              <div className='flex justify-center mb-4'>
                <div className='flex items-center justify-center'>
                  <img src='Group 15147.svg' alt='' />
                </div>
              </div>
              <h3 className='text-white text-lg font-semibold mb-2 sm:mb-3'>
                Submit a <span className='text-[#B70AC1]'>report on</span> Safe
                House
              </h3>
              <p className='text-[#FFFFFF] text-sm sm:text-base leading-relaxed'>
                Found something in the wild and don’t know how to go about it.
                Teklabspace provides a secure and safe way to reach out to the
                organization without any legal action against the hacker. Take
                advantage of this feature.
              </p>
            </div>
            <div className='fade-in mt-40 relative text-left'>
              <div className='flex justify-center mb-4'>
                <div className='flex items-center justify-center'>
                  <img src='Group 15148.svg' alt='' />
                </div>
              </div>
              <h3 className='text-white text-lg font-semibold mb-2 sm:mb-3'>
                Get <span className='text-[#B70AC1]'>recommended</span> by
                Teklabspace
              </h3>
              <p className='text-[#FFFFFF] text-sm sm:text-base leading-relaxed'>
                Submit verified reports and be invited for a drink on a round
                table. Be consistent in submitting valid reports on programs.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='absolute w-[95%] my-10 ms-10 h-0 flex justify-center items-center border-b-2 border-[#292F43]'></div>
      <div
        className='bg-[#FFFFFF] w-full py-12 sm:py-16 lg:py-20'
        ref={vulnerabilitySectionRef}
      >
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <div className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full w-24 h-1 bg-[#B70AC1] mb-2'></div>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-start mb-10 sm:mb-12'>
            <div className='fade-in text-start'>
              <h2 className='text-[#B70AC1] text-4xl font-bold uppercase mb-6 sm:mb-8 border-b-2 border-[#292F43] pb-2 inline-block'>
                {inshort} <span className='text-[#292F43]'>Disclosure</span>
              </h2>
              <p className='text-[#B70AC1] text-xl font-semibold mb-4 text-left'>
                ABOUT {inshort.toUpperCase()}
              </p>
              <p className='text-[#292F43] text-start text-base leading-relaxed'>
                {description}
              </p>
            </div>
            <div className='fade-in flex justify-center lg:justify-end'>
              <img
                src={imgSrc}
                alt={`${title} animation`}
                className='max-w-full h-auto rounded-lg shadow-md sm:max-w-[300px] lg:max-w-[400px]'
              />
            </div>
          </div>
          <div className='grid mt-20 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
            {cards.map((card, idx) => (
              <motion.div
                key={idx}
                className='card bg-[#292F43] rounded-xl p-6 text-white'
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className='flex justify-center items-center text-purple-400 text-3xl'>
                  {card.icon.endsWith('.svg') ? (
                    <img src={card.icon} alt={card.title} className='' />
                  ) : (
                    <span>{card.icon}</span>
                  )}
                </div>
                <p className='text-lg text-[#FFFFFF] leading-relaxed'>
                  {card.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Main page component with Suspense
export default function ResearcherPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ResearcherContent />
    </Suspense>
  );
}
