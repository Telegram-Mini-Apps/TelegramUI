import type { Icon } from 'types/Icon';

export const IconRadioChecked = ({ ...restProps }: Icon) => (
  <svg
    width="20"
    height="20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...restProps}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm0 2a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z"
      fill="currentColor"
    />
    <path
      d="M15 10a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"
      fill="currentColor"
    />
  </svg>
);
