import { Button } from '@/components/common/Button';
import { IHeroSliderItem } from '@/utils/type/landing';
import { Carousel, CarouselContainer, CarouselSlide } from '@/components/common/Carousel';
import { ComponentProps } from 'react';
import Divider from './Divider';
import Link from 'next/link';

interface IContentProps extends ComponentProps<typeof Carousel> {
  data: IHeroSliderItem[];
}

export default function Content({ data, ...carouselProps }: IContentProps) {
  return (
    <div className='absolute left-1/2 top-1/2 mx-0 w-full -translate-x-1/2 -translate-y-1/2 content-view-box'>
      <Divider />
      <Carousel {...carouselProps}>
        <CarouselContainer>
          {data.map((item, index) => {
            return (
              <CarouselSlide key={index}>
                <div className='flex h-full flex-col items-center gap-5'>
                  <p className='text-slider mb-5'>{item.description}</p>
                  <Button
                    className='flex w-fit font-medium'
                    size='lg'
                    variant='outline'
                    asChild>
                    <Link href={item.link.url}>{item.link.description}</Link>
                  </Button>
                </div>
              </CarouselSlide>
            );
          })}
        </CarouselContainer>
      </Carousel>
    </div>
  );
}
