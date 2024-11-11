import { CarouselApi } from '@/components/common/Carousel';
import clsx from 'clsx';
import Image from 'next/image';
import { ButtonHTMLAttributes, useCallback, useEffect, useState } from 'react';

import LeftArrow from '@/public/images/svg/left-arrow.svg';

interface IArrowButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isNext?: boolean;
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

export default function ArrowButton({ className, isNext = false, ...rest }: IArrowButtonProps) {
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
