/* eslint-disable @typescript-eslint/no-explicit-any */

import { isObjectLike } from './object';

export const isEqual = (value: any, other: any): boolean => {
  if (value === other) {
    return true;
  }

  if (
    value == null ||
    other == null ||
    (!isObjectLike(value) && !isObjectLike(other))
  ) {
    return false;
  }

  if (isObjectLike(value) && isObjectLike(other)) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    if (Object.keys(value).length !== Object.keys(other).length) {
      return false;
    }

    for (const prop in value) {
      if (
        Object.prototype.hasOwnProperty.call(value, prop) &&
        Object.prototype.hasOwnProperty.call(other, prop)
      ) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
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
