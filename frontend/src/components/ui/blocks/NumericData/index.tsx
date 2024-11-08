import { statisticData } from '@/data/statistics';
import React from 'react';
import NumericItem from './NumericItem';
import Image from 'next/image';

import DiamondDivider from '@/public/images/diamond_divider.png';

export default function NumericData() {
  return (
    <section className='bg-papaya'>
      <div className='flex justify-evenly py-12 content-view-box'>
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
                    objectFit=''
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
