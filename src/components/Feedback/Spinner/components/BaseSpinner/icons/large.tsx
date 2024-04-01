import { Icon } from 'types/Icon';

export const IconLarge = ({ children, ...restProps }: Icon) => (
  <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" {...restProps}>
    <use xlinkHref="#spinner_44" fill="none">
      {children}
    </use>
    <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" id="spinner_44">
      <path
        d="M22 4C25.1288 4 28.2036 4.81556 30.9211 6.36624C33.6386 7.91693 35.9049 10.1492 37.4967 12.8429C39.0884 15.5365 39.9505 18.5986 39.9979 21.727C40.0454 24.8555 39.2765 27.9423 37.7672 30.683C36.258 33.4237 34.0603 35.7236 31.3911 37.356C28.7219 38.9884 25.6733 39.8968 22.5459 39.9917C19.4185 40.0866 16.3204 39.3647 13.5571 37.8971C10.7939 36.4296 8.46085 34.2671 6.78817 31.6229"
        stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    </symbol>
  </svg>
);
