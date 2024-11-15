'use client';

import { sanitizeHTML } from '@/utils/helpers/security';
import { IAboutItem } from '@/utils/type/landing';
import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';

import BorderFrame from '@/public/images/frame.png';
import { useInView } from 'react-intersection-observer';

interface IItemProps extends IAboutItem {
  imgPosition: 'left' | 'right';
}

export default function Item({ imgPosition, title, description, img }: IItemProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  return (
    <div
      className={clsx(
        'flex gap-10 content-view-box',
        imgPosition === 'left' ? 'flex-row' : 'flex-row-reverse'
      )}>
      <div
        className={clsx(
          'relative flex-1 overflow-clip transition-all duration-700',
          inView
            ? 'opacity-100'
            : imgPosition === 'left'
              ? '-translate-x-10 opacity-0'
              : 'translate-x-10 opacity-0'
        )}>
        <Image
          src={img}
          alt={title}
          fill
          className='object-cover object-center'
        />
      </div>
      <div className='relative w-96'>
        <div
          ref={ref}
          className='absolute mx-10 my-16 align-middle'>
          <h1
            className={clsx(
              'text-primary transition-opacity duration-700 text-heading',
              inView ? 'opacity-100' : 'opacity-0'
            )}>
            {title}
          </h1>
          <div
            className={clsx(
              'delay-250 my-5 h-px w-1/6 bg-secondary transition-all duration-700',
              inView ? 'opacity-100' : 'translate-x-10 opacity-0'
            )}
          />
          <div
            className={clsx(
              'text-secondary transition-opacity delay-500 duration-700 text-body',
              inView ? 'opacity-100' : 'opacity-0'
            )}
            dangerouslySetInnerHTML={{ __html: sanitizeHTML(description) }}
          />
        </div>
        <Image
          src={BorderFrame}
          alt='frame'
          className={clsx('transition-opacity duration-700', inView ? 'opacity-100' : 'opacity-0')}
        />
      </div>
    </div>
  );
}
