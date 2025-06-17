import LayoutWrapper from '@/components/LayoutWrapper';
import { Inter } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import './globals.css';

// Configure the Inter font with the same settings as your Google Fonts URL
const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  variable: '--font-inter',
  display: 'swap',
});
export const runtime = 'edge';

export const metadata = {
  title: 'Teklabspace',
  description: 'Bug Bounty/VDP Platform',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Toaster position='bottom-right' reverseOrder={false} />
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
