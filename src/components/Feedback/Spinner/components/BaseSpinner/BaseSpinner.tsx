import { SpinnerProps } from 'components/Feedback/Spinner/Spinner';
import { IconBig } from './icons/big';
import { IconMedium } from './icons/medium';
import { IconSmall } from './icons/small';

interface BaseSpinnerProps {
  size: SpinnerProps['size'];
}

const componentBySize = {
  s: IconSmall,
  m: IconMedium,
  l: IconBig,
};

export const BaseSpinner = ({ size }: BaseSpinnerProps) => {
  const Component = componentBySize[size];
  return (
    <Component>
      <animateTransform
        attributeName="transform"
        attributeType="XML"
        type="rotate"
        from="0 0 0"
        to="360 0 0"
        dur="0.7s"
        repeatCount="indefinite"
      />
    </Component>
  );
};
