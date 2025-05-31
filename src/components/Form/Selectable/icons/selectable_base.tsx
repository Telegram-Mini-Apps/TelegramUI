import type { Icon } from 'types/Icon';

export const IconSelectableBase = ({ ...restProps }: Icon) => (
  <svg
    width="20"
    height="20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...restProps}
  >
    <path
      d="M2.5 10.82 7 15.75l10.5-11.5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
