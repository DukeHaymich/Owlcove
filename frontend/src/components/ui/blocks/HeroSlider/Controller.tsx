import { CarouselApi } from '@/components/common/Carousel';
import clsx from 'clsx';
import Image from 'next/image';
import { ButtonHTMLAttributes, useCallback, useEffect, useState } from 'react';

import LeftArrow from '@/public/images/svg/left-arrow.svg';

interface IDotButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isActive: boolean;
}

interface IArrowButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isNext?: boolean;
}

interface ISlideControllerProps {
  api: CarouselApi;
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

function DotButton({ className, isActive, ...rest }: IDotButtonProps) {
  return (
    <button
      className={clsx(
        'border-cream size-5 rounded-full border-2',
        isActive ? 'bg-cream' : '',
        className
      )}
      {...rest}
    />
  );
}

type UsePrevNextButtonsType = {
  prevBtnDisabled: boolean;
  nextBtnDisabled: boolean;
  onPrevButtonClick: () => void;
  onNextButtonClick: () => void;
};

export const usePrevNextButtons = (api: CarouselApi | undefined): UsePrevNextButtonsType => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const onPrevButtonClick = useCallback(() => {
    if (!api) return;
    api.scrollPrev();
  }, [api]);

  const onNextButtonClick = useCallback(() => {
    if (!api) return;
    api.scrollNext();
  }, [api]);

  const onSelect = useCallback((api: CarouselApi) => {
    api && setPrevBtnDisabled(!api.canScrollPrev());
    api && setNextBtnDisabled(!api.canScrollNext());
  }, []);

  useEffect(() => {
    if (!api) return;
    // Subscribe
    onSelect(api);
    api.on('reInit', onSelect).on('select', onSelect);
    // Clean-up & unsubscribe
    return () => {
      api.off('reInit', onSelect).off('select', onSelect);
    };
  }, [api, onSelect]);

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  };
};

function ArrowButton({ className, isNext = false, ...rest }: IArrowButtonProps) {
  return (
    <button
      className={clsx(
        'absolute top-0 h-full w-32 from-transparent to-transparent opacity-40 transition-all hover:from-dark/30 hover:opacity-100',
        isNext ? 'right-0 bg-gradient-to-l' : 'left-0 bg-gradient-to-r',
        className
      )}
      {...rest}>
      <Image
        className={clsx('mx-auto size-8', isNext ? 'rotate-180' : '')}
        src={LeftArrow}
        alt='arrow'
        aria-hidden
      />
    </button>
  );
}

export default function Controller({ api }: ISlideControllerProps) {
  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(api);
  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } =
    usePrevNextButtons(api);

  return (
    <>
      <div className='absolute bottom-16 flex w-full justify-center gap-4'>
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => onDotButtonClick(index)}
            isActive={index === selectedIndex}
          />
        ))}
      </div>
      <ArrowButton
        onClick={onPrevButtonClick}
        disabled={prevBtnDisabled}
      />
      <ArrowButton
        onClick={onNextButtonClick}
        disabled={nextBtnDisabled}
        isNext
      />
    </>
  );
}
