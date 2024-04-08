import { forwardRef, ForwardRefExoticComponent, Fragment, MouseEvent, RefAttributes, RefObject } from 'react';
import styles from './MultiselectDropdown.module.css';

import { Cell, CellProps } from 'components/Blocks/Cell/Cell';
import { MultiselectOption } from 'components/Form/Multiselect/types';
import { Popper } from 'components/Overlays/Popper/Popper';
import { isCreateNewOptionPreset, isEmptyOptionPreset } from '../../hooks/constants';
import { UseMultiselectProps } from '../../hooks/useMultiselect';
import { renderOptionDefault } from './constants';

export interface MultiselectDropdownProps extends Required<Pick<UseMultiselectProps, 'options' | 'value'>> {
  /** Array of selected options. */
  value: MultiselectOption[];
  /** Reference to the target element the dropdown is associated with. */
  targetRef: RefObject<HTMLElement>;
  /** Accessibility ID for the dropdown. */
  dropdownAriaId: string;
  /** Currently focused option within the dropdown. */
  focusedOption: MultiselectOption | null;
  /** Function to register a DOM node with an option index. */
  setOptionNode: (index: number, node: HTMLElement) => void;
  /** Function to control the open state of the dropdown. */
  setOpened: (opened: boolean) => void;
  /** Index of the currently focused option. */
  focusedOptionIndex: number | null;
  /** Function to update the index of the focused option. */
  setFocusedOptionIndex: (index: number) => void;
  /** Function to add an option derived from the input value. */
  addOptionFromInput: () => void;
  /** Mouse leave event handler for the dropdown. */
  onMouseLeave: (event: MouseEvent<HTMLDivElement>) => void;
  /** Function to add a selected option. */
  addOption: (option: MultiselectOption) => void;
  /** Function to clear the input value. */
  clearInput: () => void;
  /** Custom render function for each option. Defaults to a basic implementation. */
  renderOption?: ForwardRefExoticComponent<CellProps & RefAttributes<unknown>>;
  /** Whether to close the dropdown after selecting an option. */
  closeDropdownAfterSelect?: boolean;
}

/**
 * Renders the dropdown menu for the multiselect input, including all options and managing interactions such as selection, focus, and mouse events.
 * Utilizes the `Popper` component for positioning relative to the input field.
 */
export const MultiselectDropdown = forwardRef<HTMLDivElement, MultiselectDropdownProps>(({
  dropdownAriaId,
  options,
  onMouseLeave,
  targetRef,
  addOptionFromInput,
  setFocusedOptionIndex,
  renderOption = renderOptionDefault,
  focusedOption,
  value,
  setOptionNode,
  setOpened,
  closeDropdownAfterSelect,
  addOption,
  focusedOptionIndex,
  clearInput,
}, ref) => {

  return (
    <Popper
      id={dropdownAriaId}
      ref={ref}
      targetRef={targetRef}
      onMouseLeave={onMouseLeave}
      autoUpdateOnTargetResize
      role="listbox"
      placement="bottom"
      sameWidth
      className={styles.wrapper}
    >
      {options.map((option, index) => {
        if (isEmptyOptionPreset(option)) {
          return (
            <Cell key="empty" readOnly className={styles.empty}>
              {option.placeholder}
            </Cell>
          );
        }

        if (isCreateNewOptionPreset(option)) {
          return (
            <Cell
              key="new-options"
              hovered={focusedOptionIndex === index}
              onMouseDown={addOptionFromInput}
              onMouseEnter={() => setFocusedOptionIndex(index)}
            >
              {option.actionText}
            </Cell>
          );
        }

        return (
          <Fragment key={`${typeof option.value}-${option.label}`}>
            {renderOption(
              {
                className: styles.option,
                hovered: focusedOption
                  ? option.value === focusedOption.value
                  : false,
                children: option.label,
                selected: value.findIndex((selectedOption) => selectedOption.value === option.value) !== -1,
                ref: (node: HTMLElement) => setOptionNode(index, node),
                onMouseDown: (event: MouseEvent<HTMLDivElement>) => {
                  if (event.defaultPrevented) {
                    return;
                  }

                  closeDropdownAfterSelect && setOpened(false);
                  addOption(option);
                  clearInput();
                },
                onMouseEnter: () => setFocusedOptionIndex(index),
              },
            )}
          </Fragment>
        );
      })}
    </Popper>
  );
});
