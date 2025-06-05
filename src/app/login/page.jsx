'use client';
import MetaTags from '@/components/MetaTags';
import { motion, useInView } from 'framer-motion';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';

export default function LoginPage() {
  const formRef = useRef(null);
  const isInView = useInView(formRef, { once: true });

  useEffect(() => {
    if (isInView) {
      gsap.fromTo(
        formRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
      );

      gsap.fromTo(
        formRef.current.children,
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power2.out',
          delay: 0.5,
        }
      );
    }
  }, [isInView]);

  return (
    <section className='min-h-screen bg-white flex items-center justify-center '>
      <MetaTags page='login' />

      <div className='flex flex-col md:flex-row  items-center justify-between'>
        <div className='w-full mb-10 md:mb-0'>
          <img
            src='/Contact us-rafiki 1.svg'
            alt='Login Illustration'
            className='w-full '
          />
        </div>

        <motion.div
          ref={formRef}
          className='w-full  p-6 bg-[#292F43] rounded-lg shadow-lg text-white'
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className='text-center'>
            <h1 className='text-2xl sm:text-3xl font-bold mb-6'>
              Welcome Back
            </h1>
            <p className='text-sm mb-4'>
              Don’t have an account?{' '}
              <a href='/signup' className='text-white hover:underline'>
                Sign up
              </a>
            </p>
          </div>
          <motion.input
            type='email'
            placeholder='Email'
            className='w-full p-3 mb-4 rounded-md bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#B70AC1]'
            whileFocus={{ scale: 1.02 }}
          />
          <motion.input
            type='password'
            placeholder='Password'
            className='w-full p-3 mb-4 rounded-md bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#B70AC1]'
            whileFocus={{ scale: 1.02 }}
          />
          <div className='flex items-center justify-between mb-4'>
            <motion.div
              className='flex items-center'
              whileHover={{ scale: 1.05 }}
            >
              <input type='checkbox' className='mr-2' />
              <span className='text-sm'>Remember me</span>
            </motion.div>
            <a href='/help' className='text-sm text-white hover:underline'>
              Need help?
            </a>
          </div>
          <motion.button
            className='w-full p-3 bg-[#B70AC1] text-white rounded-full hover:bg-white hover:text-[#B70AC1] transition-colors'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Login
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
