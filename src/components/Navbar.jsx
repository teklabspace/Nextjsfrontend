'use client';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import TransitionLink from '../app/utils/TransitionLink.jsx';

gsap.registerPlugin(ScrollTrigger);

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Company', path: '/company' },
  { label: 'Researcher', path: '/researcher' },
  { label: 'Safe House', path: '/safehouse' },
  { label: 'Hack Collage', path: '/hackcollage' },
  { label: 'Contact Us', path: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const navbarRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const showNav = gsap
      .fromTo(navbarRef.current, { opacity: 0 }, { opacity: 1, duration: 0.4 })
      .progress(1);

    ScrollTrigger.create({
      start: 'top top',
      end: 'max',
      onUpdate: self => {
        self.direction === -1 ? showNav.play() : showNav.reverse();
      },
    });

    if (isMobileMenuOpen) {
      gsap.fromTo(
        mobileMenuRef.current,
        { scale: 0.2, opacity: 0, transformOrigin: 'center center' },
        { scale: 1, opacity: 1, duration: 0.7, ease: 'power4.out' }
      );
      gsap.fromTo(
        '.mobile-nav-item',
        { y: -50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.12,
          ease: 'power4.out',
          delay: 0.4,
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav
      ref={navbarRef}
      className='flex justify-between items-center px-4 sm:px-8 shadow-md bg-[#292F43] fixed w-full top-0 z-50'
    >
      <div className='text-lg sm:text-xl font-bold text-[#FFFFFF]'>
        <Link href='/'>
          <img src='Logo.svg' className='h-auto ' alt='Logo' />
        </Link>
      </div>

      <div className='hidden lg:flex items-center gap-4'>
        {navItems.map(({ label, path }) => (
          <TransitionLink
            key={path}
            href={path}
            className={`hover:text-[#FFFFFF] font-inter transition-colors duration-300 text-sm lg:text-base ${
              pathname === path
                ? 'text-[#B70AC1] font-semibold border-b border-[#B70AC1]'
                : 'text-[#FFFFFF]'
            }`}
            style={
              pathname === path
                ? { textShadow: '0px 4px 4px rgba(0, 0, 0, 0.41)' }
                : {}
            }
          >
            {label}
          </TransitionLink>
        ))}
        <Link
          href='/login'
          className='text-[#292F43] rounded-full font-semibold px-4 lg:px-8 py-1.5  bg-[#FFFFFF] hover:bg-[#7B2EA8] hover:text-[#FFFFFF] transition-colors duration-300 text-sm lg:text-base'
        >
          Login
        </Link>
        <Link
          href='/signup'
          className='text-[#FFFFFF] rounded-full font-semibold px-4 lg:px-8 py-1.5  bg-[#7B2EA8] hover:bg-[#FFFFFF] hover:text-[#292F43] transition-colors duration-300 text-sm lg:text-base'
        >
          Signup
        </Link>
      </div>

      <div className='lg:hidden'>
        <button
          onClick={toggleMobileMenu}
          className='text-[#FFFFFF] focus:outline-none'
          aria-label='Toggle mobile menu'
        >
          <svg
            className='w-5 h-5'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M6 18L18 6M6 6l12 12'
              />
            ) : (
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h16m-7 6h7'
              />
            )}
          </svg>
        </button>
      </div>

      {isMobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          className=' fixed top-[58px] left-0 right-0 w-full h-[calc(100vh-64px)] bg-[#292F43] flex flex-col items-center px-4 pt-6 z-40'
        >
          {navItems.map(({ label, path }) => (
            <TransitionLink
              key={path}
              href={path}
              className={`mobile-nav-item text-[#FFFFFF] text-lg mt-4 py-4 w-full text-center hover:bg-[#7B2EA8]/10 transition-colors duration-300 ${
                pathname === path ? 'font-semibold text-[#FFFFFF]' : ''
              }`}
              onClick={toggleMobileMenu}
            >
              <span
                className={`inline-block ${
                  pathname === path ? 'border-b-2 border-[#7B2EA8]' : ''
                }`}
              >
                {label}
              </span>
            </TransitionLink>
          ))}
          <Link
            href='https://apps.teklabspace.com/login'
            className='mobile-nav-item text-[#292F43] mt-4 text-lg py-2 w-11/12 max-w-xs
 rounded-full text-center bg-[#FFFFFF] hover:bg-[#7B2EA8] hover:text-[#FFFFFF] transition-colors duration-300'
            onClick={toggleMobileMenu}
          >
            Login
          </Link>
          <Link
            href='https://apps.teklabspace.com/signup'
            className='mobile-nav-item text-[#FFFFFF] mt-6 text-lg py-2 w-11/12 max-w-xs
 rounded-full text-center bg-[#7B2EA8] hover:bg-[#FFFFFF] hover:text-[#292F43] transition-colors duration-300'
            onClick={toggleMobileMenu}
          >
            Signup
          </Link>
        </div>
      )}
    </nav>
  );
}
