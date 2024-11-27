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
  } = useForm<IReservationForm>();

  const onSubmit = (data: IReservationForm) => {
    console.log(data);
  };

  // console.log(watch('name'));

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='grid grid-cols-10 gap-4'>
      <Input
        type='text'
        placeholder='Tên'
        className='col-span-5'
        {...register('name')}
      />
      <Input
        type='email'
        placeholder='Email'
        className='col-span-5'
        {...register('email')}
      />
      <Select
        className='col-span-full'
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
      {/* <Input
        type='option'
        placeholder='Chi nhánh'
        className='col-span-full'
        {...register('branch')}
      /> */}
      <Input
        type='tel'
        placeholder='Số điện thoại'
        className='col-span-4'
        {...register('phone')}
      />
      <Input
        type='date'
        placeholder='Ngày'
        className='col-span-2'
        {...register('date')}
      />
      <Input
        type='time'
        placeholder='Thời gian'
        className='col-span-2'
        {...register('time')}
      />
      <Input
        type='number'
        placeholder='Số lượng khách'
        className='col-span-2'
        {...register('customerCount')}
      />
      <Textarea
        placeholder='Ghi chú'
        className='col-span-full h-28 resize-none'
        {...register('note')}
      />
      {errors.email && <p>Email is required!</p>}
      <div className='col-span-full flex'>
        <Button
          type='submit'
          className='mx-auto px-10'>
          Đặt ngay
        </Button>
      </div>
    </form>
  );
}
