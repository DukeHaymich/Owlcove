import { IStatisticItem } from '@/utils/type/landing';
import React from 'react';
import NumberBlock from './NumberBlock';

interface INumericItemProps extends IStatisticItem {}

export default function NumericItem({
  numericData,
  animated,
  prefix,
  suffix,
  prefixNumericData,
  suffixNumericData,
}: INumericItemProps) {
  return (
    <h1 className='w-1/4 text-wrap text-center font-serif text-xl leading-9 text-secondary'>
      <span className='align-middle'>{prefix}</span>
      <NumberBlock
        end={numericData}
        prefix={prefixNumericData}
        suffix={suffixNumericData}
        suffixClassName='text-3xl align-middle'
        animated={animated}
        className='text-numeric inline-block px-2 align-middle text-primary'
      />
      <br />
      {suffix}
    </h1>
  );
}
