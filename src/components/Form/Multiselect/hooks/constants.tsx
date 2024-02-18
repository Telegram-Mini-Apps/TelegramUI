import { MultiselectOption } from 'components/Form/Multiselect/types';

export type FocusActionType = 'next' | 'prev';

export const DEFAULT_SELECTED_BEHAVIOR = 'highlight';

export const DEFAULT_EMPTY_TEXT = 'Nothing found';

export const FOCUS_ACTION_NEXT: FocusActionType = 'next';

export const FOCUS_ACTION_PREV: FocusActionType = 'prev';

export const isCreateNewOptionPreset = (option: MultiselectOption) => {
  return option && 'actionText' in option;
};

export const isEmptyOptionPreset = (option: MultiselectOption) => {
  return option && 'placeholder' in option;
};

export const isNotServicePreset = (option: MultiselectOption) =>
  !isCreateNewOptionPreset(option) && !isEmptyOptionPreset(option);

