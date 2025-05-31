import type { RefObject } from 'react';

export interface RefProps<T extends HTMLElement = HTMLElement> {
  ref?: RefObject<T | null>;
}
