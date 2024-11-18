'use client';
import { INumericSummaryItem } from '@/utils/type/landing';
import React from 'react';
import Counter from './Counter';
import { useInView } from 'react-intersection-observer';
import clsx from 'clsx';

interface ISummaryItemProps extends INumericSummaryItem {}

export default function SummaryItem({
  numericData,
  animated,
  prefix,
  suffix,
  prefixNumericData,
  suffixNumericData,
}: ISummaryItemProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.75,
  });
  return (
    <h1
      ref={ref}
      className={clsx(
        'text-primary-light flex-1 text-wrap text-center font-serif text-xl leading-9 transition-all duration-1000',
        inView ? 'opacity-100' : 'translate-y-10 opacity-0'
      )}>
      <span className='align-middle'>{prefix}</span>
      <Counter
        end={numericData}
        prefix={prefixNumericData}
        suffix={suffixNumericData}
        suffixClassName='text-3xl align-top'
        animated={inView && animated}
        className='inline-block px-2 align-top text-statistic'
      />
      <br />
      {suffix}
    </h1>
  );
}
