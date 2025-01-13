'use client';

import { sanitizeHTML } from '@/utils/helpers/security';
import { IAboutItem } from '@/utils/type/landing';
import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';

import BorderFrame from '@/public/images/frame.png';
import { useInView } from 'react-intersection-observer';

interface IItemProps extends IAboutItem {
  imagePosition: 'left' | 'right';
}

export default function Item({ imagePosition, title, description, image }: IItemProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  return (
    <div
      className={clsx(
        'flex gap-10 content-view-box',
        imagePosition === 'left' ? 'flex-row' : 'flex-row-reverse'
      )}>
      <div
        className={clsx(
          'relative flex-1 overflow-clip transition-all duration-700',
          inView
            ? 'opacity-100'
            : imagePosition === 'left'
              ? '-translate-x-10 opacity-0'
              : 'translate-x-10 opacity-0'
        )}>
        <Image
          src={image}
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
              'font-serif text-primary transition-opacity duration-700 text-heading',
              inView ? 'opacity-100' : 'opacity-0'
            )}>
            {title}
          </h1>
          <div
            className={clsx(
              'my-5 h-px w-1/6 bg-primary-light transition-all delay-250 duration-700',
              inView ? 'opacity-100' : 'translate-x-10 opacity-0'
            )}
          />
          <div
            className={clsx(
              'text-primary-light transition-opacity delay-500 duration-700 text-body',
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
