'use client';
import { Input } from '@/components/common/Input';
import { Select, SelectOption } from '@/components/common/Select';
import { reservationApi } from '@/services/reservationApi';
import { IContactItem } from '@/utils/type/footer';
import { IReservationForm } from '@/utils/type/reservation';
import clsx from 'clsx';
import { useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';

interface IControlPanelProps {
  locationData: IContactItem[];
  setReservations: React.Dispatch<React.SetStateAction<IReservationForm[]>>;
}

interface IControlForm {
  date: string;
  branch: string;
}

export default function ControlPanel({ locationData, setReservations }: IControlPanelProps) {
  const {
    handleSubmit,
    register,
    watch,
    // formState: { errors },
  } = useForm<IReservationForm>({
    defaultValues: {
      customerCount: 0,
    },
  });

  const today = new Date().toISOString().split('T')[0];

  const onSubmit = useCallback(
    async ({ date, branch }: IControlForm) => {
      console.log('Called!');
      if (!date || !branch) return;
      const reservations = await reservationApi().getReservationByDateAndBranch(date, branch);
      setReservations(reservations);
    },
    [setReservations]
  );

  // Submit form on change, refresh every 20 seconds
  useEffect(() => {
    let refreshTimer: NodeJS.Timeout;
    const subscription = watch(() => {
      handleSubmit(onSubmit)();
      clearTimeout(refreshTimer);
      refreshTimer = setInterval(() => {
        handleSubmit(onSubmit)();
      }, 30000);
    });
    return () => {
      subscription.unsubscribe();
      clearTimeout(refreshTimer);
    };
  }, [handleSubmit, watch, onSubmit]);

  return (
    <>
      <form className='grid grid-cols-9 gap-4'>
        <Input
          type='date'
          label='Ngày'
          containerClassName={clsx('col-span-2')}
          min={today}
          defaultValue={today}
          {...register('date', { required: true, min: today })}
        />
        <Select
          label='Địa điểm'
          containerClassName={clsx('col-span-7')}
          defaultValue=''
          {...register('branch', { required: true, pattern: /^(?!\s*$).+/ })}>
          <SelectOption
            disabled
            value=''
            className='hidden'>
            -- Chọn chi nhánh --
          </SelectOption>
          {locationData.map((item, index) => {
            return (
              <SelectOption
                key={index}
                value={item.address}>
                {item.address}
              </SelectOption>
            );
          })}
        </Select>
      </form>
      <div className='my-5'>
        <h3 className='font-serif !font-medium text-primary text-heading-3'>Tình trạng:</h3>
        <div className='mt-2 space-x-12'>
          <div className='inline-block space-x-2'>
            <div className='inline-block aspect-square h-6 w-auto bg-primary align-middle' />
            <span className='text-primary'>Còn bàn</span>
          </div>
          <div className='inline-block space-x-2'>
            <div className='inline-block aspect-square h-6 w-auto border border-primary-lighter align-middle' />
            <span className='text-primary'>Hết chỗ</span>
          </div>
        </div>
      </div>
    </>
  );
}
