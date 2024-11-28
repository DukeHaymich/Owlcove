import React from 'react';
import Form from './Form';

export default function Reservation() {
  return (
    <section
      className='scroll-mt-20 bg-cream-100 px-5 py-10'
      id='reservations'>
      <div className='content-view-box'>
        <h1 className='text-center font-serif font-medium text-primary text-heading'>Đặt chỗ</h1>
        <div className='mx-auto mb-8 mt-5 h-px w-1/6 bg-primary' />
        <Form />
      </div>
    </section>
  );
}
