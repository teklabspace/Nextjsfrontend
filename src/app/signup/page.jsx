'use client';
import MetaTags from '@/components/MetaTags';
import { motion, useInView } from 'framer-motion';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';

export default function SignPage() {
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
      <MetaTags page='signup' />

      <div className='flex flex-col md:flex-row  items-center justify-between'>
        <motion.div
          ref={formRef}
          className='w-full max-w-md p-6 bg-gray-800 rounded-lg shadow-lg text-white'
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className='text-center'>
            <p className='text-sm mb-2'>
              Already have an account?{' '}
              <a href='/login' className='text-blue-400 hover:underline'>
                Sign In
              </a>
            </p>
            <h1 className='text-2xl sm:text-3xl font-bold mb-6'>
              Create an Account
            </h1>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4'>
            <motion.input
              type='text'
              placeholder='First Name'
              className='p-3 rounded-md bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#B70AC1]'
              whileFocus={{ scale: 1.02 }}
            />
            <motion.input
              type='text'
              placeholder='Last Name'
              className='p-3 rounded-md bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#B70AC1]'
              whileFocus={{ scale: 1.02 }}
            />
          </div>
          <motion.input
            type='text'
            placeholder='Username'
            className='w-full p-3 mb-4 rounded-md bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#B70AC1]'
            whileFocus={{ scale: 1.02 }}
          />
          <motion.input
            type='tel'
            placeholder='Phone'
            className='w-full p-3 mb-4 rounded-md bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#B70AC1]'
            whileFocus={{ scale: 1.02 }}
          />
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
          <motion.input
            type='password'
            placeholder='Confirm Password'
            className='w-full p-3 mb-4 rounded-md bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#B70AC1]'
            whileFocus={{ scale: 1.02 }}
          />
          <motion.button
            className='w-full p-3 bg-[#B70AC1] text-white rounded-full hover:bg-white hover:text-[#B70AC1] transition-colors'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Sign Up
          </motion.button>
          <p className='text-xs mt-4 text-center'>
            By clicking Sign up you hereby are in agreement with our and code of
            conduct
          </p>
        </motion.div>
        <div className='w-full mb-10 md:mb-0'>
          <img src='/signup.svg' alt='Login Illustration' className='w-full ' />
        </div>
      </div>
    </section>
  );
}
