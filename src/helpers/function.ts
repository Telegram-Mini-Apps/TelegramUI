/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access, unicorn/no-array-for-each */

export const callMultiple =
  (...fns: any) =>
  (...args: any) =>
    fns
      .filter((f: any) => typeof f === 'function')
      .forEach((f: any) => f(...args));
