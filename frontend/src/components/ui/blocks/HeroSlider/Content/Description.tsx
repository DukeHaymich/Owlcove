import { Button } from '@/components/common/Button';
import { IHeroSliderItem } from '@/utils/type/landing';
import { Carousel, CarouselContainer, CarouselSlide } from '@/components/common/Carousel';
import { ComponentProps } from 'react';
import Link from 'next/link';
import Divider from '@/components/ui/Divider';

interface IDescriptionProps extends ComponentProps<typeof Carousel> {
  data: IHeroSliderItem[];
}

export default function Description({ data, ...carouselProps }: IDescriptionProps) {
  return (
    <div className='absolute left-1/2 top-1/2 mx-0 w-full -translate-x-1/2 -translate-y-1/2 content-view-box'>
      <Divider color='cream' />
      <Carousel {...carouselProps}>
        <CarouselContainer>
          {data.map((item, index) => {
            return (
              <CarouselSlide key={index}>
                <div className='flex h-full flex-col items-center gap-5'>
                  <p className='mb-5 text-slider'>{item.description}</p>
                  <Button
                    className='flex w-fit rounded-md font-medium'
                    size='xl'
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
