import { CarouselApi } from '@/components/common/Carousel';
import clsx from 'clsx';
import { ButtonHTMLAttributes, useCallback, useEffect, useState } from 'react';

interface IDotButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isActive: boolean;
}

interface UseDotButtonType {
  selectedIndex: number;
  scrollSnaps: number[];
  onDotButtonClick: (index: number) => void;
}

export const useDotButton = (api: CarouselApi | undefined): UseDotButtonType => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onDotButtonClick = useCallback(
    (index: number) => {
      if (!api) return;
      api.scrollTo(index);
    },
    [api]
  );

  const onInit = useCallback((emblaApi: CarouselApi) => {
    emblaApi && setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: CarouselApi) => {
    emblaApi && setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!api) return;
    // Subscribe
    onInit(api);
    onSelect(api);
    api.on('reInit', onInit).on('reInit', onSelect).on('select', onSelect);
    // Clean-up & unsubscribe
    return () => {
      api.off('reInit', onInit).off('reInit', onSelect).off('select', onSelect);
    };
  }, [api, onInit, onSelect]);

  return {
    selectedIndex,
    scrollSnaps,
    onDotButtonClick,
  };
};

export default function DotButton({ className, isActive, ...rest }: IDotButtonProps) {
  return (
    <button
      className={clsx(
        'size-5 rounded-full border-2 border-cream',
        isActive ? 'bg-cream' : '',
        className
      )}
      {...rest}
    />
  );
}
