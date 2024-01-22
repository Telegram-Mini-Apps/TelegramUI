/* eslint-disable @typescript-eslint/no-explicit-any */

export const callMultiple =
  (...fns: any) =>
    (...args: any) =>
      fns.filter((f: any) => typeof f === 'function').forEach((f: any) => f(...args));
