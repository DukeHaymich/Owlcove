'use client';

import { Carousel, CarouselContainer, CarouselSlide } from '@/components/common/Carousel';
import { heroSliderData } from '@/data/heroslider';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import React from 'react';

export default function HeroSlider() {
  const plugin = React.useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

  return (
    <Carousel plugins={[plugin.current]}>
      <CarouselContainer>
        {heroSliderData.map((item, index) => {
          return (
            <CarouselSlide
              key={index}
              className=''>
              <div>
                <Image
                  src={item.img}
                  alt='hero-image'
                />
              </div>
            </CarouselSlide>
          );
        })}
      </CarouselContainer>
    </Carousel>
  );
}
