import Image from 'next/image';
import React from 'react';

import logoHorizontalPath from '@/public/images/logo-horizontal.png';
import logoVerticalPath from '@/public/images/logo-vertical.png';
import { containerClasses, logoClasses } from './classes';
import clsx from 'clsx';
import Link from 'next/link';

interface LogoProps {
  size?: 'small' | 'medium' | 'large';
  orientation?: 'vertical' | 'horizontal';
  animated?: boolean;
  className?: string;
}

export default function Logo({
  size = 'large',
  orientation = 'horizontal',
  animated = false,
  className,
}: LogoProps) {
  return (
    <Link
      href='/'
      className={clsx(className, containerClasses({ size, orientation }))}>
      <Image
        src={logoHorizontalPath}
        alt='logo'
        className={logoClasses({ type: orientation === 'horizontal' ? 'show' : 'hide', animated })}
      />
      <Image
        src={logoVerticalPath}
        alt='logo'
        className={logoClasses({ type: orientation === 'vertical' ? 'show' : 'hide', animated })}
      />
    </Link>
  );
}
