import type { Ref } from 'react';

export interface RefProps<T extends HTMLElement = HTMLElement> {
  ref?: Ref<T>;
}
