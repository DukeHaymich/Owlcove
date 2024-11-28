import { VariantProps } from 'class-variance-authority';
import clsx from 'clsx';
import * as React from 'react';
import { InputHTMLAttributes } from 'react';
import { inputLabelVariants, inputVariants } from './style';

interface InputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  label?: string;
  containerClassName?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, containerClassName, variant, scale, type, label, id, ...props }, ref) => {
    return (
      <div className={clsx('relative', containerClassName)}>
        <input
          type={type}
          className={inputVariants({ variant, scale, className })}
          ref={ref}
          id={id}
          {...props}
          placeholder=''
        />
        <label
          className={inputLabelVariants({ variant, scale })}
          htmlFor={id}>
          {label}
        </label>
      </div>
    );
  }
);
Input.displayName = 'Input';

export { Input };
