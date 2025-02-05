import React from 'react';
import Image from 'next/image';

import LocationIcon from '@/public/images/svg/location-icon.svg';
import PhoneIcon from '@/public/images/svg/phone-icon.svg';
import { IContactItem } from '@/utils/type/footer';
import { formatPhoneNumber } from '@/utils/helpers';

type ContactItemProps = IContactItem & {
  index: number;
};

export default function ContactItem({ address, phone, index }: ContactItemProps) {
  return (
    <div className='mb-5 space-y-1 last:mb-0'>
      <p className='font-semibold underline'>Chi nhánh {index}</p>
      <div>
        <Image
          src={LocationIcon}
          alt='location-icon'
          className='float-left mr-1'
        />
        <p className='overflow-hidden align-middle tracking-wide'>{address}</p>
      </div>
      <div>
        <Image
          src={PhoneIcon}
          alt='phone-icon'
          className='float-left mr-1'
        />
        <p className='overflow-hidden align-middle tracking-wide'>{formatPhoneNumber(phone)}</p>
      </div>
    </div>
  );
}
