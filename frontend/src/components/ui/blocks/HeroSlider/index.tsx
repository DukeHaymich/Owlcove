'use client';

import { CarouselApi, CarouselOptions } from '@/components/common/Carousel';
import { heroSliderData } from '@/data/heroslider';
import Autoplay from 'embla-carousel-autoplay';
import Fade from 'embla-carousel-fade';
import { useCallback, useEffect, useState } from 'react';
import Description from './Content/Description';
import Controller from './Controller';
import HeroImage from './Content/HeroImage';
import { useThrottle } from '@/hooks';

export default function HeroSlider() {
  const autoplayPlugin = Autoplay({
    delay: 3000,
    stopOnInteraction: false,
    stopOnMouseEnter: true,
  });
  const fadePlugin = Fade();
  const imageCarouselOptions: CarouselOptions = {
    loop: true,
  };

  const contentCarouselOptions: CarouselOptions = {
    loop: true,
    watchDrag: false,
    align: 'center',
    containScroll: false,
    duration: 30,
  };
  const [imageCarouselApi, setImageCarouselApi] = useState<CarouselApi>();
  const [contentCarouselApi, setContentCarouselApi] = useState<CarouselApi>();

  const throttledReset = useThrottle(() => {
    contentCarouselApi?.plugins()?.autoplay?.reset();
  }, 1000);

  const syncCarousels = useCallback((mainApi: CarouselApi, secondaryApi: CarouselApi) => {
    if (!mainApi || !secondaryApi) return;
    const selectedIndex = mainApi.selectedScrollSnap();
    secondaryApi.scrollTo(selectedIndex);
  }, []);

  const imageContentSync = useCallback(() => {
    syncCarousels(imageCarouselApi, contentCarouselApi);
  }, [imageCarouselApi, contentCarouselApi, syncCarousels]);

  const contentImageSync = useCallback(() => {
    syncCarousels(contentCarouselApi, imageCarouselApi);
  }, [imageCarouselApi, contentCarouselApi, syncCarousels]);

  useEffect(() => {
    if (!imageCarouselApi || !contentCarouselApi) return;
    imageCarouselApi.on('select', imageContentSync);
    imageCarouselApi.on('scroll', throttledReset);
    contentCarouselApi.on('select', contentImageSync);

    return () => {
      imageCarouselApi.off('select', imageContentSync);
      imageCarouselApi.off('scroll', throttledReset);
      contentCarouselApi.off('select', contentImageSync);
    };
  }, [
    imageCarouselApi,
    contentCarouselApi,
    syncCarousels,
    imageContentSync,
    contentImageSync,
    throttledReset,
  ]);

  return (
    <section className='relative'>
      <HeroImage
        data={heroSliderData}
        setApi={setImageCarouselApi}
        opts={imageCarouselOptions}
      />
      <Description
        data={heroSliderData}
        setApi={setContentCarouselApi}
        plugins={[autoplayPlugin, fadePlugin]}
        opts={contentCarouselOptions}
      />
      <Controller api={imageCarouselApi} />
    </section>
  );
}
