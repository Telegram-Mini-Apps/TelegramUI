type ClassNamesDictionary = Record<string, boolean | undefined | null>;

export type ClassName =
  | string
  | number
  | ClassNamesDictionary
  | boolean
  | undefined
  | null;

export function classNames(...args: ClassName[]): string {
  const result: string[] = [];

  for (const item of args) {
    if (!item) {
      continue;
    }

    switch (typeof item) {
      case 'string': {
        result.push(item);
        break;
      }

      case 'object': {
        for (const key of Object.keys(item)) {
          if (item[key]) {
            result.push(key);
          }
        }
        break;
      }

      default: {
        result.push(`${item}`);
      }
    }
  }

  return result.join(' ');
}
