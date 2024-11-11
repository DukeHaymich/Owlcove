import { CarouselApi } from '@/components/common/Carousel';
import DotButton, { useDotButton } from './DotButton';
import ArrowButton, { usePrevNextButtons } from './ArrowButton';

interface ISlideControllerProps {
  api: CarouselApi;
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
