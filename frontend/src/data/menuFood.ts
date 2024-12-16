import { IMenuCategory } from '@/utils/type/menus';
import { IFood } from '@/utils/type/menus';

interface IMenuFoodData {
  description: string;
  categories: IMenuCategory[];
  sidenote: string;
}

export const menuFoodData: IMenuFoodData = {
  description:
    'Chúng tôi mang đến bạn thực đơn đầy màu sắc hơn 70 món ăn đa dạng từ các nền ẩm thực nổi tiếng trên thế giới, được chế biến từ những nguyên liệu tươi ngon và chất lượng.',
  categories: [
    {
      name: 'Tổng hợp',
      url: '/menus/full-course',
      children: [
        {
          name: 'Khai vị',
          url: '/menus/full-course/appetizers',
        },
        {
          name: 'Món chính',
          url: '/menus/full-course/main-course',
        },
        {
          name: 'Tráng miệng',
          url: '/menus/full-course/desserts',
        },
      ],
    },
    { name: 'Bữa sáng', url: '/menus/breakfast' },
    { name: 'Thuần Việt', url: '/menus/vietnamese' },
    { name: 'Châu Âu', url: '/menus/european' },
    // { name: 'Đông Nam Á', url: '/menus/south-east-asian' },
    { name: 'Đông Á', url: '/menus/east-asian' },
    { name: 'Món ăn nhanh', url: '/menus/fast-food' },
  ],
  sidenote: 'Thực đơn có thể thay đổi tùy theo sự kiện và chương trình đang áp dụng.',
};

export const foodData: IFood[] = [
  {
    name: 'Phở bò',
    priceTag: 35000,
    category: ['Bữa sáng', 'Thuần Việt'],
  },
  {
    name: 'Phở gà',
    priceTag: 29000,
    category: ['Bữa sáng', 'Thuần Việt'],
  },
  {
    name: 'Bánh mì (chả, trứng, bì)',
    priceTag: 15000,
    category: ['Bữa sáng', 'Thuần Việt'],
  },
  {
    name: 'Bún chả cá',
    priceTag: 35000,
    category: ['Bữa sáng', 'Thuần Việt'],
  },
  {
    name: 'Bún bò',
    priceTag: 35000,
    category: ['Bữa sáng', 'Thuần Việt'],
  },
  {
    name: 'Cơm sườn (bì, chả, trứng)',
    priceTag: 45000,
    category: ['Món chính', 'Thuần Việt'],
  },
  {
    name: 'Cơm gà (xé, xối Mỡ)',
    priceTag: 39000,
    category: ['Món chính', 'Thuần Việt'],
  },
  {
    name: 'Bánh xèo',
    priceTag: 17000,
    category: ['Món ăn nhanh', 'Thuần Việt'],
  },
  {
    name: 'Gỏi cuốn',
    priceTag: 15000,
    category: ['Khai vị', 'Món ăn nhanh', 'Thuần Việt'],
  },
  {
    name: 'Cơm chiên Dương Châu',
    priceTag: 37000,
    category: ['Món chính', 'Đông Á'],
  },
  {
    name: 'Bánh canh (cua, chả cá, cá cóc)',
    priceTag: [
      {
        size: 'M',
        price: 35000,
      },
      {
        size: 'L',
        price: 45000,
      },
    ],
    category: ['Bữa sáng', 'Món chính', 'Thuần Việt'],
  },
  {
    name: 'Cá kho',
    priceTag: 35000,
    category: ['Món chính', 'Thuần Việt'],
  },
  {
    name: 'Bò kho',
    priceTag: 39000,
    category: ['Món chính', 'Thuần Việt'],
  },
  {
    name: 'Bánh cuốn',
    priceTag: 25000,
    category: ['Bữa sáng', 'Thuần Việt'],
  },
  {
    name: 'Lẩu Thái',
    priceTag: 149000,
    category: ['Món chính'],
  },
  {
    name: 'Nem các loại (nướng, chua,...)',
    priceTag: 19000,
    category: ['Thức ăn nhanh'],
  },
  {
    name: 'Súp cua',
    priceTag: 25000,
    category: ['Bữa sáng', 'Khai vị', 'Đông Á'],
  },
  {
    name: 'Kim Chi',
    priceTag: 29000,
    category: ['Đông Á'],
  },
  {
    name: 'Cháo lươn',
    priceTag: [
      {
        size: 'M',
        price: 29000,
      },
      {
        size: 'L',
        price: 39000,
      },
    ],
    category: ['Món chính', 'Thuần Việt'],
  },
  {
    name: 'Tokbokki (truyền thống, phô mai, tương đen)',
    priceTag: [
      {
        size: 'M',
        price: 25000,
      },
      {
        size: 'L',
        price: 29000,
      },
    ],
    category: ['Món ăn nhanh', 'Đông Á'],
  },
  {
    name: 'Nui xào (bò, gà)',
    priceTag: [
      {
        size: 'M',
        price: 35000,
      },
      {
        size: 'L',
        price: 45000,
      },
    ],
    category: ['Bữa sáng', 'Món chính', 'Châu Âu'],
  },
  {
    name: 'Canh chua cá lóc',
    priceTag: [
      {
        size: 'M',
        price: 35000,
      },
      {
        size: 'L',
        price: 45000,
      },
    ],
    category: ['Thuần Việt'],
  },
  {
    name: 'Canh rong biển phô mai',
    priceTag: [
      {
        size: 'M',
        price: 29000,
      },
      {
        size: 'L',
        price: 37000,
      },
    ],
    category: ['Đông Á'],
  },
];
