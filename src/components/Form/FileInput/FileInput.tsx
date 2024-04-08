import { forwardRef, InputHTMLAttributes } from 'react';

import { Icon28Attach } from 'icons/28/attach';

import { ButtonCell } from 'components/Blocks/Cell/components/ButtonCell/ButtonCell';
import { VisuallyHidden } from 'components/Service/VisuallyHidden/VisuallyHidden';

export interface FileInputProps extends InputHTMLAttributes<HTMLInputElement> {
  /** Text label for the file input, used as the button label. */
  label?: string;
}

/**
 * Renders a file input disguised as a button, enhancing the user interface and improving usability.
 * It leverages the `ButtonCell` component for consistent styling across the application.
 */
export const FileInput = forwardRef<HTMLDivElement, FileInputProps>(({
  label = 'Attach file',
  className,
  children,
  ...restProps
}, ref) => (
  <div ref={ref} className={className}>
    {children}
    <ButtonCell Component="label" before={<Icon28Attach />}>
      <VisuallyHidden>
        <input type="file" placeholder={label} {...restProps} />
      </VisuallyHidden>
      {label}
    </ButtonCell>
  </div>
));
