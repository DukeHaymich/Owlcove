import { IFood } from '@/utils/type/menus';
import clsx from 'clsx';
import React from 'react';

interface IFoodItemProps extends IFood {
  order: number;
}

export default function FoodItem({ name, price, tags, order }: IFoodItemProps) {
  return (
    <div
      className={clsx(
        'box-border inline-flex w-full max-w-[calc(50%-2rem)] flex-col flex-nowrap pb-2 text-justify [&:not(:last-child)]:mb-1.5 [&:not(:last-child)]:border-b [&:not(:last-child)]:border-cream-300/50',
        order % 2 === 0 ? 'ml-8' : 'mr-8'
      )}>
      <div className='flex flex-row justify-between gap-5'>
        <p className='italic text-dark text-heading-3'>{name}</p>
        <p className='whitespace-nowrap text-dark text-heading-3'>
          {price.toLocaleString('en-US')} đồng
        </p>
      </div>
      {tags.length > 0 && (
        <div className='mt-2'>
          <div className='flex flex-wrap gap-2'>
            {tags.map((tag, index) => {
              return (
                <span
                  key={index}
                  className='whitespace-pre rounded-xl bg-cream-300 px-4 py-1 text-sm'>
                  {tag}
                </span>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
