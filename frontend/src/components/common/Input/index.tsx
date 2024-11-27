import { VariantProps } from 'class-variance-authority';
import * as React from 'react';
import { InputHTMLAttributes } from 'react';
import { inputVariants } from './style';

interface InputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, scale, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={inputVariants({ variant, scale, className })}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';

export { Input };
