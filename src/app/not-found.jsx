'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Error({ error, reset }) {
  const router = useRouter();

  useEffect(() => {
    // Check if the error is a 404 (NotFoundError or similar)
    if (error.message.includes('NEXT_NOT_FOUND') || error.statusCode === 404) {
      router.replace('/404'); // Redirect to the 404 page
    }
  }, [error, router]);

  return (
    <div
      className='flex flex-col h-full -mt-10 bg-cover bg-center'
      style={{ backgroundImage: "url('/error landing page.png')" }}
    >
      <main className='flex-grow flex items-center justify-center mt-10'>
        <div className='text-center'>
          <img src='https://fullego.com/errorpage.gif' alt='Error' className='mx-auto' />
          <p className='text-lg text-white mb-6'>
            Uh-oh! We couldn’t find the page you were looking for.
          </p>
          <button className='text-white bg-[#B70AC1] py-2 px-6 rounded-full'>
            Back to Home Page
          </button>
        </div>
      </main>
    </div>
  );
}
