import { HTMLAttributes } from 'react';
import styles from './CircularProgress.module.css';

import { getCircleAttributes } from 'components/Feedback/CircularProgress/helpers/getCircleAttributes';

export interface CircularProgressProps extends HTMLAttributes<HTMLOrSVGElement> {
  /** Specifies the size of the circular progress indicator. Can be 'small', 'medium', or 'large'. */
  size?: 'small' | 'medium' | 'large';
  /** Current progress of the circular indicator, expressed as a percentage from 0 to 100. */
  progress?: number;
}

/**
 * Renders a circular progress indicator, useful for displaying loading states or progress metrics.
 * The component dynamically adjusts its size and stroke based on the provided `size` prop and visually represents
 * the `progress` prop as a percentage of the circle's circumference.
 */
export const CircularProgress = ({
  size = 'medium',
  progress = 0,
}: CircularProgressProps) => {
  const circleAttributes = getCircleAttributes(size);
  if (!circleAttributes) {
    return null;
  }

  const circumference = 2 * Math.PI * circleAttributes.radius;
  const circleSize = circleAttributes.size / 2;

  return (
    <svg
      className={styles.wrapper}
      width={circleAttributes.size}
      height={circleAttributes.size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx={circleSize}
        cy={circleSize}
        r={circleAttributes.radius}
        strokeOpacity=".1"
        strokeWidth={circleAttributes.strokeWidth}
        fill="none"
      />
      <circle
        fill="none"
        cx={circleSize}
        cy={circleSize}
        r={circleAttributes.radius}
        strokeWidth={circleAttributes.strokeWidth}
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={circumference * ((100 - progress) / 100)}
      />
    </svg>
  );
};
