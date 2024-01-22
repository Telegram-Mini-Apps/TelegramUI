import { Icon } from 'types/Icon';

export const Icon28CloseAmbient = ({ ...restProps }: Icon) => (
  <svg width="28" height="28" fill="none" xmlns="http://www.w3.org/2000/svg" {...restProps}>
    <g clipPath="url(#close_ambient_a)">
      <path d="M14 28c7.66 0 14-6.35 14-14 0-7.66-6.35-14-14.01-14A14.1 14.1 0 0 0 0 14c0 7.65 6.35 14 14 14Z"
        fill="#000" fillOpacity=".1" />
      <path
        d="M9.17 20C8.51 20 8 19.47 8 18.81c0-.31.11-.61.34-.83L12.31 14l-3.97-3.97A1.15 1.15 0 0 1 8 9.2c0-.67.51-1.17 1.17-1.17.33 0 .59.11.82.33l3.99 3.98 4.02-4c.24-.24.5-.34.81-.34.66 0 1.19.52 1.19 1.17 0 .33-.1.6-.36.85L15.67 14l3.96 3.97c.24.21.36.51.36.84 0 .66-.53 1.19-1.2 1.19-.33 0-.64-.11-.85-.34l-3.96-3.98-3.95 3.98c-.23.23-.53.34-.86.34Z"
        fill="#fff" />
    </g>
    <defs>
      <clipPath id="close_ambient_a">
        <path fill="#fff" d="M0 0h28v28H0z" />
      </clipPath>
    </defs>
  </svg>
);
