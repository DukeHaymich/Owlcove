import { VariantProps } from 'class-variance-authority';
import React, { OptionHTMLAttributes, SelectHTMLAttributes } from 'react';
import {
  selectContainerVariants,
  selectLabelVariants,
  selectOptionVariants,
  selectPrimitiveVariants,
} from './style';
import clsx from 'clsx';

interface SelectProps
  extends SelectHTMLAttributes<HTMLSelectElement>,
    VariantProps<typeof selectContainerVariants> {
  label?: string;
  containerClassName?: string;
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, containerClassName, variant, scale, label, id, ...props }, ref) => {
    return (
      <div className={clsx('relative', containerClassName)}>
        <div className={selectContainerVariants({ variant, scale, className })}>
          <select
            className={selectPrimitiveVariants({ scale })}
            ref={ref}
            id={id}
            {...props}
          />
          <label
            className={selectLabelVariants({ variant, scale })}
            htmlFor={id}>
            {label}
          </label>
        </div>
      </div>
    );
  }
);
Select.displayName = 'Select';

interface SelectOptionProps
  extends OptionHTMLAttributes<HTMLOptionElement>,
    VariantProps<typeof selectOptionVariants> {}

const SelectOption = React.forwardRef<HTMLOptionElement, SelectOptionProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <option
        className={selectOptionVariants({ variant, className })}
        ref={ref}
        {...props}
      />
    );
  }
);
SelectOption.displayName = 'SelectOption';

// return (
//   <div className='col-span-full'>
//     <div className='relative'>
//       <select className='ease w-full cursor-pointer appearance-none rounded border border-slate-200 bg-transparent py-2 pl-3 pr-8 text-sm text-slate-700 shadow-sm transition duration-300 placeholder:text-slate-400 hover:border-slate-400 focus:border-slate-400 focus:shadow-md focus:outline-none'>
//         <option value='brazil'>Brazil</option>
//         <option value='bucharest'>Bucharest</option>
//         <option value='london'>London</option>
//         <option value='washington'>Washington</option>
//       </select>
//       <svg
//         xmlns='http://www.w3.org/2000/svg'
//         fill='none'
//         viewBox='0 0 24 24'
//         strokeWidth='1.2'
//         stroke='currentColor'
//         className='absolute right-2.5 top-2.5 ml-1 h-5 w-5 text-slate-700'>
//         <path
//           strokeLinecap='round'
//           strokeLinejoin='round'
//           d='M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9'
//         />
//       </svg>
//     </div>
//   </div>
// );

export { Select, SelectOption };
