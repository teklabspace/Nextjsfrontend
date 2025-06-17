'use client';
import Footer from '@/components/Footer';
import MetaTags from '@/components/MetaTags';
import Navbar from '@/components/Navbar';
import gsap from 'gsap';
import { useEffect } from 'react';

const page = () => {
  useEffect(() => {
    gsap.from('.animate-header', {
      opacity: 100,
      y: 50,
      duration: 1,
      ease: 'power2.out',
    });

    gsap.from('.animate-text', {
      opacity: 100,
      y: 30,
      duration: 1.2,
      delay: 0.2,
      ease: 'power2.out',
    });

    gsap.from('.animate-image', {
      opacity: 100,
      scale: 0.8,
      duration: 1.2,
      delay: 0.4,
      ease: 'back.out(1.7)',
    });

    gsap.from('.animate-buttons', {
      opacity: 100,
      x: 100,
      duration: 1,
      delay: 0.6,
      stagger: 0.2,
      ease: 'power2.out',
    });
  }, []);

  return (
    <div>
      <MetaTags page='termsandcondition' />
      <Navbar />

      <section
        className='w-full min-h-screen  flex flex-col justify-center items-center bg-no-repeat bg-center bg-cover'
        style={{ backgroundImage: "url('/termspagebg.png')" }}
      >
        <div className='grid grid-cols-1 mt-20 md:grid-cols-2 gap-6 px-4 sm:px-6 md:px-10 max-w-7xl w-full mb-12'>
          <div className='flex flex-col justify-center'>
            <h2 className='text-[#292F43] text-xl md:text-4xl text-center md:text-start mt-10 md:mt-0 font-semibold mb-4 animate-header'>
              TERMS <span className='text-[#B70AC1]'>&</span>{' '}
              <br className='hidden md:flex' /> CONDITION
            </h2>
            <p className='text-[#292F43] text-base animate-text'>
              To ensure that we serve you better, we created our T & C. Kindly
              read through and agree before signing up to our services This
              Service Provider Agreement (the “Agreement”) sets forth terms
              under which the service provider (“Service Provider”) shall, at
              the request of Teklabspace Inc. (“Teklabspace”) provide
              professional services either directly to Teklabspace or to
              customers of Teklabspace on Teklabspace’s behalf.
            </p>
          </div>
          <div className='flex justify-center  items-center'>
            <div className='relative w-full max-w-[300px] border-[#B70AC1] p-2 border sm:max-w-[400px] aspect-square animate-image'>
              <img
                src='https://fullego.com/Digitalguardian.gif'
                alt='Team illustration'
                className='w-full h-full object-cover'
              />
            </div>
          </div>
        </div>
      </section>

      <div className='bg-[#292F43] m-4 p-2 md:p-20 text-white'>
        <div className=''>
          <h2 className='text-2xl font-semibold animate-header'>
            Your Agreement
          </h2>
        </div>

        {/* Scrollable Content */}
        <div className='flex-1 overflow-y-auto custom-scrollbar h-[100vh]'>
          <p className='text-base leading-relaxed animate-text'>
            <span className='font-bold text-lg mt-2'>
              Got it! Here’s a Terms and Conditions agreement written in
              paragraph form that includes all the key points from your Service
              Level Agreement (SLA) UI:
            </span>
            <br />
            <br />
            By accessing or using any services provided by Teklabspace, you
            agree to be bound by the following terms and conditions. Teklabspace
            provides its services with professionalism and in accordance with
            mutually agreed standards and timelines. The service provider may
            not subcontract any part of the services without Teklabspace’s prior
            written consent. Teklabspace reserves the right to modify, update,
            or change services, with clients being informed of significant
            changes in advance. In some cases, services may include the use of
            third-party tools or open-source materials, which will be handled
            responsibly and in compliance with relevant licenses. Teklabspace
            represents that all services will be performed diligently and will
            conform to the specifications agreed upon. Any inventions,
            deliverables, or original work created during service provision
            shall remain the intellectual property of Teklabspace unless
            otherwise stated in writing. Clients are responsible for making
            timely payments as outlined in the agreement. Failure to do so may
            result in suspension or termination of services. Either party may
            terminate the agreement with written notice, provided that all
            obligations up to the date of termination are honored. Teklabspace
            operates as an independent contractor and is not an employee,
            partner, or agent of the client. Both parties agree to maintain the
            confidentiality of any sensitive or proprietary information shared
            during the course of their engagement. If Teklabspace grants access
            to its systems or software, such access must be used responsibly and
            securely.shall remain the intellectual property of Teklabspace
            unless otherwise stated in writing. Clients are responsible for
            making timely payments as outlined in the agreement. Failure to do
            so may result in suspension or termination of services. Either party
            may terminate the agreement with written notice, provided that all
            obligations up to the date of termination are honored. Teklabspace
            operates as an independent contractor and is not an employee,
            partner, or agent of the client. Both parties agree to maintain the
            confidentiality of any sensitive or proprietary information shared
            during the course of their engagement. If Teklabspace grants access
            to its systems or software, such access must be used responsibly and
            securely.shall remain the intellectual property of Teklabspace
            unless otherwise stated in writing. Clients are responsible for
            making timely payments as outlined in the agreement. Failure to do
            so may result in suspension or termination of services. Either party
            may terminate the agreement with written notice, provided that all
            obligations up to the date of termination are honored. Teklabspace
            operates as an independent contractor and is not an employee,
            partner, or agent of the client. Both parties agree to maintain the
            confidentiality of any sensitive or proprietary information shared
            during the course of their engagement. If Teklabspace grants access
            to its systems or software, such access must be used responsibly and
            securely.shall remain the intellectual property of Teklabspace
            unless otherwise stated in writing. Clients are responsible for
            making timely payments as outlined in the agreement. Failure to do
            so may result in suspension or termination of services. Either party
            may terminate the agreement with written notice, provided that all
            obligations up to the date of termination are honored. Teklabspace
            operates as an independent contractor and is not an employee,
            partner, or agent of the client. Both parties agree to maintain the
            confidentiality of any sensitive or proprietary information shared
            during the course of their engagement. If Teklabspace grants access
            to its systems or software, such access must be used responsibly and
            securely.shall remain the intellectual property of Teklabspace
            unless otherwise stated in writing. Clients are responsible for
            making timely payments as outlined in the agreement. Failure to do
            so may result in suspension or termination of services. Either party
            may terminate the agreement with written notice, provided that all
            obligations up to the date of termination are honored. Teklabspace
            operates as an independent contractor and is not an employee,
            partner, or agent of the client. Both parties agree to maintain the
            confidentiality of any sensitive or proprietary information shared
            during the course of their engagement. If Teklabspace grants access
            to its systems or software, such access must be used responsibly and
            securely.
          </p>
        </div>
        {/* Buttons */}
        <div className='p-4 hidden border-t border-gray-700 flex justify-end gap-3 animate-buttons'>
          <button className='px-4 py-2 text-white'>Cancel</button>
          <button className='px-4 py-2 bg-white text-[#292F43] rounded'>
            Agree
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
