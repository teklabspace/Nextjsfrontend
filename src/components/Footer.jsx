'use client';

import emailjs from '@emailjs/browser';
import gsap from 'gsap';
import Link from 'next/link.js';
import { useEffect, useRef, useState } from 'react';
import { toast } from 'react-hot-toast';

export default function Footer() {
  const socialLinks = [
    {
      src: '/Group 15143.png',
      alt: 'Instagram Icon',
      href: 'https://www.instagram.com/teklabspace',
    },
    {
      src: '/yt.svg',
      alt: 'YouTube',
      href: 'https://www.youtube.com/channel/UCnX3UuDJUi5fZC9RyjRjcVg',
    },
    {
      src: '/Linkedin.svg',
      alt: 'LinkedIn',
      href: 'https://www.linkedin.com/company/teklabspace',
    },
    {
      src: '/Facebook.svg',
      alt: 'Facebook',
      href: 'https://m.facebook.com/teklabspace/',
    },
    {
      src: '/Twitter.svg',
      alt: 'Twitter',
      href: 'https://twitter.com/teklabspace',
    },
  ];

  const formRef = useRef(null);
  const arrowRef = useRef(null);
  const [email, setEmail] = useState('');

  useEffect(() => {
    emailjs.init('s3JXSkbSx1gJ_E2zQ');
  }, []);

  const handleSubmit = async e => {
    e.preventDefault();

    if (!email) {
      toast.error('Please enter an email!');
      return;
    }

    console.log('Newsletter Email:', email);

    // Animate arrow
    gsap.to(arrowRef.current, {
      y: -10,
      duration: 0.2,
      yoyo: true,
      repeat: 1,
      ease: 'power1.inOut',
    });

    const data = {
      firstName: '',
      lastName: '',
      email: email,
      phone: '',
      message: '',
      Name: '',
      image_url: 'https://i.postimg.cc/kgB4Ptj6/Logo.png',
    };

    try {
      await emailjs.send(
        'service_xbvy0sw',
        'template_5ndapnr',
        data,
        's3JXSkbSx1gJ_E2zQ'
      );
      toast.success('Subscribed successfully!');
      setEmail('');
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast.error('Failed to subscribe. Try again later.');
    }
  };

  return (
    <footer className='bg-[#292F43]  text-white px-6 md:px-12 pt-10'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
        {/* Contact Info */}
        <div>
          <h3 className='font-semibold mb-2'>Contact Us</h3>
          <p className='text-sm'>USA Office Address:</p>
          <p className='text-sm'>1 Broadway, Cambridge, MA 02142</p>
          <p className='mt-2 text-sm'>Nigeria Office Address:</p>
          <p className='text-sm'>Ikoyi, Lagos, Nigeria</p>
          <p className='mt-2 text-sm'>Email:</p>
          <p className='text-sm text-purple-300'>info@teklabspace.com</p>
        </div>

        {/* Useful Links */}
        <div className='relative'>
          {/* Circle Spot */}
          <div className='absolute w-[74px] h-[74px] hidden md:-left-[40%] top-[20%] bg-white blur-[65.95px] rounded-full'></div>{' '}
          <div className='absolute w-[74px] h-[74px] hidden md:left-[343px] top-[90px] bg-white blur-[65.95px] rounded-full'></div>
          <h3 className='font-semibold mb-2'>Useful Links</h3>
          <ul className='space-y-1 text-sm'>
            <li>
              <Link href='/researcher' className='hover:underline'>
                How it works (Researchers)
              </Link>
            </li>
            <li>
              <Link href='/safehouse' className='hover:underline'>
                How it works (Company)
              </Link>
            </li>
            <li>
              <Link
                href='https://apps.teklabspace.com/login'
                className='hover:underline'
              >
                Hall of Fame
              </Link>
            </li>
            <li>
              <Link href='/hackcollage' className='hover:underline'>
                Learn to Hack
              </Link>
            </li>
            <li>
              <Link href='/hackcollage' className='hover:underline'>
                Hack Collage
              </Link>
            </li>
            <li>
              <Link href='/safehouse' className='hover:underline'>
                Safe House
              </Link>
            </li>
          </ul>
        </div>

        {/* Company Info */}
        <div>
          <h3 className='font-semibold mb-2'>TEKLABSPACE</h3>
          <ul className='space-y-1 text-sm'>
            <li>
              <Link href='/about' className='hover:underline'>
                About Us
              </Link>
            </li>
            <li>
              <Link href='/career' className='hover:underline'>
                Career
              </Link>
            </li>
            <li>
              <Link href='/code' className='hover:underline'>
                Code of conduct
              </Link>
            </li>
            <li>
              <Link href='/SLA' className='hover:underline'>
                SLA
              </Link>
            </li>
            <li>
              <Link href='/termsandcondition' className='hover:underline'>
                Terms and Conditions
              </Link>
            </li>
            <li>
              <Link href='/legalinfo' className='hover:underline'>
                Legal Information
              </Link>
            </li>
            <li>
              <Link href='/contact' className='hover:underline'>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        {/* Newsletter */}
        <div className='bg-[#3C2A5F] rounded-lg p-6 flex flex-col gap-3'>
          <h3 className='font-semibold text-lg'>Stay Connected</h3>

          <form
            onSubmit={handleSubmit}
            className='flex flex-col items-stretch sm:items-center gap-2 w-full'
          >
            <div className='px-4 flex bg-white  justify-between items-center py-2 rounded-md text-black flex-1 w-full'>
              <input
                type='email'
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder='Enter your email'
                className='outline-0 w-full'
              />
              <img
                src='arrow.svg'
                alt='Send'
                onClick={handleSubmit}
                className='cursor-pointer'
                ref={arrowRef}
              />
            </div>
          </form>
          <p className='text-xs text-gray-300'>
            Join over 500+ people who receive our weekly newsletters
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className='mt-10 border-t border-gray-600 flex flex-col md:flex-row items-center justify-between text-sm '>
        <div className='flex items-center  gap-2 mb-4 md:mb-0'>
          <img src='Logo.png' alt='logo' className='object-cover w-20' />
        </div>
        <div className='flex text=[#FFFFFF] gap-6  md:mb-0'></div>
        <div className='flex gap-4'>
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target='_blank'
              rel='noopener noreferrer'
              className='hover:opacity-80 transition-opacity'
            >
              <img src={link.src} alt={link.alt} className='w-8 h-8' />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
