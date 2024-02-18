import { forwardRef, ForwardRefExoticComponent, Fragment, MouseEvent, RefAttributes, RefObject } from 'react';
import styles from './MultiselectDropdown.module.css';

import { Cell, CellProps } from 'components/Blocks/Cell/Cell';
import { MultiselectOption } from 'components/Form/Multiselect/types';
import { Popper } from 'components/Overlays/Popper/Popper';
import { isCreateNewOptionPreset, isEmptyOptionPreset } from '../../hooks/constants';
import { UseMultiselectProps } from '../../hooks/useMultiselect';
import { renderOptionDefault } from './constants';

export interface MultiselectDropdownProps extends Required<Pick<UseMultiselectProps, 'options' | 'value'>> {
  value: MultiselectOption[];
  targetRef: RefObject<HTMLElement>;
  dropdownAriaId: string;
  focusedOption: MultiselectOption | null;
  setOptionNode: (index: number, node: HTMLElement) => void;
  setOpened: (opened: boolean) => void;
  focusedOptionIndex: number | null;
  setFocusedOptionIndex: (index: number) => void;
  addOptionFromInput: () => void;
  onMouseLeave: (event: MouseEvent<HTMLDivElement>) => void;
  addOption: (option: MultiselectOption) => void;
  clearInput: () => void;

  /** Custom function to render Option-Cell component */
  renderOption?: ForwardRefExoticComponent<CellProps & RefAttributes<unknown>>;

  /** Close dropdown after select, false by default */
  closeDropdownAfterSelect?: boolean;
}

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
                selected: !!value.find((selectedOption) => selectedOption.value === option.value),
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
