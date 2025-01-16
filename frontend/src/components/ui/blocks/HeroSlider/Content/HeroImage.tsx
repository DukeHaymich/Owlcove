import { Carousel, CarouselContainer, CarouselSlide } from '@/components/common/Carousel';
import { IHeroSliderItem } from '@/utils/type/landing';
import Image from 'next/image';
import React, { ComponentProps } from 'react';

interface IHeroImageProps extends ComponentProps<typeof Carousel> {
  data: IHeroSliderItem[];
}

export default function HeroImage({ data, ...carouselProps }: IHeroImageProps) {
  return (
    <Carousel
      {...carouselProps}
      className='bg-dark'>
      <CarouselContainer className='!-ml-0 h-content animate-fade-in bg-dark'>
        {data.map((item, index) => {
          return (
            <CarouselSlide
              key={index}
              className='bg-dark !pl-0'>
              <div className='h-full w-full'>
                <Image
                  src={item.image}
                  alt='hero-image'
                  className='h-full w-full object-cover blur-sm brightness-50'
                />
              </div>
            </CarouselSlide>
          );
        })}
      </CarouselContainer>
    </Carousel>
  );
}
