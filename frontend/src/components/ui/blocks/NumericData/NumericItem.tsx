import { IStatisticItem } from '@/utils/type/landing';
import React from 'react';
import NumberBlock from './NumberBlock';

interface INumericItemProps extends IStatisticItem {}

const NumericItem = React.forwardRef<HTMLHeadingElement, INumericItemProps>(
  ({ numericData, animated, prefix, suffix, prefixNumericData, suffixNumericData }, ref) => {
    return (
      <h1
        ref={ref}
        className='w-1/4 text-wrap py-12 text-center font-serif text-xl leading-9 text-secondary'>
        <span className='align-middle'>{prefix}</span>
        <NumberBlock
          end={numericData}
          prefix={prefixNumericData}
          suffix={suffixNumericData}
          suffixClassName='text-3xl align-middle'
          animated={animated}
          className='inline-block px-2 align-middle text-numeric text-primary'
        />
        <br />
        {suffix}
      </h1>
    );
  }
);
NumericItem.displayName = 'NumericItem';

export default NumericItem;
