import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

export default function layout({ children }: LayoutProps) {
  return <div className='mt-10'>{children}</div>;
}
