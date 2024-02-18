import { MultiselectOption } from 'components/Form/Multiselect/types';

export const getValueOptionByHTMLElement = (options: MultiselectOption[], el: HTMLElement) => {
  const value = el.getAttribute('value');
  return options.find((v) => v.value === value);
};
