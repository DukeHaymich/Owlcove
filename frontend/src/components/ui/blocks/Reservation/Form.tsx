'use client';

import { Button } from '@/components/common/Button';
import { Input } from '@/components/common/Input';
import { Select, SelectOption } from '@/components/common/Select';
import { Textarea } from '@/components/common/Textarea';
import { footerData } from '@/data/footer';
import { IReservationForm } from '@/utils/type/reservation';
import React from 'react';
import { useForm } from 'react-hook-form';

const locationData = footerData.locations;

export default function Form() {
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

  // console.log(watch('name'));

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='grid grid-cols-9 gap-4'>
      <Input
        type='text'
        label='Tên'
        containerClassName='col-span-5'
        {...register('name')}
      />
      <Input
        type='tel'
        label='Số điện thoại'
        containerClassName='col-span-4'
        {...register('phone')}
      />
      <Input
        type='date'
        label='Ngày hẹn'
        containerClassName='col-span-3'
        {...register('date')}
      />
      <Input
        type='time'
        label='Thời gian'
        containerClassName='col-span-3'
        {...register('time')}
      />
      <Input
        type='number'
        label='Số lượng khách'
        containerClassName='col-span-3'
        {...register('customerCount')}
      />
      <Select
        label='Địa điểm'
        containerClassName='col-span-full'
        defaultValue=''
        {...register('branch')}>
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
        containerClassName='col-span-full h-28'
        className='resize-none'
        {...register('note')}
      />
      {errors.phone && <p>Phone is required!</p>}
      <div className='col-span-full mx-auto mt-2'>
        <Button
          type='submit'
          className='px-12 py-6 text-xl'>
          Đặt ngay
        </Button>
      </div>
    </form>
  );
}
