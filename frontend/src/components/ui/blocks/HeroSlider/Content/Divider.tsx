'use client';

import Image from 'next/image';

import HeroDivider from '@/public/images/hero-divider.png';
import { useState } from 'react';
import clsx from 'clsx';

export default function Divider() {
  const [isMount, setIsMount] = useState<boolean>(false);
  return (
    <div
      className={clsx(
        'mx-auto mb-5 h-[58px] max-w-[640px] transition-all duration-[1.5s]',
        isMount ? '[clip-path:inset(0)]' : '[clip-path:inset(0_100%)]'
      )}>
      <Image
        src={HeroDivider}
        alt='divider'
        loading='eager'
        className='min-h-[58px] min-w-[640px]'
        onLoad={() => setIsMount(true)}
      />
    </div>
  );
}
