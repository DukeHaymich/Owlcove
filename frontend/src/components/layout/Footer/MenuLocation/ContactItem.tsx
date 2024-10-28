import React from 'react';
import Image from 'next/image';

import LocationIcon from '@/public/images/svg/location-icon.svg';
import PhoneIcon from '@/public/images/svg/phone-icon.svg';
import { IContactItem } from '@/utils/type/footer';
import { format_phone_number } from '@/utils/helpers';

type ContactItemProps = IContactItem & {
  index: number;
};

export default function ContactItem({ address, phone, index }: ContactItemProps) {
  return (
    <div className='mb-5 space-y-1 last:mb-0'>
      <p className='font-semibold underline'>Chi nhánh {index}</p>
      <div className='block space-x-1 align-middle tracking-wide'>
        <Image
          src={LocationIcon}
          alt='location-icon'
          className='inline'
        />
        <span className='align-middle'>{address}</span>
      </div>
      <div className='block space-x-1 align-middle'>
        <Image
          src={PhoneIcon}
          alt='phone-icon'
          className='inline'
        />
        <span className='align-middle'>{format_phone_number(phone)}</span>
      </div>
    </div>
  );
}
