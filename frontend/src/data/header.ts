import { MenuItem } from "@/utils/type/header";
import { menuFoodData } from "./menuFood";

const menuFoodCategory = menuFoodData.categories;

export const menuHeaderData: MenuItem[] = [
  {
    name: 'Thực đơn',
    url: '/menus',
    children: menuFoodCategory
  },
  {
    name: 'Tin tức',
    url: '/news',
    children: [
      { name: 'Ưu đãi', url: '/promotions' },
      { name: 'Sự kiện', url: '/events' },
    ],
  },
  {
    name: 'Home',
    url: '/',
  },
  {
    name: 'Tuyển dụng',
    url: '/careers',
  },
  {
    name: 'Dịch vụ',
    children: [
      {
        name: 'Đặt chỗ',
        url: '/reservations'
      },
      {
        name: 'Mang về',
        url: '/take-away'
      }
    ],
  },
];