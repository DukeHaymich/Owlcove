'use client';
import { IMenuCategory } from '@/utils/type/menu';
import Image from 'next/image';
import React from 'react';

import PlaceholderImage from '@/public/images/food-placeholder.png';
import { useInView } from 'react-intersection-observer';
import clsx from 'clsx';
import Link from 'next/link';

interface IMenuCardProps {
  className?: string;
  data: IMenuCategory;
}

export default function MenuCard({ className, data }: IMenuCardProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0,
  });

  return (
    <Link
      href={data.url}
      ref={ref}
      className={clsx(
        className,
        'group/menu-card transition-all duration-1000',
        inView ? 'opacity-100' : 'translate-y-40 opacity-0'
      )}>
      <div className='aspect-screen relative mb-2.5 w-full overflow-hidden'>
        <Image
          src={data.img ?? PlaceholderImage}
          alt={data.name}
          className='h-full w-full object-cover object-center transition-all duration-500 group-hover/menu-card:scale-105'
        />
      </div>
      <h2 className='text-heading-2 group-hover/menu-card:text-primary-lighter text-center font-serif text-primary transition-all duration-500 group-hover/menu-card:underline'>
        {data.name}
      </h2>
    </Link>
  );
}
