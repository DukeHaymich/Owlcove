import { Button } from '@/components/common/Button';
import { Input } from '@/components/common/Input';
import { Select, SelectOption } from '@/components/common/Select';
import { Textarea } from '@/components/common/Textarea';
import { maxGuestsPerTable } from '@/data/miscellaneous';
import { reservationApi } from '@/services/reservationApi';
import { IContactItem } from '@/utils/type/footer';
import { IReservationForm } from '@/utils/type/reservation';
import clsx from 'clsx';
import { useForm } from 'react-hook-form';

interface IFormProps {
  inView: boolean;
  locationData: IContactItem[];
  timeSlots: string[];
}

export default function Form({ inView, locationData, timeSlots }: IFormProps) {
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

  const onSubmit = async (data: IReservationForm) => {
    await reservationApi().postReservation(data);
    console.log('Sent:', data);
  };

  const today = new Date().toISOString().split('T')[0];

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
        {...register('name', { required: true, minLength: 4 })}
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
        min={today}
        defaultValue={today}
        containerClassName={clsx(
          'col-span-4 transition-all duration-500 delay-150',
          inView ? 'opacity-100' : 'opacity-0 -translate-x-10'
        )}
        {...register('date', { required: true, min: today })}
      />
      <Select
        label='Thời gian'
        containerClassName={clsx(
          'col-span-2 transition-all duration-500 delay-150',
          inView ? 'opacity-100' : 'opacity-0 -translate-x-10'
        )}
        defaultValue=''
        {...register('time', { required: true, pattern: /^(?!\s*$).+/ })}>
        <SelectOption
          disabled
          value=''
          className='hidden'>
          --:--
        </SelectOption>
        {timeSlots.map((item, index) => {
          return (
            <SelectOption
              key={index}
              value={item}>
              {item}
            </SelectOption>
          );
        })}
      </Select>
      <Input
        type='number'
        label='Số lượng khách'
        containerClassName={clsx(
          'col-span-3 transition-all duration-500 delay-150',
          inView ? 'opacity-100' : 'opacity-0 -translate-x-10'
        )}
        {...register('customerCount', { required: true, min: 1, max: maxGuestsPerTable })}
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
