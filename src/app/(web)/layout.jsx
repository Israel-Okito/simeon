
import { Poppins } from 'next/font/google';

import './globals.css';
import Footer from '@/components/Footer/Footer';
import { NextAuthProvider } from '@/components/AuthProvider/AuthProvider';
import ThemeProvider from '@/components/ThemeProvider/ThemeProvider';
import Toast from '@/components/Toast/Toast';
import Header from '@/components/Header/Header';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  style: ['italic', 'normal'],
  variable: '--font-poppins',
});

export const metadata= {
  title: 'Simeon Hotel Management App',
  description: 'Découvrer le meilleur hotel ',
};

export default function RootLayout({children}) {
  return (
    <html lang='en'>
      <head>
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css'
          crossOrigin='anonymous'
        />
      </head>
      <body className={poppins.className}>
        
         <NextAuthProvider>
          <ThemeProvider>
            <Toast/>
            <main className='font-normal'>
              <Header/>
              {children}
              <Footer />
            </main>
          </ThemeProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
}
