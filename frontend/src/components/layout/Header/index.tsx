'use client';

import { Fragment, useState } from 'react';

import { menuHeaderData } from '@/data/header';
import Logo from './Logo';
import MenuItem from './MenuItem';

export default function Header() {
  const [orientation] = useState<'vertical' | 'horizontal'>('vertical');
  return (
    <header className='bg-gradient-to-b from-beige from-50% to-beige/50 to-50%'>
      <div className='absolute left-0 right-0 mx-auto h-10 content-view-box'>
        {/* For upper row content */}
      </div>
      <nav className='flex h-20 flex-row flex-nowrap items-end justify-between gap-3 content-view-box'>
        {menuHeaderData.map((item, index) => {
          const menuItem =
            item.name === 'Home' ? <Logo orientation={orientation} /> : <MenuItem {...item} />;
          return <Fragment key={index}>{menuItem}</Fragment>;
        })}
      </nav>
    </header>
  );
}
