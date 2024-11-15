import About from '@/components/ui/blocks/About';
import HeroSlider from '@/components/ui/blocks/HeroSlider';
import NumericSummary from '@/components/ui/blocks/NumericSummary';

export default function Home() {
  return (
    <>
      <HeroSlider />
      <NumericSummary />
      <About />
    </>
  );
}
