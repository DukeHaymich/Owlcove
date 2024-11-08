'use client';
import { IStatisticItem } from '@/utils/type/landing';
import React from 'react';
import NumberBlock from './NumberBlock';
import { useInView } from 'react-intersection-observer';
import clsx from 'clsx';

interface INumericItemProps extends IStatisticItem {}

export default function NumericItem({
  numericData,
  animated,
  prefix,
  suffix,
  prefixNumericData,
  suffixNumericData,
}: INumericItemProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.75,
  });
  return (
    <h1
      ref={ref}
      className={clsx(
        'flex-1 text-wrap py-12 text-center font-serif text-xl leading-9 text-secondary transition-all duration-1000',
        inView ? 'opacity-100' : 'translate-y-10 opacity-0'
      )}>
      <span className='align-middle'>{prefix}</span>
      <NumberBlock
        end={numericData}
        prefix={prefixNumericData}
        suffix={suffixNumericData}
        suffixClassName='text-3xl align-middle'
        animated={inView && animated}
        className='inline-block px-2 align-middle text-statistic'
      />
      <br />
      {suffix}
    </h1>
  );
}
