interface IMenuLink {
  name: string;
  url: string;
}

interface IMenuHeader {
  name: string;
  children: IMenuLink[];
}

export const menuHeaderData: IMenuHeader[] = [
  {
    name: 'Thực đơn',
    children: [
      { name: 'Tất cả', url: '' },
      { name: 'Bình dân', url: '' },
      { name: 'Hàn Quốc', url: '' },
      { name: 'Đồ ăn nhanh', url: '' },
    ]
  },
  {
    name: 'Tin tức',
    children: [
      { name: 'Ưu đãi', url: '' },
      { name: 'Sự kiện', url: '' },
    ],
  },
  {
    name: 'Home',
    children: [],
  },
  {
    name: 'Tuyển dụng',
    children: [],
  },
  {
    name: 'Đặt chỗ',
    children: [],
  },
];