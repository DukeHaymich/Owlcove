import About from '@/components/ui/blocks/About';
import HeroSlider from '@/components/ui/blocks/HeroSlider';
import MenuCategories from '@/components/ui/blocks/MenuCategories';
import NumericSummary from '@/components/ui/blocks/NumericSummary';
import Reservation from '@/components/ui/blocks/Reservation';

export default function Home() {
  return (
    <>
      <HeroSlider />
      <NumericSummary />
      <About />
      <MenuCategories />
      <Reservation />
    </>
  );
}
