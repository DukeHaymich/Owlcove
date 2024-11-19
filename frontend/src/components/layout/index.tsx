import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Link from 'next/link';

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <Link
        className='absolute z-skip-navigation h-0 overflow-hidden bg-cream-300 px-10 text-center font-medium leading-10 text-[#0F4970] focus:h-10'
        href='#main-content'>
        Đi đến nội dung chính
      </Link>
      <Header />
      <main
        id='main-content'
        className='bg-cream-100'>
        {children}
      </main>
      <Footer />
    </>
  );
}
