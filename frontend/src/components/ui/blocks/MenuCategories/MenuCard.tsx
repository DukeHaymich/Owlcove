'use client';
import { ICategory } from '@/utils/type/menus';
import Image from 'next/image';
import React from 'react';

import PlaceholderImage from '@/public/images/food-placeholder.png';
import { useInView } from 'react-intersection-observer';
import clsx from 'clsx';
import Link from 'next/link';
import { dataURI } from '@/utils/helpers/imageHandler';

interface IMenuCardProps {
  className?: string;
  data: ICategory;
}

export default function MenuCard({ className, data }: IMenuCardProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '100px 0px',
    threshold: 0,
  });

  const imageSrc = data.image.dataBase64
    ? dataURI(data.image.contentType, data.image.dataBase64)
    : PlaceholderImage;

  return (
    <Link
      href={'/menus/#' + data.name}
      ref={ref}
      className={clsx(
        className,
        'group/menu-card transition-all duration-1000',
        inView ? 'opacity-100' : 'translate-y-40 opacity-0'
      )}>
      <div className='relative mb-2.5 aspect-screen w-full overflow-hidden'>
        <Image
          src={imageSrc}
          alt={data.name}
          fill
          className='h-full w-full object-cover object-center transition-all duration-500 group-hover/menu-card:scale-105'
        />
      </div>
      <h2 className='text-center font-serif text-primary transition-all duration-500 text-heading-2 group-hover/menu-card:text-primary-lighter group-hover/menu-card:underline'>
        {data.name}
      </h2>
    </Link>
  );
}
