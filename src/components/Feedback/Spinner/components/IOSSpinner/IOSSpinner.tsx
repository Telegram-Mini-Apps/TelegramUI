import { SpinnerProps } from 'components/Feedback/Spinner/Spinner';
import { IconLarge } from './icons/large';
import { IconMedium } from './icons/medium';
import { IconSmall } from './icons/small';

interface IOSSpinnerProps {
  size: SpinnerProps['size'];
}

export const IOSSpinner = ({ size }: IOSSpinnerProps) => {
  switch (size) {
    case 'l':
      return <IconLarge />;
    case 'm':
      return <IconMedium />;
    default:
      return <IconSmall />;
  }
};
