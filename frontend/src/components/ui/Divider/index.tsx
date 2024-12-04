'use client';

import Image from 'next/image';

import HeroDivider from '@/public/images/hero-divider.png';
import clsx from 'clsx';
import { useInView } from 'react-intersection-observer';
import { VariantProps } from 'class-variance-authority';
import { dividerClasses } from './style';

interface IDividerProps extends VariantProps<typeof dividerClasses> {
  animated?: boolean;
}

export default function Divider({ color = 'primary', animated = true }: IDividerProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0,
  });
  return (
    <div
      ref={ref}
      className={clsx(
        'mx-auto mb-5 h-[58px] max-w-[640px] transition-all duration-[1.5s]',
        animated || inView ? '[clip-path:inset(0)]' : '[clip-path:inset(0_100%)]'
      )}>
      <Image
        src={HeroDivider}
        alt='divider'
        loading='eager'
        className={dividerClasses({ color })}
      />
    </div>
  );
}
