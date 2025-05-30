import { isHTMLElement } from '@floating-ui/utils/dom';

export const canUseDOM = (() =>
  !!(typeof window !== 'undefined' && window.document && window.document.createElement))();

export const getHTMLElementByChildren = (children: HTMLCollection, index: number) => {
  const foundEl = children[index];
  return isHTMLElement(foundEl) ? foundEl : null;
};

export const getHTMLElementSiblingByDirection = <T extends Element>(
  el: T,
  direction: 'left' | 'right'
) => {
  let siblingEl: Element | null = null;
  switch (direction) {
    case 'left':
      siblingEl = el.previousElementSibling;
      break;
    case 'right':
      siblingEl = el.nextElementSibling;
      break;

    default:
      return null;
  }

  return isHTMLElement(siblingEl) ? siblingEl : null;
};

