import { MenuItem } from "@/utils/type/header";

export const menuHeaderData: MenuItem[] = [
  {
    name: 'Thực đơn',
    url: '/menu',
    children: [
      { name: 'Tổng hợp', children: [
        {
          name: 'Khai vị', url: '/appetizers'
        },
        {
          name: 'Món chính', url: '/main-course'
        },
        {
          name: 'Tráng miệng', url: '/desserts'
        }
      ] },
      { name: 'Bữa sáng', url: '/breakfast' },
      { name: 'Thuần Việt', url: '/vietnamese' },
      { name: 'Thái Lan', url: '/thai' },
      { name: 'Hàn Quốc', url: '/korean' },
      { name: 'Thức ăn nhanh', url: '/fast-food' },
    ]
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