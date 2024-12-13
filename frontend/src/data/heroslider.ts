import { IHeroSliderItem } from "@/utils/type/landing";
import Hero1 from "@/public/images/hero1.jpg";
import Hero2 from "@/public/images/hero2.jpg";

export const heroSliderData: IHeroSliderItem[] = [
  {
    img: Hero1,
    description: 'Trải nghiệm các món ăn ngon chuẩn vị, đa dạng văn hóa ẩm thực đến từ nhiều nơi khác nhau với những nguyên liệu được chọn lọc kỹ lưỡng.',
    link: {
      url: '/menus',
      description: 'Khám phá thực đơn'
    }
  },
  {
    img: Hero2,
    description: 'Hòa mình vào không gian cân bằng giữa sang trọng và mộc mạc, thưởng thức bữa ăn ấm áp được phục vụ tận tình chu đáo.',
    link: {
      url: '#reservations',
      description: 'Đặt chỗ ngay'
    }
  }
]