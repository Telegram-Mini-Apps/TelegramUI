import { ChangeEvent, SyntheticEvent } from 'react';

import { PaginationType } from './enum';

export interface UsePaginationProps {
  /** Number of always visible pages at the beginning and end. */
  boundaryCount?: number;
  /** The total number of pages. */
  count?: number;
  /** The page selected by default when the component is uncontrolled */
  defaultPage?: number;
  /** If `true`, hide the next-page button. */
  hideNextButton?: boolean;
  /** If `true`, hide the previous-page button. */
  hidePrevButton?: boolean;
  /** Callback fired when the page is changed. */
  onChange?: (event: ChangeEvent<unknown>, page: number) => void;
  /** The current page. */
  page?: number;
  /** Number of always visible pages before and after the current page. */
  siblingCount?: number;
}

export interface UsePaginationItem {
  onClick: (event: SyntheticEvent<Element, Event>) => void;
  type: PaginationType;
  page: number | null;
  selected: boolean;
  disabled: boolean;
  'aria-current'?: 'true' | 'false';
}
