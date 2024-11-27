import * as React from 'react';
import { textareaVariants } from './style';
import { TextareaHTMLAttributes } from 'react';
import { VariantProps } from 'class-variance-authority';

interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textareaVariants> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <textarea
        className={textareaVariants({ variant, className })}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = 'Textarea';

export { Textarea };
