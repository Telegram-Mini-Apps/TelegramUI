import { Icon } from 'types/Icon';

export const IconCheckbox = ({ ...restProps }: Icon) => (
  <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg" {...restProps}>
    <path
      d="M6.4 1h7.2c1.14 0 1.93 0 2.55.05.6.05.95.14 1.21.28a3 3 0 0 1 1.31 1.3c.14.27.23.62.28 1.22.05.62.05 1.41.05 2.55v7.2c0 1.14 0 1.93-.05 2.55-.05.6-.14.95-.28 1.21a3 3 0 0 1-1.3 1.31c-.27.14-.62.23-1.22.28-.62.05-1.41.05-2.55.05H6.4c-1.14 0-1.93 0-2.55-.05-.6-.05-.95-.14-1.21-.28a3 3 0 0 1-1.31-1.3 3.2 3.2 0 0 1-.28-1.22A34.7 34.7 0 0 1 1 13.6V6.4c0-1.14 0-1.93.05-2.55.05-.6.14-.95.28-1.21a3 3 0 0 1 1.3-1.31 3.2 3.2 0 0 1 1.22-.28C4.47 1 5.26 1 6.4 1Z"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
