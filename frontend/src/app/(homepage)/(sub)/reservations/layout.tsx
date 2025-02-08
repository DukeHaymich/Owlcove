import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <div className='h-16 w-full bg-transparent' />
      {children}
    </>
  );
}
