import { SpinnerProps } from 'components/Feedback/Spinner/Spinner';
import { IconLarge } from './icons/large';
import { IconMedium } from './icons/medium';
import { IconSmall } from './icons/small';

interface BaseSpinnerProps {
  size: SpinnerProps['size'];
}

const componentBySize = {
  s: IconSmall,
  m: IconMedium,
  l: IconLarge,
};

const rotateCenterBySize = {
  s: 12,
  m: 18,
  l: 22,
};

export const BaseSpinner = ({ size }: BaseSpinnerProps) => {
  const Component = componentBySize[size];
  const rotateCenter = rotateCenterBySize[size];

  return (
    <Component>
      <animateTransform
        attributeName="transform"
        attributeType="XML"
        type="rotate"
        from={`0 ${rotateCenter} ${rotateCenter}`}
        to={`360 ${rotateCenter} ${rotateCenter}`}
        dur="0.7s"
        repeatCount="indefinite"
      />
    </Component>
  );
};
