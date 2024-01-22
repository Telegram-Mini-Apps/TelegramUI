/* eslint-disable @typescript-eslint/no-explicit-any */

import { isObjectLike } from './object';

export const isEqual = (value: any, other: any): boolean => {
  if (value === other) {
    return true;
  }

  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return false;
  }

  if (isObjectLike(value) && isObjectLike(other)) {
    if (Object.keys(value).length !== Object.keys(other).length) {
      return false;
    }

    // eslint-disable-next-line no-restricted-syntax
    for (const prop in value) {
      if (Object.prototype.hasOwnProperty.call(value, prop) && Object.prototype.hasOwnProperty.call(other, prop)) {
        if (!isEqual(value[prop], other[prop])) {
          return false;
        }
      } else {
        return false;
      }
    }

    return true;
  }

  return false;
};

