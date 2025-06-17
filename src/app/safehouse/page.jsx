'use client';

import MetaTags from '@/components/MetaTags';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';

const bulletPoints = [
  {
    title: 'What is Safe House Disclosure Assistance?',
    content: `When a security vulnerability is found, it needs to get into the right hands quickly. To assist in this process, Teklabspace refer you to the Cabin to report potential vulnerabilities directly to the organizations that can resolve them. As seen in the wild many organizations do not have well structure procedure of receiving security vulnerability reports from external Cybersecurity researchers. In this circumstance, Teklabspace will create an enabling interactive space to work with friendly hackers on a best way to validate the authenticity of a security vulnerability, reach out to the affected company, then share the security vulnerability with the company so it can be fixed.`,
  },
  {
    title:
      'The Need for Teklabspace offering Safe House Disclosure Assistance?',
    content: `It's very risky for external security researchers to report vulnerabilities to company that lack formal disclosure policies or program, because they might face law suit for attempting to carry out pen test without approval. With this fear in the mind of external finders, vulnerabilities can end up unreported and when the bad actors exploit this security flaws it might lead to disaster or reputational damage. It's in our collective best interest to help friendly hackers be able to disclose security vulnerabilities to any organization. We are passionate about reducing or if possible, closing the gap between trusted hackers and organizations, so we are encouraging strong intra-relationships with organizations and the hacker community which is the missing piece of the puzzle to creating a safer Internet for all. The Teklabspace Cabin aims to reduce risk for the individual and help close this critical gap.`,
  },
  {
    title: 'How does it work, exactly?',
    content: ` A friendly hacker finds a security vulnerability.
    They search the Teklabspace CABIN for a published security policy procedure and attempt alternative means of contact. If the hacker has exhausted their options in their attempts to contact the organization, they can request Safe House Disclosure Assistance.At this point, the hacker provides information on their attempts to reach the affected organization along with the relevant vulnerability information. This vulnerability information is received by the Teklabspace Safe House Disclosure Assistance team, who verifies the Authenticity of the bug, as well as determines the potential impact.Teklabspace prioritizes which bugs to assist with based on impact on the digital assets and may be unable to assist with low impact bugs. It is important to note that Teklabspace cannot guarantee success,Teklabspace will attempt to contact the affected organization and verify the identity of an appropriate point of contact to receive the vulnerability information. Once their identity is verified, an email is sent to the point of contact with a secret link to the contents of the bug report and the interactions between the hacker and Teklabspace. At this point, the vulnerability information has been successfully shared with the affected organization.If they’d like, the point of contact can create an account on Teklabspace to interact with the finder directly or provide updates on the resolution of the vulnerability. Alternatively, the point of contact can contact info@teklabspace.com for assistance on how to proceed. At the end of this process, Teklabspace will inquire about the organization's preferred vulnerability disclosure process to avoid the need for Safe House Disclosure Assistance in the future.`,
  },
];

export default function Safehouse() {
  const bulletsRef = useRef([]);

  useEffect(() => {
    gsap.from(bulletsRef.current, {
      x: -50,
      opacity: 100,
      stagger: 0.2,
      duration: 0.8,
      ease: 'power3.out',
    });
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section
        className='w-full bg-no-repeat bg-top-left bg-white'
        style={{ backgroundImage: "url('/safehouse.png')" }}
      >
        <MetaTags page='safehouse' />

        <div className='pt-30 px-4 md:px-10 flex flex-col justify-center items-center text-center'>
          <h1 className='text-[#292F43] text-2xl md:text-4xl font-bold mb-2'>
            SAFE HOUSE DISCLOSURE ASSISTANCE
          </h1>
          <p className='text-[#292F43] text-sm md:text-base'>
            If you found Something, say It
          </p>
          <button
            className='bg-[#292F43] my-4 cursor-pointer rounded-full px-6 py-2 text-white text-sm md:text-base'
            onClick={() =>
              (window.location.href = 'https://apps.teklabspace.com/login')
            }
          >
            Submit a report
          </button>
          <img
            src='https://fullego.com/safehouse.gif'
            className='w-full max-w-md h-auto rounded-lg mt-4'
            alt='Safehouse Animation'
          />
        </div>
      </section>

      {/* Stats Section */}
      <div className='flex flex-col md:flex-row gap-6 justify-center items-center my-10 px-4'>
        {[1, 2].map((_, i) => (
          <div
            key={i}
            className='bg-[#292F43] w-[180px] h-[180px] md:w-[200px] md:h-[200px] flex flex-col text-white rounded-full justify-center items-center shadow-lg'
            style={{ boxShadow: '1px 20px 13.6px 0 rgba(0, 0, 0, 0.3)' }}
          >
            <img src='/files.svg' alt='file icon' className='w-8 h-8' />
            <p className='text-xs md:text-sm mt-4 text-center px-2'>
              100 <br />
              Reports Received in the past 90 days
            </p>
          </div>
        ))}
      </div>

      {/* Bullet Points Section */}
      <div className='px-4 md:px-20 my-10'>
        {bulletPoints.map((point, idx) => (
          <div key={idx} className='flex items-start mb-10'>
            <div
              ref={el => (bulletsRef.current[idx] = el)}
              className='flex flex-col items-center mr-4'
            >
              <div className='w-3 h-3 md:w-4 md:h-4 bg-[#B70AC1] rounded-full mt-2' />
              {idx < bulletPoints.length - -0 && (
                <div className='flex justify-center items-center'>
                  <div className='w-[3px] h-24 sm:h-40 bg-[#292F43] mt-1' />{' '}
                </div>
              )}
            </div>
            <div>
              <h2 className='text-lg md:text-2xl font-bold text-gray-800 mb-2'>
                {point.title}
              </h2>
              <p className='text-gray-700 text-sm md:text-base leading-relaxed whitespace-pre-line'>
                {point.content}
              </p>
            </div>
          </div>
        ))}

        <div className='text-right mt-6'>
          <p className='font-semibold text-sm md:text-base'>
            Last updated on 16th January, 2021
          </p>
        </div>

        <div className='flex justify-center items-center mt-6'>
          <button
            className='bg-gray-800 text-white cursor-pointer px-6 py-2 rounded-full hover:bg-gray-700 transition text-sm md:text-base'
            onClick={() =>
              (window.location.href = 'https://apps.teklabspace.com/login')
            }
          >
            Submit a report
          </button>
        </div>
      </div>
    </>
  );
}
