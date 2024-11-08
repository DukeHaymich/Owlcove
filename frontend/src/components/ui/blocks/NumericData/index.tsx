import { statisticData } from '@/data/statistics';
import React from 'react';
import NumericItem from './NumericItem';
import Image from 'next/image';

import DiamondDivider from '@/public/images/diamond_divider.png';

export default function NumericData() {
  return (
    <section className='bg-cream'>
      <div className='flex justify-evenly content-view-box'>
        {statisticData.map((item, index) => {
          return (
            <React.Fragment key={index}>
              {index === 0 ? null : (
                <div className='relative mx-5 my-auto'>
                  <Image
                    src={DiamondDivider}
                    alt='divider'
                    width={24}
                    height={24}
                  />
                </div>
              )}
              <NumericItem {...item} />
            </React.Fragment>
          );
        })}
      </div>
    </section>
  );
}
