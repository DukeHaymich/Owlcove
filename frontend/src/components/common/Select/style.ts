import { cva } from "class-variance-authority";

const selectContainerVariants = cva(
  "box-content transition-color duration-200",
  {
    variants: {
      variant: {
        outline: "bg-cream-100 text-primary-light border border-primary hover:bg-cream-200/20 has-[:focus]:bg-cream-200/50 has-[:focus]:border-primary-lighter",
      },
      scale: {
        normal: "h-10 rounded-md"
      }
    },
    defaultVariants: {
      variant: "outline",
      scale: "normal",
    },
  }
)

const selectPrimitiveVariants = cva(
  'h-full w-full border-r-transparent bg-transparent outline-none focus:ring-0 placeholder:text-primary/50',
  {
    variants: {
      scale: {
        normal: "border-r-8 px-2",
      },
    },
    defaultVariants: {
      scale: "normal",
    },
  }
)
const selectOptionVariants = cva("m-10",
  {
    variants: {
      variant: {
        outline: "bg-cream-100",
      },
    },
    defaultVariants: {
      variant: "outline",
    },
  }
)

export { selectContainerVariants, selectPrimitiveVariants, selectOptionVariants };