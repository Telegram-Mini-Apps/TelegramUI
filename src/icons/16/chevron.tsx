import type { Icon } from 'types/Icon';

export const Icon16Chevron = ({ size = 16, ...restProps }: Icon) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...restProps}
  >
    <path
      d="m6 3 5 5-5 5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
