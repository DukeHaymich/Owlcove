import { numericSummaryData } from '@/data/numericsummary';
import React from 'react';
import SummaryItem from './SummaryItem';
import Image from 'next/image';

import DiamondDivider from '@/public/images/diamond_divider.png';

export default function NumericSummary() {
  return (
    <section className='bg-cream py-20'>
      <div className='flex justify-evenly content-view-box'>
        {numericSummaryData.map((item, index) => {
          return (
            <React.Fragment key={index}>
              {index === 0 ? null : (
                <div className='relative my-auto'>
                  <Image
                    src={DiamondDivider}
                    alt='divider'
                    width={24}
                    height={24}
                  />
                </div>
              )}
              <SummaryItem {...item} />
            </React.Fragment>
          );
        })}
      </div>
    </section>
  );
}
