import { IReservationForm } from '@/utils/type/reservation';
import clsx from 'clsx';

interface ITimeSlotProps {
  maxTable: number;
  reservations: IReservationForm[];
  timeSlots: string[];
}

export default function TimeSlot({ maxTable, reservations, timeSlots }: ITimeSlotProps) {
  const occupiedSlots = Array.from(timeSlots, () => {
    return 0;
  });
  // Count reservations
  reservations.forEach((reservations) => {
    const { time } = reservations;
    const slotIndex = timeSlots.indexOf(time);
    // Update current time slot and next time slot (if exists)
    occupiedSlots[slotIndex]++;
    slotIndex + 1 < timeSlots.length && occupiedSlots[slotIndex + 1]++;
  });

  return (
    <div className='grid grid-cols-8 border-l border-t border-primary-lighter'>
      {timeSlots.map((timeSlot: string, index: number) => (
        <div
          key={index}
          className={clsx(
            'outline-3 border-b border-r border-primary-lighter py-3 text-center',
            occupiedSlots[index] < maxTable ? 'bg-primary text-cream-100' : 'text-primary-light'
          )}>
          {timeSlot}
        </div>
      ))}
    </div>
  );
}
