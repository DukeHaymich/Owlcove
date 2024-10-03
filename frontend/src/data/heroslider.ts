import { IHeroSliderItem } from "@/utils/type/landing";
import Hero1 from "@/public/images/hero1.jpg";
import Hero2 from "@/public/images/hero2.jpg";

export const heroSliderData: IHeroSliderItem[] = [
  {
    img: Hero1,
    description: '',
    link: {
      url: '/menu',
      name: 'Khám phá thực đơn'
    }
  },
  {
    img: Hero2,
    description: '',
    link: {
      url: '/reservations',
      name: 'Đặt chỗ ngay'
    }
  }
]