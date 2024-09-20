'use client';

import Logo from '@/components/ui/Logo';
import clsx from 'clsx';
import { useState } from 'react';

import { menuHeaderData } from '@/data/header';

export default function Header() {
  const [orientation, setOrientation] = useState<'vertical' | 'horizontal'>('vertical');
  return (
    <nav className='bg-gradient-to-b from-beige from-50% to-beige/50 to-50%'>
      <div className='absolute left-0 right-0 mx-auto h-10 content-view-box'>
        {/* For upper row content */}
      </div>
      <div className='flex h-20 flex-row flex-nowrap items-end justify-between content-view-box'>
        {menuHeaderData.map((item, index) => {
          const isLogo = item.name === 'Home';
          return (
            <div
              key={index}
              className={clsx(
                'flex justify-center',
                isLogo ? 'self-start' : 'h-10 w-full max-w-[196px] items-center'
              )}>
              {isLogo ? (
                <div className='max-w-fit translate-y-7 rounded-b-[90%] bg-beige px-4 pb-3'>
                  <Logo
                    orientation={orientation}
                    size='medium'
                    animated
                    className='-translate-y-4'
                  />
                </div>
              ) : (
                <p className='text-nowrap font-main font-bold text-primary'>{item.name}</p>
              )}
            </div>
          );
        })}
      </div>
    </nav>
  );
}
