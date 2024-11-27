import React from 'react';
import Form from './Form';

export default function Reservation() {
  return (
    <section className='bg-cream-100 px-5 py-10'>
      <div className='content-view-box'>
        <h1 className='mb-10 font-serif font-medium text-primary text-heading'>Đặt chỗ</h1>
        <Form />
      </div>
    </section>
  );
}
