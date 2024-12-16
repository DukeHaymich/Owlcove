'use client';

import React from 'react';
import Form from './Form';
import ContactInfo from './ContactInfo';
import { useInView } from 'react-intersection-observer';

export default function Reservation() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.75 });

  return (
    <section
      ref={ref}
      className='scroll-mt-32 bg-cream-100 px-5 py-10'
      id='reservations'>
      <div className='flex gap-10 content-view-box'>
        <div className='my-auto flex-1'>
          <h1 className='text-center font-serif font-medium text-primary text-heading'>Đặt chỗ</h1>
          <div className='mx-auto mb-8 mt-5 h-px w-1/6 bg-primary' />
          <Form inView={inView} />
        </div>
        <ContactInfo inView={inView} />
      </div>
    </section>
  );
}
