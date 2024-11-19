import { IMenuCategory } from "@/utils/type/menu";

interface IMenuFoodData {
  description: string;
  categories: IMenuCategory[];
  sidenote: string;
}

export const menuFoodData: IMenuFoodData = {
  description: 'Chúng tôi mang đến bạn thực đơn đầy màu sắc hơn 70 món ăn đa dạng từ các nền ẩm thực nổi tiếng trên thế giới, được chế biến từ những nguyên liệu tươi ngon và chất lượng.',
  categories: [
    { name: 'Tổng hợp', url: 'full-course', children: [
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
    { name: 'Châu Âu', url: '/european' },
    // { name: 'Đông Nam Á', url: '/south-east-asian' },
    { name: 'Đông Á', url: '/east-asian' },
    { name: 'Món ăn nhanh', url: '/fast-food' },
  ],
  sidenote: 'Thực đơn có thể thay đổi tùy theo sự kiện và chương trình đang áp dụng.'
}