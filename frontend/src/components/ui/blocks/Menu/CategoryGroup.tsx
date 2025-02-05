import { IFoodCategory } from '@/utils/type/menus';
import CategoryImage from './CategoryImage';
import FoodItem from './FoodItem';
import clsx from 'clsx';

interface ICategoryGroupProps extends IFoodCategory {
  order: number;
}

export default function CategoryGroup({ name, image, foods, order }: ICategoryGroupProps) {
  return (
    <div
      className={clsx('scroll-mt-32 pb-10 clearfix', order % 2 === 0 ? '-ml-8' : '-mr-8')}
      id={name}>
      <CategoryImage
        label={name}
        image={image}
        order={order}
      />
      {foods.map((item, index) => {
        return (
          <FoodItem
            key={index}
            order={order}
            {...item}
          />
        );
      })}
    </div>
  );
}
