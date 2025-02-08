import { menuApi } from '@/services/menuApi';
import { IFoodCategory } from '@/utils/type/menus';
import Divider from '../../Divider';
import CategoryGroup from './CategoryGroup';
import { Fragment } from 'react';

export default async function Menu() {
  const menuCategories: IFoodCategory[] = await menuApi().getMenus();

  return (
    <section className='content-view-box'>
      <Divider />
      <h1 className='mb-5 text-center font-serif text-primary text-heading'>Thực đơn</h1>
      <div className='mx-auto mb-10 h-px w-1/6 bg-primary' />
      {menuCategories.map((category, index) => (
        <Fragment key={index}>
          {index > 0 && <div className='mx-auto mb-12 h-px w-1/2 bg-primary-lighter/50' />}
          <CategoryGroup
            order={index}
            {...category}
          />
        </Fragment>
      ))}
    </section>
  );
}
