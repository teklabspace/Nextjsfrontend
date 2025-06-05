'use client';

import Footer from '@/components/Footer';
import MetaTags from '@/components/MetaTags';
import Navbar from '@/components/Navbar';
import { usePathname } from 'next/navigation';

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();

  const validPaths = [
    '/',
    '/company',
    '/researcher',
    '/safehouse',
    '/hackcollage',
    '/contact',
  ];

  const isUnknownPath = !validPaths.includes(pathname);

  return (
    <>
      {!isUnknownPath && <Navbar />}
      <MetaTags page='home' />

      <main className='flex-grow '>{children}</main>
      {!isUnknownPath && <Footer />}
    </>
  );
}
