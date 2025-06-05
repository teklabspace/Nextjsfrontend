'use client';
import gsap from 'gsap';
import { useRouter } from 'next/navigation';
import { useEffect, useRef } from 'react';

const secureSmarter = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const buttonRefs = useRef([]);
  const mainRef = useRef(null);
  const router = useRouter();
  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(mainRef.current, { opacity: 0 }, { opacity: 1, duration: 0.8 });

    tl.fromTo(
      titleRef.current,
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }
    );

    tl.fromTo(
      subtitleRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.6, ease: 'power2.out' },
      '-=0.3'
    );

    buttonRefs.current.forEach((button, index) => {
      tl.fromTo(
        button,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' },
        '-=0.3'
      );
    });

    buttonRefs.current.forEach(button => {
      button.addEventListener('mouseenter', () => {
        gsap.to(button, {
          scale: 1.05,
          backgroundColor: '#B70AC1',
          duration: 0.2,
        });
      });

      button.addEventListener('mouseleave', () => {
        gsap.to(button, {
          scale: 1,
          backgroundColor: '#292F43',
          duration: 0.2,
        });
      });
    });

    return () => {
      buttonRefs.current.forEach(button => {
        button.removeEventListener('mouseenter', () => {});
        button.removeEventListener('mouseleave', () => {});
      });
    };
  }, []);

  const addToRefs = el => {
    if (el && !buttonRefs.current.includes(el)) {
      buttonRefs.current.push(el);
    }
  };
  return (
    <div>
      <main
        ref={mainRef}
        className='mt-10 flex flex-col items-center p-4 sm:p-8 relative '
      >
        {/* Blurred Circle at Right-Center */}
        <div className='absolute hidden md:block left-40 top-10 transform -translate-y-1/2 w-[80px] h-[80px] bg-[#996FF0] blur-[60px] z-0'></div>
        <div className='absolute hidden md:block w-[95%] mx-auto h-0 flex justify-center items-center border-b-2 border-[#B70AC1]'></div>

        <div className='w-full max-w-4xl mt-10 mx-auto flex flex-col items-center justify-center gap-8 sm:gap-12'>
          <div className='text-center'>
            <h1
              ref={titleRef}
              className='text-4xl mt-10 border-b-2 border-[#292F43] pb-2 inline-block font-bold text-[#B70AC1] mb-4'
            >
              Ready to Secure <span className='text-[#292F43]'>Smarter?</span>
            </h1>

            <p
              ref={subtitleRef}
              className='text-xl text-[#292F43] max-w-2xl mx-auto'
            >
              Whether you're a security researcher ready to hunt or a company
              ready to defend, Teklabspace is your launchpad.
            </p>
          </div>

          <div className='flex flex-col sm:flex-row gap-4 sm:gap-6 w-full max-w-3xl'>
            <button
              ref={addToRefs}
              className='flex-1 bg-gray-800 cursor-pointer text-white py-4 px-6 rounded-lg shadow-lg font-medium transition-colors'
              onClick={() =>
                (window.location.href = 'https://apps.teklabspace.com/login')
              }
            >
              Start Hunting
            </button>

            <button
              ref={addToRefs}
              className='flex-1 bg-gray-800 cursor-pointer text-white py-4 px-6 rounded-lg shadow-lg font-medium transition-colors'
              onClick={() =>
                (window.location.href = 'https://apps.teklabspace.com/login')
              }
            >
              Launch a Program
            </button>

            <button
              ref={addToRefs}
              className='flex-1 bg-gray-800 cursor-pointer text-white py-4 px-6 rounded-lg shadow-lg font-medium transition-colors'
              onClick={() => router.push(`/researcher`)}
            >
              Learn More
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default secureSmarter;
