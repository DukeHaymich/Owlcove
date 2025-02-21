'use client';
import { footerData } from '@/data/footer';
import { reservationApi } from '@/services/reservationApi';
import { IContactItem } from '@/utils/type/footer';
import { IReservationForm } from '@/utils/type/reservation';
import { useEffect, useState } from 'react';
import ControlPanel from './ControlPanel';
import TimeSlot from './TimeSlot';
import { miscellaneousApi } from '@/services/miscellaneousApi';

export default function ReservedSchedule() {
  const [reservations, setReservations] = useState<IReservationForm[]>([]);
  const [reservationSlots, setReservationSlots] = useState<string[]>([]);
  const [locationData, setLocationData] = useState<IContactItem[]>([]);
  const [maxTable, setMaxTable] = useState<number>(0);

  // Fetch data
  useEffect(() => {
    const getSlots = async () => {
      const slots = await reservationApi().getSlots();
      setReservationSlots(slots);
    };
    const getLocationData = async () => {
      const locationData = footerData.locations;
      const miscellaneous = await miscellaneousApi().getAll();
      const maxTableData = miscellaneous.maxTable;
      setLocationData(locationData);
      setMaxTable(maxTableData);
    };
    getSlots();
    getLocationData();
  }, []);

  return (
    <section className='bg-cream-200 py-10'>
      <div className='content-view-box'>
        <h1 className='text-center font-serif font-medium text-primary text-heading'>Lịch hẹn</h1>
        <div className='mx-auto mb-8 mt-5 h-px w-1/6 bg-primary' />
        <ControlPanel
          locationData={locationData}
          setReservations={setReservations}
        />
        <TimeSlot
          maxTable={maxTable}
          reservations={reservations}
          timeSlots={reservationSlots}
        />
      </div>
    </section>
  );
}
