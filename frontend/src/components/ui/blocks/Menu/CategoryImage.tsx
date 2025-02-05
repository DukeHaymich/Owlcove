import { dataURI } from '@/utils/helpers/imageHandler';
import { ICategoryImage } from '@/utils/type/menus';
import Image from 'next/image';
import React from 'react';

import PlaceholderImage from '@/public/images/food-placeholder.png';
import clsx from 'clsx';

interface ICategoryImageProps {
  label: string;
  order: number;
  image: ICategoryImage;
}

export default function CategoryImage({ label, order, image }: ICategoryImageProps) {
  const imageSrc = image.dataBase64
    ? dataURI(image.contentType, image.dataBase64)
    : PlaceholderImage;
  return (
    <div
      className={clsx(
        'group/category-image relative aspect-video w-[calc(50%-1rem)] overflow-hidden border-8 border-cream-300 after:absolute after:inset-0 after:m-3.5 after:border-4 after:border-cream-300',
        order % 2 === 0 ? 'float-left -mr-4 ml-8' : 'float-right -ml-4 mr-8'
      )}>
      <h3 className='relative -top-1.5 z-10 mx-auto block w-fit rounded-b-2xl bg-cream-300 px-5 py-1 align-top text-primary text-heading-3'>
        {label}
      </h3>
      <Image
        src={imageSrc}
        alt={label}
        fill
        className='h-full w-full object-cover object-center transition-transform duration-700 group-hover/category-image:scale-110'
      />
    </div>
  );
}
