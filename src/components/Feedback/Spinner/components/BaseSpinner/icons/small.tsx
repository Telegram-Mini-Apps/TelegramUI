import { Icon } from 'types/Icon';

export const IconSmall = ({ children, ...restProps }: Icon) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...restProps}>
    <use xlinkHref="#spinner_24" fill="none">
      {children}
    </use>
    <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="spinner_24">
      <path
        d="M12 3c1.5644 0 3.1018.40778 4.4605 1.18312 1.3588.77535 2.492 1.89147 3.2878 3.23831.7959 1.34683 1.2269 2.87787 1.2507 4.44207.0237 1.5642-.3607 3.1076-1.1154 4.478-.7546 1.3703-1.8534 2.5203-3.188 3.3365-1.3347.8162-2.859 1.2704-4.4227 1.3179-1.5636.0474-3.11269-.3136-4.49433-1.0473-1.38163-.7338-2.54815-1.8151-3.38448-3.1371"
        stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    </symbol>
  </svg>
);
