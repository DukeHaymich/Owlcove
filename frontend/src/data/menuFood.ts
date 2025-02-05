import { ICategory } from '@/utils/type/menus';

interface IMenuFoodData {
  description: string;
  categories: ICategory[];
  sidenote: string;
}

export const menuFoodData: IMenuFoodData = {
  description:
    'Chúng tôi mang đến bạn thực đơn đầy màu sắc hơn 70 món ăn đa dạng từ các nền ẩm thực nổi tiếng trên thế giới, được chế biến từ những nguyên liệu tươi ngon và chất lượng.',
  categories: [
    { name: 'Thuần Việt', image: '' },
    { name: 'Châu Âu', image: '' },
    { name: 'Đông Á', image: '' },
    { name: 'Đồ chay', image: '' },
    { name: 'Món ăn nhanh', image: '' },
  ],
  sidenote: 'Thực đơn có thể thay đổi tùy theo sự kiện và chương trình đang áp dụng.',
};
