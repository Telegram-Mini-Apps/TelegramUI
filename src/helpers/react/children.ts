// Code from library from react-children-utilities
// @see https://github.com/fernandopasik/react-children-utilities/tree/main

import { Children, isValidElement, ReactNode } from 'react';

export const childToString = (child?: ReactNode): string => {
  if (typeof child === 'undefined' || child === null || typeof child === 'boolean') {
    return '';
  }

  if (JSON.stringify(child) === '{}') {
    return '';
  }

  return (child as number | string).toString();
};

export const getTextFromChildren = (children: ReactNode | ReactNode[]): string => {
  if (!(children instanceof Array) && !isValidElement(children)) {
    return childToString(children);
  }

  return Children.toArray(children).reduce((text: string, child: ReactNode): string => {
    let newText = '';
    const isValidElementResult = isValidElement<{ children?: ReactNode | ReactNode[] }>(child);
    const hasChildren = isValidElementResult && 'children' in child.props;

    if (isValidElementResult && hasChildren) {
      newText = getTextFromChildren(child.props.children);
    } else if (isValidElementResult && !hasChildren) {
      newText = '';
    } else {
      newText = childToString(child);
    }

    return text.concat(newText);
  }, '');
};
