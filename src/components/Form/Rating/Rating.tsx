import { ChangeEvent, ElementType, HTMLAttributes } from 'react';
import styles from './Rating.module.css';

import { clamp } from 'helpers/math';
import { useCustomEnsuredControl } from 'hooks/useEnsureControl';
import { Icon } from 'types/Icon';

import { VisuallyHidden } from 'components/Service/VisuallyHidden/VisuallyHidden';
import { IconStar } from './icons/star';

export interface RatingProps extends Omit<HTMLAttributes<HTMLLabelElement>, 'onChange'> {
  /** The precision of the rating, determining the fraction of the star that can be selected. */
  precision?: 0.1 | 0.2 | 0.25 | 0.5 | 1;
  /** The maximum rating value, representing the number of icons displayed. */
  max?: number;
  /** The current value of the rating. */
  value?: number;
  /** Callback function invoked when the rating value changes. */
  onChange?: (value: number) => void;
  /** The component used to render the rating icons. Defaults to a star icon. */
  IconContainer?: ElementType<Icon>;
}

const MINIMUM_PRECISION = 0.1;

/**
 * Renders a customizable rating component, allowing users to provide a rating by selecting a value using icons (e.g., stars).
 * Supports fractional ratings through precision control and allows for custom rating icon components.
 */
export const Rating = ({
  precision = 1,
  max = 5,
  onChange,
  value: valueProp = 0,
  IconContainer = IconStar,
}: RatingProps) => {
  const [value, setValue] = useCustomEnsuredControl({
    defaultValue: valueProp,
    onChange,
  });

  const normalizedPrecision = clamp(precision, MINIMUM_PRECISION, 1);

  const onChangeLabel = (event: ChangeEvent<HTMLLabelElement>) => {
    const { target } = event;
    if (target instanceof HTMLInputElement) {
      setValue(parseFloat(target.value));
    }
  };

  const getPickedElementWidth = (elementNumber: number): number | undefined => {
    if (elementNumber <= value) {
      return 1;
    }

    const valueRange = elementNumber - value;
    if (valueRange > 0 && valueRange < 1) {
      return 1 - valueRange;
    }

    return undefined;
  };

  const keys = Array.from(Array(max).keys());
  return (
    <label className={styles.wrapper} onChange={onChangeLabel}>
      <VisuallyHidden Component="input" name="rating" type="radio" value={0} />
      {keys.map((key) => {
        const elementsWithPrecision = Math.floor(1 / normalizedPrecision);
        const elements = Array.from(Array(elementsWithPrecision).keys());

        const pickedElementWidth = getPickedElementWidth(key + 1);
        return (
          <label key={key} className={styles.element}>
            {pickedElementWidth !== undefined && (
              <IconContainer
                key="star-picked"
                className={styles['element--picked']}
                style={{ width: `${pickedElementWidth * 100}%` }}
              />
            )}
            <IconContainer key="star" />
            {elements.map((element) => (
              <input
                key={element}
                type="radio"
                value={(key + (element + 1) * normalizedPrecision).toFixed(1)}
                name="rating"
                style={{
                  width: `${normalizedPrecision * 100}%`,
                  left: `${element * normalizedPrecision * 100}%`,
                }}
                className={styles.input}
              />
            ))}
          </label>
        );
      })}
    </label>
  );
};
