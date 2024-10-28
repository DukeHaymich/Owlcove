import { cva } from 'class-variance-authority';

export const containerClasses = cva('flex items-center', {
  variants: {
    orientation: {
      horizontal: 'flex-row',
      vertical: 'flex-col-reverse scale-[0.9]',
    },
    size: {
      small: 'w-[121px]',
      medium: 'w-[144px]',
      large: 'w-[216px]',
    },
  },
  defaultVariants: { size: 'medium', orientation: 'horizontal' },
});

export const logoClasses = cva('', {
  variants: {
    type: {
      show: 'animate-fade-in',
      hide: 'hidden'
    },
    animated: {
      true: '',
      false: '!animate-none'
    }
  },
})