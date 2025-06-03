// originally from floating-ui
// https://github.com/floating-ui/floating-ui/blob/3224f2c9a16942b2ce4343704df274b07f859856/packages/utils/src/dom.ts
function hasWindow() {
  return typeof window !== 'undefined';
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getWindow(node: any): typeof window {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-member-access
  return node?.ownerDocument?.defaultView || window;
}

export function isElement(value: unknown): value is Element {
  if (!hasWindow()) {
    return false;
  }

  return value instanceof Element || value instanceof getWindow(value).Element;
}

export function isHTMLElement(value: unknown): value is HTMLElement {
  if (!hasWindow()) {
    return false;
  }

  return (
    value instanceof HTMLElement ||
    value instanceof getWindow(value).HTMLElement
  );
}

export const canUseDOM = (() =>
  !!(
    typeof window !== 'undefined' &&
    window.document &&
    window.document.createElement
  ))();

export const getHTMLElementByChildren = (
  children: HTMLCollection,
  index: number
) => {
  const foundEl = children[index];
  return isHTMLElement(foundEl) ? foundEl : null;
};

export const getHTMLElementSiblingByDirection = <T extends Element>(
  el: T,
  direction: 'left' | 'right'
) => {
  let siblingEl: Element | null = null;
  switch (direction) {
    case 'left': {
      siblingEl = el.previousElementSibling;
      break;
    }
    case 'right': {
      siblingEl = el.nextElementSibling;
      break;
    }

    default: {
      return null;
    }
  }

  return isHTMLElement(siblingEl) ? siblingEl : null;
};
