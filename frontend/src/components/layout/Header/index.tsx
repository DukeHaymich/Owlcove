'use client';

import Logo from '@/components/ui/Logo';
import clsx from 'clsx';
import { useState } from 'react';

interface IMenuHeader {
  name: string;
  children: string[];
}

const menuHeaderData: IMenuHeader[] = [
  {
    name: 'Thực đơn',
    children: ['Bình dân', 'Hàn Quốc', 'Đồ ăn nhanh'],
  },
  {
    name: 'Tin tức',
    children: ['Ưu đãi', 'Sự kiện'],
  },
  {
    name: 'Home',
    children: [],
  },
  {
    name: 'Tuyển dụng',
    children: [],
  },
  {
    name: 'Đặt chỗ',
    children: [],
  },
];

export default function Header() {
  const [orientation, setOrientation] = useState<'vertical' | 'horizontal'>('vertical');
  return (
    <nav className='bg-beige'>
      <div className='content-view-box flex h-20 w-full flex-row flex-nowrap items-start justify-center'>
        {menuHeaderData.map((item, index) => {
          return (
            <div
              key={index}
              className='grow basis-0'>
              {item.name === 'Home' ? (
                <div className='max-w-fit translate-y-5 rounded-b-[100%] bg-beige px-5 pb-3'>
                  <Logo
                    orientation={orientation}
                    size='medium'
                    animated
                    className='-translate-y-3'
                  />
                </div>
              ) : (
                <p className='font-label content text-lg font-medium'>{item.name}</p>
              )}
            </div>
          );
        })}
      </div>
    </nav>
  );
}
