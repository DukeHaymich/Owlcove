import { cva } from "class-variance-authority";

const dividerClasses = cva('min-h-[58px] min-w-[640px]', {
  variants: {
    color: {
      primary: 'mask-color-primary',
      cream: 'mask-color-cream',
    },
  },
  defaultVariants: { color: 'primary' },
});

export { dividerClasses }