// 'use client';
import Divider from '@/components/ui/Divider';
import { menuFoodData } from '@/data/menuFood';
import { menuApi } from '@/services/menuApi';
import { ICategory } from '@/utils/type/menus';
import MenuCategory from './MenuCategory';

export default async function MenuCategories() {
  const categories: ICategory[] = await menuApi().getCategories();

  return (
    <section className='bg-cream-200 py-20'>
      <div className='content-view-box'>
        <Divider animated />
        <h1 className='text-center font-serif text-primary text-heading'>Thực đơn</h1>
        <div className='mx-auto my-5 h-px w-1/6 bg-primary' />
        <p className='mx-auto mb-10 max-w-xl !text-center text-primary-light text-body'>
          {menuFoodData.description}
        </p>
        <MenuCategory data={categories} />
        <p className='mt-20 text-center text-primary-lighter text-subscript'>
          *{menuFoodData.sidenote}
        </p>
      </div>
    </section>
  );
}
