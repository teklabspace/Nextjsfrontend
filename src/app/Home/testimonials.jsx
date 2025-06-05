'use client';

import gsap from 'gsap';
import { useEffect, useRef } from 'react';

const Testimonials = [
  {
    name: 'Bello Suleiman',
    title: 'Product Manager, Thrive Moni',
    content:
      'Teklabspace promises a thorough job discovering vulnerabilities and tightening system security. Great communication with very useful results, their penetration tests provided major insight on some flaws in our system...',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Bayo',
    title: 'CTO, Clear Codes Lab',
    content:
      'When we were looking to meet compliance and make sure there are no loop holes in our application before launching to production, Teklabspace came in and carried a thorough VAPT...',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Bolu',
    title: 'CTO, Meltsbay',
    content:
      'I’ve never seen such a thorough and exhaustive VAPT scan as the one that was provided by Teklabspace. The results provided a lot of insights and was very detailed.',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'Ravi',
    title: 'Lead Developer, Appnix',
    content:
      'I appreciated how detailed the VAPT scan was — it uncovered issues we hadn’t considered. Teklabspace’s insights helped us strengthen our infrastructure confidently.',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    name: 'David',
    title: 'Head of IT, CoreTech',
    content:
      'Teklabspace delivered an in-depth vulnerability report with actionable results. I was impressed by the clarity and accuracy. They’re definitely a trusted name in cybersecurity.',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

const testimonials = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.from(cardsRef.current, {
      opacity: 100,
      y: 50,
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out',
    });
  }, []);
  return (
    <div>
      <section className='px-4 md:ps-10 md:pe-4 py-16 bg-white'>
        <div className='relative text-start'>
          <div className='text-start mb-12 '>
            <h2 className=' text-4xl inline-block border-b-2 border-[#292F43] font-bold relative'>
              <span className='text-[#B70AC1]'>Dont take</span> our word for it
              <div className='absolute -top-20 left-30  md:-right-32 w-[120px] h-[120px] md:w-[200px] md:h-[200px] bg-[#B70AC1] opacity-50 blur-[60px] md:blur-[80px] z-0'></div>
            </h2>
            <p className='mt-4 text-lg text-[#B70AC1]'>
              We asked few people for what they think about <br /> TeklabSpace
              and here is what they said.
            </p>
          </div>
        </div>

        <div className='grid grid-cols-12 gap-6'>
          {Testimonials.map((item, index) => (
            <div
              key={index}
              ref={el => (cardsRef.current[index] = el)}
              className={`${
                index < 2
                  ? 'col-span-12 md:col-span-6'
                  : 'col-span-12 sm:col-span-6 md:col-span-4'
              } bg-[#292F43] text-white p-6 rounded-4xl shadow-xl w-full relative`}
              style={{ boxShadow: '1px 20px 13.6px 0 rgba(0, 0, 0, 0.3)' }}
            >
              <div className='mb-2'>
                <span className='text-yellow-400'>★★★★★</span>
              </div>
              <p className='text-sm text-gray-100'>{item.content}</p>

              <div className='flex items-center my-4'>
                <img
                  src={item.image}
                  alt={item.name}
                  className='w-12 h-12 rounded-full object-cover border-2 border-white'
                />
                <div className='ml-4'>
                  <h4 className='font-bold text-lg text-[#B70AC1]'>
                    {item.name}
                  </h4>
                  <p className='text-sm text-gray-300'>{item.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default testimonials;
