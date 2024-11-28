import { cva } from "class-variance-authority";

const selectContainerVariants = cva(
  "transition-all relative",
  {
    variants: {
      variant: {
        outline: "bg-transparent text-primary-light border border-primary border-t-0 hover:bg-cream-200/20 has-[:focus]:bg-cream-200/50 has-[:focus]:border-primary-lighter",
      },
      scale: {
        normal: "h-12 rounded-md"
      }
    },
    defaultVariants: {
      variant: "outline",
      scale: "normal",
    },
  }
)

const selectPrimitiveVariants = cva(
  'h-full w-full border-r-transparent bg-transparent outline-none focus:ring-0 peer',
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


const selectLabelVariants = cva(
  "before:content[' '] after:content[' '] pointer-events-none absolute left-0 flex h-full w-full select-none transition-all",
  {
    variants: {
      variant: {
        outline: "font-bold text-primary peer-hover:text-primary-light peer-placeholder-shown:peer-hover:text-primary-light/65 peer-placeholder-shown:peer-focus:text-primary-light before:pointer-events-none before:box-border before:block before:border-primary before:transition-all after:pointer-events-none after:box-border after:block after:flex-grow after:border-primary after:transition-all peer-placeholder-shown:text-primary/50 peer-placeholder-shown:font-medium peer-placeholder-shown:before:border-primary peer-placeholder-shown:after:border-primary peer-focus:text-primary-lighter peer-focus:font-bold peer-focus:before:border-primary-lighter peer-focus:after:border-primary-lighter",
      },
      scale: {
        normal: "-top-1.5 text-xs peer-placeholder-shown:text-base peer-focus:text-xs peer-focus:leading-tight peer-placeholder-shown:leading-[3.75] before:mt-1.5 before:mr-1 before:h-1.5 before:w-2.5 before:border-t before:border-l before:rounded-tl-md after:mt-1.5 after:ml-1 after:h-1.5 after:w-2.5 after:border-t after:border-r after:rounded-tr-md before:-ml-px after:-mr-px"
      }
    },
    defaultVariants: {
      variant: "outline",
      scale: "normal",
    },
  }
);


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

export { selectContainerVariants, selectPrimitiveVariants, selectOptionVariants, selectLabelVariants };