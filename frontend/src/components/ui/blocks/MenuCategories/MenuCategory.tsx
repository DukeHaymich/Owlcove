import { IMenuCategory } from '@/utils/type/menus';
import MenuCard from './MenuCard';
import React from 'react';

interface IMenuCardProps {
  data: IMenuCategory[];
}

export default function MenuCategory({ data }: IMenuCardProps) {
  return (
    <div className='-mx-10 flex flex-wrap justify-center gap-x-20 gap-y-12'>
      {data.map((item, index) => {
        return (
          <MenuCard
            key={index}
            data={item}
            className='w-[calc(100%/3-5rem)]'
          />
        );
      })}
    </div>
  );
}
