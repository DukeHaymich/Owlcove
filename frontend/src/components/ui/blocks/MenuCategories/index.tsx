import React from 'react';
import Divider from '../HeroSlider/Content/Divider';
import { menuFoodData } from '@/data/menuFood';
import Menu from './Menu';

export default function MenuCategories() {
  return (
    <section className='bg-cream-200 py-20'>
      <div className='content-view-box'>
        <Divider />
        <h1 className='text-center font-serif text-primary text-heading'>Thực đơn</h1>
        <div className='mx-auto my-5 h-px w-1/6 bg-primary' />
        <p className='mx-auto mb-10 max-w-xl !text-center text-primary-light text-body'>
          {menuFoodData.description}
        </p>
        <Menu data={menuFoodData.categories} />
        <p className='text-subscript text-primary-lighter mt-20 text-center'>
          *{menuFoodData.sidenote}
        </p>
      </div>
    </section>
  );
}
