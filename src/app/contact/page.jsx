'use client';
import MetaTags from '@/components/MetaTags';
import emailjs from '@emailjs/browser';
import { motion, useInView } from 'framer-motion';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import toast from 'react-hot-toast';

export default function Contact() {
  const formRef = useRef(null);
  const isInView = useInView(formRef, { once: true });

  useEffect(() => {
    emailjs.init('s3JXSkbSx1gJ_E2zQ');

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

  const handleSubmit = async e => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      message: formData.get('message'),
      Name: `${formData.get('firstName')} ${formData.get('lastName')}`.trim(),
      image_url: 'https://i.postimg.cc/kgB4Ptj6/Logo.png',
    };

    try {
      await emailjs.send(
        'service_xbvy0sw',
        'template_5ndapnr',
        data,
        's3JXSkbSx1gJ_E2zQ'
      );
      toast.success('Message sent successfully!');
      e.target.reset();
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast.error('Failed to send message. Please try again.');
    }
  };

  return (
    <section className='min-h-screen bg-gradient-to-br from-[#1E1B4B] via-[#4B0082] to-[#B70AC1] relative overflow-hidden'>
      <MetaTags page='contact' />

      {/* Subtle background pattern */}
      <div
        className='absolute inset-0 opacity-10'
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 2px, transparent 0)`,
          backgroundSize: '50px 50px',
        }}
      ></div>

      <div className='w-full min-h-screen flex flex-col md:flex-row justify-center items-center px-4 sm:px-8 py-16 relative z-10'>
        {/* Left Section */}
        <div className='w-full max-w-md md:max-w-lg mt-20 md:mt-0 flex flex-col justify-center items-center text-center px-4 mb-12 md:mb-0 md:mr-12'>
          <h1 className='text-white text-4xl sm:text-5xl font-bold mb-6 tracking-tight'>
            Get in Touch
          </h1>
          <h2 className='text-white text-lg sm:text-xl mb-8 leading-relaxed opacity-90 max-w-md'>
            Have Questions, Ideas, or Just Want to Chat? <br />
            We're Excited to Hear from You!
          </h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-md'>
            {/* Card 1 */}
            <div className='bg-white/10 backdrop-blur-lg rounded-xl px-6 py-6 text-white text-center shadow-xl border border-white/20'>
              <div className='flex justify-center'>
                <img
                  src='/Group 3624.svg'
                  alt='Support Logo'
                  className='w-14 h-14 -mt-12'
                />
              </div>
              <p className='font-semibold text-lg mt-3'>Contact Support</p>
              <p className='text-sm mt-2'>info@teklabspace.com</p>
            </div>
            {/* Card 2 */}
            <div className='bg-white/10 backdrop-blur-lg rounded-xl px-6 py-6 text-white text-center shadow-xl border border-white/20'>
              <div className='flex justify-center'>
                <img
                  src='/contact.svg'
                  alt='Partner Logo'
                  className='w-14 h-14 -mt-12'
                />
              </div>
              <p className='font-semibold text-lg mt-3'>Partner with Us</p>
              <p className='text-sm mt-2 mb-3'>info@teklabspace.com</p>
            </div>
          </div>
        </div>

        {/* Right Section - Form */}
        <motion.div
          ref={formRef}
          className='w-full max-w-md mt-10 p-8 bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20'
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <form onSubmit={handleSubmit}>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
              <motion.input
                type='text'
                name='firstName'
                placeholder='First Name*'
                className='p-3 rounded-md bg-white/90 text-gray-900 focus:outline-none focus:ring-2 focus:ring-white placeholder-gray-500'
                whileFocus={{ scale: 1.02 }}
                required
              />
              <motion.input
                type='text'
                name='lastName'
                placeholder='Last Name*'
                className='p-3 rounded-md bg-white/90 text-gray-900 focus:outline-none focus:ring-2 focus:ring-white placeholder-gray-500'
                whileFocus={{ scale: 1.02 }}
                required
              />
            </div>
            <motion.input
              type='email'
              name='email'
              placeholder='Email*'
              className='w-full mt-4 p-3 rounded-md bg-white/90 text-gray-900 focus:outline-none focus:ring-2 focus:ring-white placeholder-gray-500'
              whileFocus={{ scale: 1.02 }}
              required
            />
            <motion.input
              type='tel'
              name='phone'
              placeholder='Phone Number'
              className='w-full mt-4 p-3 rounded-md bg-white/90 text-gray-900 focus:outline-none focus:ring-2 focus:ring-white placeholder-gray-500'
              whileFocus={{ scale: 1.02 }}
            />
            <motion.textarea
              name='message'
              placeholder='Your message...'
              className='w-full mt-4 p-3 rounded-md bg-white/90 text-gray-900 focus:outline-none focus:ring-2 focus:ring-white placeholder-gray-500 resize-none h-36'
              whileFocus={{ scale: 1.02 }}
              required
            />
            <motion.button
              type='submit'
              className='w-full mt-6 p-3 bg-white text-[#B70AC1] rounded-full hover:bg-[#B70AC1] hover:text-white transition-colors font-semibold text-lg'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
