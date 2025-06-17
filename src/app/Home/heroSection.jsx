'use client';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRouter } from 'next/navigation';
import { useEffect, useRef } from 'react';
gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const headingRef = useRef(null);
  const paraRef = useRef(null);
  const buttonRef = useRef(null);
  const imageRef = useRef(null);
  const router = useRouter();
  useEffect(() => {
    gsap.from(headingRef.current, {
      scrollTrigger: {
        trigger: headingRef.current,
        start: 'top 80%',
      },
      y: 50,
      opacity: 100,
      duration: 1,
      ease: 'power3.out',
    });

    gsap.from(paraRef.current, {
      scrollTrigger: {
        trigger: paraRef.current,
        start: 'top 80%',
      },
      y: 50,
      opacity: 100,
      duration: 1.2,
      delay: 0.2,
      ease: 'power3.out',
    });

    gsap.from(buttonRef.current, {
      scrollTrigger: {
        trigger: buttonRef.current,
        start: 'top 90%',
      },
      y: 30,
      opacity: 100,
      duration: 1,
      delay: 0.4,
      ease: 'power3.out',
    });

    gsap.from(imageRef.current, {
      scrollTrigger: {
        trigger: imageRef.current,
        start: 'top 80%',
      },
      scale: 0.9,
      opacity: 100,
      duration: 1,
      ease: 'power3.out',
    });
  }, []);

  return (
    <div className='w-full relative overflow-hidden'>
      {/* Decorative Right-Side Shape */}
      <img
        src='/herosectionrightbg.svg'
        alt='Right background shape'
        className='hidden md:block absolute -right-4 -top-10 '
      />

      <div className='flex flex-col md:flex-row items-center gap-8 relative z-10'>
        {/* Left Section: Text and Buttons */}
        <div className='flex-1 bg-[#F2D1F4] pt-50 w-full rounded-tr-[42px] md:rounded-tr-[82px] text-white'>
          <h1
            ref={headingRef}
            className='text-lg px-4 md:px-10 text-start text-[#292F43] sm:text-lg md:text-3xl font-bold leading-tight'
          >
            Innovation <span className='text-[#B70AC1]'>Meets </span>Cyber
            <br />
            <span className='flex'>
              Defense{' '}
              <img
                className='pe-5'
                src='twoballs.svg'
                alt='Decorative balls'
                width={60}
                height={60}
              />
            </span>
          </h1>

          <p
            ref={paraRef}
            className=' px-4 md:px-10 pt-5 text-start text-[#292F43] text-lg'
          >
            Uncover threats. Empower researchers. Strengthen your digital
            defenses. Teklabspace is the ultimate bridge between cutting-edge
            companies and the global hacker community. Our Bug Bounty and
            Vulnerability Disclosure Platform empowers organizations to
            proactively identify and fix vulnerabilities – before attackers do.
          </p>

          <div
            ref={buttonRef}
            className='flex px-5 relative z-20 md:ps-10 flex-col sm:flex-row gap-4 mt-6'
          >
            <button
              className='bg-[#B70AC1] text-white font-semibold py-2 px-6 rounded-full hover:bg-transparent z-10 cursor-pointer hover:border-[#B70AC1] hover:border hover:text-[#B70AC1] transition'
              onClick={() => router.push('/safehouse')}
            >
              Start Hunting
            </button>

            <button
              className='border z-10   border-[#B70AC1] text-[#B70AC1] font-semibold py-2 px-6 rounded-full cursor-pointer hover:bg-[#B70AC1] hover:text-white transition'
              onClick={() => router.push('https://apps.teklabspace.com/login')}
            >
              Launch Program
            </button>
          </div>

          <img
            src='/Vector 161.svg'
            className='-translate-x-1.5 -translate-y-20 md:-translate-y-30'
            alt=''
          />
        </div>

        {/* Right Section: Image and Dots */}
        <div className='relative flex-1 -mt-50 w-full flex items-center justify-center'>
          <div className='relative w-full max-w-[600px] h-[400px] md:h-[400px]'>
            {/* Main Image */}
            <img
              ref={imageRef}
              src='https://fullego.com/2.gif'
              className='object-cover w-[654px] h-full md:-ms-13 rounded-0 md:rounded-3xl'
              alt='Cyber defense animation'
            />

            {/* Dot 1 */}
            <div className='bg-[#B70AC1] w-[76px] h-[76px] rounded-full flex justify-center items-center text-white z-10 absolute top-[-10%] left-1/2'>
              <p className='text-[7px] text-center px-2 leading-tight'>
                Evolving cyber criminal tactics
              </p>
            </div>

            {/* Dot 2 */}
            <div className='bg-[#B70AC1] w-[50px] h-[50px] rounded-full hidden md:flex justify-center items-center text-white z-10 absolute top-[40%] -left-[13%]'>
              <p className='text-[5px] text-center px-2 leading-tight'>
                Advanced threat response needed
              </p>
            </div>

            {/* Dot 3 */}
            <div className='bg-[#B70AC1] w-[50px] h-[50px] rounded-full hidden md:flex justify-center items-center text-white z-10 absolute top-[96%] left-[10%]'>
              <p className='text-[5px] text-center px-2 leading-tight'>
                Advanced threat response needed
              </p>
            </div>

            {/* Dot 4 */}
            <div className='bg-[#B70AC1] w-[76px] h-[76px] hidden md:flex rounded-full justify-center items-center text-white z-10 absolute top-[70%] right-[0%]'>
              <p className='text-[7px] text-center px-2 leading-tight'>
                Real-time vulnerability reporting
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
