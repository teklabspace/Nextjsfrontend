'use client';

import { useRouter } from 'next/navigation';

const hardenattackSurface = () => {
  const router = useRouter();
  return (
    <div>
      <div className='flex flex-col md:flex-row items-center justify-center px-4 md:ps-10 md:pe-4'>
        <div
          className='flex flex-col md:flex-row w-full  bg-[#292F43] rounded-xl shadow-lg overflow-hidden'
          style={{ boxShadow: '1px 20px 13.6px 0 rgba(0, 0, 0, 0.3)' }}
        >
          {/* Left Section - Text */}
          <div className='text-section md:w-1/2 p-4 md:p-12 text-white'>
            <h1 className='md:w-[386px] text-4xl  border-b-2 pb-2 border-[#B70AC1] font-bold mb-6'>
              Harden Your <span className='text-[#B70AC1]'>Attack </span>{' '}
              Surface
            </h1>

            <p className='text-lg  text-[#FFFFFF] mb-8'>
              Protect your applications through a layered security strategy that
              blends skilled ethical hackers and intelligent automation spotting
              and fixing vulnerabilities across your development lifecycle.Our
              layered security strategy is designed to protect your applications
              at every stage of development. By combining the expertise of
              skilled ethical hackers with the efficiency of intelligent.
            </p>
            <div className='flex flex-col sm:flex-row gap-4'>
              <button
                className=' bg-[#B70AC1] cursor-pointer text-white py-2  text-nowrap rounded-full px-3 text-base md:text-sm'
                onClick={() => router.push('/contact')}
              >
                Talk to a Security Advisor
              </button>
              <button
                className='cursor-pointer bg-transparent  border-2 border-[#B70AC1] hover:bg-[#B70AC1] text-white py-2 px-3 text-nowrap rounded-full text-base md:text-sm'
                onClick={() =>
                  window.open(
                    'https://dl.liangroup.net/PDF/Security/Penetration%20Test/Bug%20Bounty%20Playbook%20V2.pdf'
                  )
                }
              >
                Download the Platform Overview
              </button>
            </div>
          </div>

          <div className='md:w-1/2  flex items-center justify-center p-2'>
            <img
              src='https://fullego.com/Touch.gif'
              className='w-full  rounded-xl h-full'
              alt=''
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default hardenattackSurface;
