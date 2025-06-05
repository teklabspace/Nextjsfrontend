'use client';

import Footer from '@/components/Footer';
import MetaTags from '@/components/MetaTags';
import Navbar from '@/components/Navbar';
import { motion, useInView } from 'framer-motion';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';

const cards = [
  {
    icon: '/messageicon.svg',
    title: 'About',
    description:
      'This Code of Conduct applies to all interactions with Teklabspace team members, customers, and researchers. The Teklabspace community is intended for everyone, from all walks of life, and following this Code of Conduct will help ensure that we have a safe and welcoming place for all. Please read through this information to understand the required behavior of all Teklabspace participants. We look forward to having you in our community.',
  },
  {
    icon: '/requireicon.svg',
    title: 'What we require',
    description:
      'Behave Professionally - Be Kind, Respectful and Professional in your communications and actions. Be Helpful and use all available ourselves. We do this through honest and thoughtful discussion with our peers and partners. No Unsafe Testing - Be prompt in reporting vulnerabilities you have identified. Be Ethical - Don’t intentionally mislead customers or Teklabspace, it is your job to try and break things - not exploit it.',
  },
  {
    icon: '/discloureicon.svg',
    title: 'Prohibited Behavior',
    description:
      'Unauthorized Disclosure: Disclosing vulnerability information without explicit approval (see Prohibited bounty briefs for expectations) is forbidden. Program Disclosure: Disclosing any information about private bounties including customer names or dates of programs is strictly forbidden.',
  },
  {
    icon: '/behaviouricon.svg',
    title: 'Consequence ?',
    description:
      'Violations of this Code of Conduct, the Standard Disclosure result in a warning and/or removal of access can elements of the Teklabspace platform on to temporary or permanent basis depending on the severity of the violation. In severe cases, an offender will be removed from Teklabspace bounties or from the Teklabspace community entirely.',
  },
  {
    icon: '/dollaricon.svg',
    title: 'Guideline Disclosure',
    description:
      'Don’t share confidential vulnerability or customer information. Private program customers are duplicate, and no submitted vulnerability (including duplicates). Out of Scope: Not Applicable, etc.) may be disclosed without explicit customer permission. Please read each Bounty Brief for specific program disclosure policies which supersede (override) this policy. We expect everyone to use the proper channels to disclose or communicate about vulnerability submissions.',
  },
  {
    icon: '/temsicon.svg',
    title: 'Terms & Conditions',
    description:
      'We have a Terms and Conditions document related to content, privacy, and laws. To participate in Teklabspace programs and offerings you must agree to abide by our Terms and Conditions and the Standard Disclosure.',
  },
];

export default function code() {
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
      <MetaTags page='code' />

      <Navbar />

      {/* Hero Section */}
      <section
        className='w-full min-h-screen py-10 flex flex-col justify-center items-center bg-no-repeat bg-center bg-cover'
        style={{ backgroundImage: "url('/codebg.png')" }}
      >
        <div className='text-center mt-30 px-4 sm:px-6 md:px-10 max-w-7xl w-full mb-8'>
          <h1 className='text-[#292F43] text-2xl sm:text-3xl lg:text-4xl font-bold mb-6'>
            CODE OF CONDUCT
          </h1>
          <p className='text-[#292F43] text-sm sm:text-base  max-w-2xl mx-auto'>
            To ensure that we server you better, we created our code of conduct.
            Kindly read through and agree before sign up to our services
          </p>
        </div>

        <div className='grid grid-cols-1 px-10 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto'>
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className=' p-6   transition-all duration-300'
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className='w-12 h-12 mb-4 relative mx-start'>
                <img
                  src={card.icon}
                  alt={`${card.title} icon`}
                  fill
                  className='object-contain'
                />
              </div>
              <h3 className='text-lg text-start sm:text-xl font-semibold text-[#292F43] mb-3 '>
                {card.title}
              </h3>
              <p className='text-sm text-start sm:text-base text-[#292F43] '>
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </section>
  );
}
