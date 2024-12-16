'use client';

import React from 'react';
import Image from 'next/image';
import BorderFrame from '@/public/images/frame-small.png';
import clsx from 'clsx';
import { openHours } from '@/data/miscellaneous';
import MenuLocation from '@/components/layout/Footer/MenuLocation';
import MenuMedia from '@/components/layout/Footer/MenuMedia';
import { sanitizeHTML } from '@/utils/helpers/security';

interface IContactInfoProps {
  inView: boolean;
}

export default function ContactInfo({ inView }: IContactInfoProps) {
  return (
    <div
      className={clsx(
        'relative flex-1 overflow-hidden transition-all duration-1000',
        inView ? 'opacity-100' : 'translate-x-10 opacity-0'
      )}>
      <div className='absolute inset-x-12 inset-y-10 text-primary'>
        <h2 className='text-center font-serif font-medium text-heading'>Liên hệ</h2>
        <div className='mx-auto my-5 h-px w-1/6 bg-primary' />
        <div>
          <MenuLocation />
          <div className='mt-4 inline-block w-1/2 align-top'>
            <h3 className='font-semibold underline'>Thời gian mở cửa:</h3>
            <div
              className='text-wrap'
              dangerouslySetInnerHTML={{ __html: sanitizeHTML(openHours) }}
            />
          </div>
          <div className='mt-4 inline-block w-1/2 pl-4 align-top'>
            <h3 className='text-center font-semibold underline'>Hoặc nhắn tin qua:</h3>
            <MenuMedia />
          </div>
        </div>
      </div>
      <Image
        src={BorderFrame}
        alt='frame'
        className={clsx('transition-opacity duration-700', inView ? 'opacity-100' : 'opacity-0')}
      />
    </div>
  );
}
