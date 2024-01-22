import { Icon } from 'types/Icon';

export const IconDot = ({ ...restProps }: Icon) => (
  <svg width="21" height="20" fill="none" xmlns="http://www.w3.org/2000/svg" {...restProps}>
    <circle cx="10.5" cy="10" r="2" fill="currentColor" />
  </svg>
);
