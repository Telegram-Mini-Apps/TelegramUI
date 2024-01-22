import { MutableRefObject } from 'react';

export const calcMarginTop = (expanded: boolean, bodyRef: HTMLElement | null): string => {
  if (expanded) {
    return '0px';
  }

  // We don't know the height of the element in the first render
  if (bodyRef === null) {
    return '-100%';
  }

  return `${-bodyRef.clientHeight}px`;
};

export const useAccordionStyles = (
  expanded: boolean,
  bodyRef: MutableRefObject<HTMLDivElement | null>,
) => {
  const marginTop = calcMarginTop(expanded, bodyRef.current);

  return {
    marginTop,
    // We don't want to animate the first render
    transition: bodyRef.current === null ? 'none' : undefined,
  };
};
