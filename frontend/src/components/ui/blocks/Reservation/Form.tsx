'use client';

import { Button } from '@/components/common/Button';
import { Input } from '@/components/common/Input';
import { Select, SelectOption } from '@/components/common/Select';
import { Textarea } from '@/components/common/Textarea';
import { footerData } from '@/data/footer';
import { IReservationForm } from '@/utils/type/reservation';
import clsx from 'clsx';
import React, { useMemo } from 'react';
import { useForm } from 'react-hook-form';

const locationData = footerData.locations;

interface IFormProps {
  inView: boolean;
}

export default function Form({ inView }: IFormProps) {
  const {
    handleSubmit,
    register,
    // watch,
    formState: { errors },
  } = useForm<IReservationForm>({
    defaultValues: {
      customerCount: 0,
    },
  });

  const onSubmit = (data: IReservationForm) => {
    console.log(data);
  };

  const today = useMemo(() => {
    const date = new Date();
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  }, []);

  // console.log('OKaY');
  // console.log(watch('name'));

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='grid grid-cols-9 gap-4'>
      <Input
        type='text'
        label='Tên'
        containerClassName={clsx(
          'col-span-5 transition-all duration-500',
          inView ? 'opacity-100' : 'opacity-0 -translate-x-10'
        )}
        {...register('name', { required: true, minLength: 2 })}
      />
      <Input
        type='tel'
        label='Số điện thoại'
        containerClassName={clsx(
          'col-span-4 transition-all duration-500',
          inView ? 'opacity-100' : 'opacity-0 -translate-x-10'
        )}
        {...register('phone', { required: true, minLength: 7, pattern: /[0-9\s]{7,20}/ })}
      />
      <Input
        type='date'
        label='Ngày hẹn'
        containerClassName={clsx(
          'col-span-3 transition-all duration-500 delay-150',
          inView ? 'opacity-100' : 'opacity-0 -translate-x-10'
        )}
        {...register('date', { required: true, min: today })}
      />
      <Input
        type='time'
        label='Thời gian'
        containerClassName={clsx(
          'col-span-3 transition-all duration-500 delay-150',
          inView ? 'opacity-100' : 'opacity-0 -translate-x-10'
        )}
        {...register('time', { required: true })}
      />
      <Input
        type='number'
        label='Số lượng khách'
        containerClassName={clsx(
          'col-span-3 transition-all duration-500 delay-150',
          inView ? 'opacity-100' : 'opacity-0 -translate-x-10'
        )}
        {...register('customerCount', { required: true, min: 1 })}
      />
      <Select
        label='Địa điểm'
        containerClassName={clsx(
          'col-span-full transition-all duration-500 delay-300',
          inView ? 'opacity-100' : 'opacity-0 -translate-x-10'
        )}
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
      <Textarea
        label='Ghi chú'
        containerClassName={clsx(
          'col-span-full h-28 transition-all duration-500 delay-[450ms]',
          inView ? 'opacity-100' : 'opacity-0 -translate-x-10'
        )}
        className='resize-none'
        {...register('note')}
      />
      {errors.phone && <p>Phone is required!</p>}
      <div className='col-span-full mx-auto mt-2'>
        <Button
          type='submit'
          className={clsx(
            'rounded-lg transition-opacity delay-700 duration-500',
            inView ? 'opacity-100' : 'opacity-0'
          )}>
          Đặt ngay
        </Button>
      </div>
    </form>
  );
}
