import * as React from 'react';
import { textareaLabelVariants, textareaVariants } from './style';
import { TextareaHTMLAttributes } from 'react';
import { VariantProps } from 'class-variance-authority';
import clsx from 'clsx';

interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textareaVariants> {
  label?: string;
  containerClassName?: string;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, containerClassName, variant, scale, label, id, ...props }, ref) => {
    return (
      <div className={clsx('relative', containerClassName)}>
        <textarea
          className={textareaVariants({ variant, className })}
          ref={ref}
          {...props}
          placeholder=''
        />
        <label
          className={textareaLabelVariants({ variant, scale })}
          htmlFor={id}>
          {label}
        </label>
      </div>
    );
  }
);
Textarea.displayName = 'Textarea';

export { Textarea };
