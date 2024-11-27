import { cva } from "class-variance-authority";

export const inputVariants = cva(
  "box-content transition-color duration-200",
  {
    variants: {
      variant: {
        outline: "bg-cream-100 text-primary-light border border-primary hover:bg-cream-200/20 focus:bg-cream-200/50 outline-none focus:ring-0 placeholder:text-primary/50 focus:border-primary-lighter",
      },
      scale: {
        normal: "h-10 px-3 rounded-md"
      }
    },
    defaultVariants: {
      variant: "outline",
      scale: "normal",
    },
  }
)