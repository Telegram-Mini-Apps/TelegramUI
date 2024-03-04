export const calcMaxHeight = (expanded: boolean, bodeElement: HTMLElement | null): string => {
  if (!expanded) {
    return '0px';
  }

  // We don't know the height of the element in the first render
  if (bodeElement === null) {
    return 'inherit';
  }

  return `${bodeElement.scrollHeight}px`;
};
