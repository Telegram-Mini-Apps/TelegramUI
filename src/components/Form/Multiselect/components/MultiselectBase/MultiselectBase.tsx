import {
  forwardRef,
  Fragment,
  InputHTMLAttributes,
  KeyboardEvent,
  MouseEvent,
  RefObject,
} from 'react';
import styles from './MultiselectBase.module.css';

import { getHorizontalSideByKey, Keys } from 'helpers/accessibility';
import { classNames } from 'helpers/classNames';
import { getHTMLElementByChildren, getHTMLElementSiblingByDirection } from 'helpers/dom';
import { useExternRef } from 'hooks/useExternalRefs';

import { isHTMLElement } from '@floating-ui/utils/dom';
import { Icon16Cancel } from 'icons/16/cancel';

import { ChipProps } from 'components/Form/Chip/Chip';
import { MultiselectOption } from 'components/Form/Multiselect/types';
import { Tappable } from 'components/Service/Tappable/Tappable';
import { Subheadline } from 'components/Typography/Subheadline/Subheadline';
import { getValueOptionByHTMLElement } from './helpers/getValueOptionByHTMLElement';
import { renderChipDefault } from './constants';

export interface MultiselectBaseProps extends InputHTMLAttributes<HTMLInputElement> {
  /** Custom function to render Chip component. */
  renderChip?: (props: ChipProps) => JSX.Element;
  /** Ref to the input element within the multiselect base. */
  inputRef: RefObject<HTMLInputElement>;
  /** Array of selected options (chips). */
  chipsValue: MultiselectOption[];
  /** Callback function to add an option based on text input. */
  onAddChipOption: (optionText: string) => void;
  /** Callback function to remove a selected chip. */
  onRemoveChipOption: (option: MultiselectOption) => void;
}

/**
 * Renders the base layout of the multiselect including the chips (selected options) and the input field.
 */
export const MultiselectBase = forwardRef<HTMLDivElement, MultiselectBaseProps>(({
  inputRef,
  className,

  // Option props
  chipsValue,
  onAddChipOption,
  onRemoveChipOption,
  renderChip = renderChipDefault,

  // Input props
  value,
  placeholder,
  disabled,
  readOnly,
  ...restProps
}, ref) => {
  const listRef = useExternRef<HTMLDivElement>(ref);

  const valueLength = chipsValue.length;
  const withPlaceholder = valueLength === 0;
  const isDisabled = disabled || readOnly;

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const targetEl = event.target;
    const inputEl = inputRef.current;

    if (event.defaultPrevented || !inputEl || !isHTMLElement(targetEl)) {
      return;
    }

    const lastOptionIndex = valueLength - 1;

    const nextInputValue = inputEl.value;
    const isInputEl = targetEl === inputEl;
    const isInputValueEmpty = nextInputValue === '';

    switch (event.key) {
      case Keys.ENTER: {
        if (isInputEl && !isInputValueEmpty) {
          event.preventDefault();
          onAddChipOption(nextInputValue);
        }
        break;
      }

      case Keys.BACKSPACE: {
        if (valueLength) {
          const option =
            isInputEl && isInputValueEmpty
              ? chipsValue[lastOptionIndex]
              : getValueOptionByHTMLElement(chipsValue, targetEl);

          if (!option) {
            return;
          }

          event.preventDefault();
          inputRef.current.focus();
          onRemoveChipOption(option);
        }
        break;
      }

      case Keys.ARROW_UP:
      case Keys.ARROW_LEFT:
      case Keys.ARROW_DOWN:
      case Keys.ARROW_RIGHT: {
        if (!valueLength || !listRef.current) {
          break;
        }

        const isSelectionOnFirstLetter = inputEl.selectionStart === 0;
        const isRightSelection = event.key === Keys.ARROW_RIGHT && isSelectionOnFirstLetter;

        if (!isInputValueEmpty && !isSelectionOnFirstLetter || isRightSelection) {
          break;
        }

        event.preventDefault();
        let foundEl: HTMLElement | null = null;
        const horizontalSide = getHorizontalSideByKey(event.key);

        if (isInputEl && (event.key === Keys.ARROW_UP || event.key === Keys.ARROW_LEFT)) {
          foundEl = getHTMLElementByChildren(listRef.current.children, lastOptionIndex);
        } else if (horizontalSide) {
          foundEl = getHTMLElementSiblingByDirection(targetEl, horizontalSide);
        }

        foundEl && foundEl.focus();
        break;
      }

      default:
        break;
    }
  };

  const handleChipRemove = (event: MouseEvent, optionToRemove: MultiselectOption) => {
    event.preventDefault();
    event.stopPropagation();
    onRemoveChipOption(optionToRemove);
  };

  const handleClick = () => {
    const isFocused = document.activeElement === inputRef.current;
    if (!isFocused && inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    // eslint-disable-next-line jsx-a11y/interactive-supports-focus
    <div
      ref={listRef}
      className={classNames(
        styles.wrapper,
        withPlaceholder && styles['wrapper--withPlaceholder'],
        className,
      )}
      onClick={isDisabled ? undefined : handleClick}
      role="listbox"
      aria-orientation="horizontal"
      aria-disabled={disabled}
      aria-readonly={readOnly}
      onKeyDown={isDisabled ? undefined : handleKeyDown}
    >
      {chipsValue.map((option, index) => (
        <Fragment key={`${typeof option.value}-${option.label}`}>
          {renderChip(
            {
              children: option.label,
              className: styles.chip,
              value: option.value,
              tabIndex: -1,
              after: (
                <Tappable
                  Component="div"
                  interactiveAnimation="opacity"
                  onClick={(event) => handleChipRemove(event, option)}
                  className={styles.closeIcon}
                >
                  <Icon16Cancel />
                </Tappable>
              ),
              role: 'option',
              'aria-selected': true,
              'aria-posinset': index + 1,
              'aria-setsize': valueLength,
            },
          )}
        </Fragment>
      ))}
      <Subheadline
        ref={inputRef}
        aria-autocomplete="list"
        autoCapitalize="none"
        autoComplete="off"
        autoCorrect="off"
        spellCheck={false}
        {...restProps}
        Component="input"
        type="text"
        className={styles.input}
        disabled={disabled}
        readOnly={readOnly}
        placeholder={withPlaceholder ? placeholder : undefined}
      />
    </div>
  );
});
