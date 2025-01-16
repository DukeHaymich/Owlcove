import { aboutData } from '@/data/about';
import React from 'react';
import Item from './Item';

export default function About() {
  return (
    <section className='space-y-20 bg-gradient-to-b bg-linear-1'>
      {aboutData.map((item, index) => {
        return (
          <Item
            key={index}
            imagePosition={index % 2 !== 0 ? 'left' : 'right'}
            {...item}
          />
        );
      })}
    </section>
  );
}
