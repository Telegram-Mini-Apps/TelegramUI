export const calcMaxHeight = (expanded: boolean, bodyElement: HTMLElement | null): string => {
  if (!expanded) {
    return '0px';
  }

  // We don't know the height of the element in the first render
  if (bodyElement === null) {
    return 'inherit';
  }

  return `${bodyElement.scrollHeight}px`;
};
