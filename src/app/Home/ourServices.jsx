'use client';
import gsap from 'gsap';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
const OurServices = () => {
  const router = useRouter();
  useEffect(() => {
    gsap.from('.service-card', {
      opacity: 100, // Corrected from 100 to 0 for fade-in effect
      y: 50,
      duration: 1,
      stagger: 0.2,
      ease: 'power2.out',
    });
  }, []);

  const services = [
    {
      id: 1,
      title: 'Vulnerability Assessment and Penetration Testing',
      inshort: 'VAPT',
      description:
        'VAPT describes a broad range of security testing services designed to identify and help address cyber security exposures on your organization digital assets.',
      imgSrc: 'Group 15139.svg', // Ensure this path is correct
      buttonText: 'Learn More',
      scaleClass: 'md:scale-90',
      query: 'vapt',
    },
    {
      id: 2,
      title: 'Vulnerability Disclosure Program',
      inshort: 'VDP',
      description:
        'Vulnerability disclosure program is a way of creating a safe harbor for hackers who finda security vulnerability in your system without legal action carried out against them for finding and reporting these issues to you.',
      imgSrc: 'Group 15139.svg',
      buttonText: 'Learn More',
      scaleClass: 'md:scale-110',
      query: 'vdp',
    },
    {
      id: 3,
      title: 'Bug Bounty Program',
      inshort: 'BUG BOUNTY',
      description:
        'New breaches are in the news every day,and some of the victims include someof the largest businesses.Bug bounties are one way to help your business avoid the headlines.',
      imgSrc: 'Group 15139.svg',
      buttonText: 'Learn More',
      scaleClass: 'md:scale-90',
      query: 'bugbounty',
    },
  ];

  return (
    <div className='flex my-20 items-center justify-center md:px-0'>
      <div className='w-full px-4 md:ps-10 relative'>
        {/* Blur effect as a subtle background glow */}
        <div className='absolute top-0 hidden md:block right-0 w-[200px] h-[200px] bg-[#B70AC1] opacity-50 blur-[80px] z-0'></div>

        <div className='flex justify-between items-center w-full md:w-[492px] mb-8 relative z-10'>
          <div>
            <h1 className='text-4xl font-bold inline-block text-gray-800 mb-4 border-b-2 border-[#292F43]'>
              Our <span className='text-[#B70AC1]'>Services</span>
            </h1>
            <p className='text-lg text-gray-600'>
              At TeklabSpace we offer services that ensure you harness the power
              of crowd source security, enabling you to deal with threats and
              fix your vulnerabilities effectively.
            </p>
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 place-items-center'>
          {services.map(
            ({
              id,
              title,
              description,
              imgSrc,
              buttonText,
              scaleClass,
              query,
            }) => (
              <div
                key={id}
                className={`service-card mt-5 md:mt-0 w-full ${scaleClass} bg-[#292F43] text-white p-6 rounded-2xl shadow-lg relative`}
                style={{ boxShadow: '1px 20px 13.6px 0 rgba(0, 0, 0, 0.3)' }}
              >
                <div className='absolute -top-6 left-1/2 transform -translate-x-1/2 flex items-center justify-center'>
                  <img src={imgSrc} alt={title} />
                </div>
                <h2 className='text-2xl text-start drop-shadow-md text-[#FFFFFF]  mt-10 font-semibold mb-2'>
                  {title}
                </h2>
                <p className='text-[#FFFFFF] font-normal text-base'>
                  {description}
                </p>
                <button
                  className='mt-4 flex text-nowrap cursor-pointer justify-center items-center bg-white text-[#292F43] py-2 px-4 rounded-full'
                  onClick={() => router.push(`/researcher?service=${query}`)}
                >
                  {buttonText}{' '}
                  <img className='ms-3 w-4' src='Vector.svg' alt='' />
                </button>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
