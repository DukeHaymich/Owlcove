export const menuFoodData = {
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
  { name: 'Đông Nam Á', url: '/south-east-asian' }, 
  { name: 'Đông Á', url: '/east-asian' },
  { name: 'Thức ăn nhanh', url: '/fast-food' },
]
}