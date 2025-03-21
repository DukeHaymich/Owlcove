'use client';

import React, { useEffect, useState } from 'react';
import Form from './Form';
import ContactInfo from './ContactInfo';
import { useInView } from 'react-intersection-observer';
import { reservationApi } from '@/services/reservationApi';
import { footerData } from '@/data/footer';
import { IContactItem } from '@/utils/type/footer';

export default function Reservation() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [reservationSlots, setReservationSlots] = useState<string[]>([]);
  const [locationData, setLocationData] = useState<IContactItem[]>([]);

  // Fetch data
  useEffect(() => {
    const getSlots = async () => {
      const slots = await reservationApi().getSlots();
      setReservationSlots(slots);
    };
    const getLocationData = async () => {
      const data = footerData.locations;
      setLocationData(data);
    };
    getSlots();
    getLocationData();
  }, []);

  // Loading state
  useEffect(() => {
    setIsLoading(reservationSlots.length === 0 || locationData.length === 0);
  }, [reservationSlots, locationData]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <section
      ref={ref}
      className='scroll-mt-32 bg-cream-100 px-5 py-10'
      id='reservations'>
      <div className='flex gap-10 content-view-box'>
        <div className='my-auto flex-1'>
          <h1 className='text-center font-serif font-medium text-primary text-heading'>Đặt chỗ</h1>
          <div className='mx-auto mb-8 mt-5 h-px w-1/6 bg-primary' />
          <Form
            inView={inView}
            locationData={locationData}
            timeSlots={reservationSlots}
          />
        </div>
        <ContactInfo inView={inView} />
      </div>
    </section>
  );
}
