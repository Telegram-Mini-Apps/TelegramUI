'use client';

import { range } from 'helpers/array';
import { useCustomEnsuredControl } from 'hooks/useEnsureControl';

import { PaginationType } from './enum';
import { UsePaginationItem, UsePaginationProps } from './types';

/**
 * A bit changed hook from @mui
 * Source: https://github.com/mui/material-ui/blob/master/packages/mui-material/src/usePagination/usePagination.js
 * */
export const usePagination = ({
  boundaryCount = 1,
  count = 1,
  defaultPage = 1,
  hideNextButton = false,
  hidePrevButton = false,
  onChange,
  page: pageProp,
  siblingCount = 1,
}: UsePaginationProps): UsePaginationItem[] => {
  const [page, setPageState] = useCustomEnsuredControl({
    value: pageProp,
    defaultValue: defaultPage,
  });

  const handleClick: UsePaginationProps['onChange'] = (event, value) => {
    if (!pageProp) {
      setPageState(value);
    }

    if (onChange) {
      onChange(event, value);
    }
  };

  const startPages = range(1, Math.min(boundaryCount, count));
  const endPages = range(Math.max(count - boundaryCount + 1, boundaryCount + 1), count);

  const siblingsStart = Math.max(
    Math.min(
      // Natural start
      page - siblingCount,
      // Lower boundary when page is high
      count - boundaryCount - siblingCount * 2 - 1,
    ),
    // Greater than startPages
    boundaryCount + 2,
  );

  const siblingsEnd = Math.min(
    Math.max(
      // Natural end
      page + siblingCount,
      // Upper boundary when page is low
      boundaryCount + siblingCount * 2 + 2,
    ),
    // Less than endPages
    endPages.length > 0 ? endPages[0] - 2 : count - 1,
  );

  // Basic list of items to render
  // e.g. itemList = ['first', 'previous', 1, 'ellipsis', 4, 5, 6, 'ellipsis', 10, 'next', 'last']
  const itemList: Array<PaginationType | number> = [
    ...(hidePrevButton ? [] : [PaginationType.Previous]),
    ...startPages,

    // Start ellipsis
    // eslint-disable-next-line no-nested-ternary
    ...(siblingsStart > boundaryCount + 2
      ? [PaginationType.StartEllipsis]
      : boundaryCount + 1 < count - boundaryCount
        ? [boundaryCount + 1]
        : []),

    // Sibling pages
    ...range(siblingsStart, siblingsEnd),

    // End ellipsis
    // eslint-disable-next-line no-nested-ternary
    ...(siblingsEnd < count - boundaryCount - 1
      ? [PaginationType.EndEllipsis]
      : count - boundaryCount > boundaryCount
        ? [count - boundaryCount]
        : []),

    ...endPages,
    ...(hideNextButton ? [] : [PaginationType.Next]),
  ];

  // Map the button type to its page number
  const buttonPage = (type: UsePaginationItem['type']) => {
    switch (type) {
      case 'previous':
        return page - 1;
      case 'next':
        return page + 1;
      default:
        return null;
    }
  };

  return itemList.map<UsePaginationItem>((typeOrPageNumber) => {
    if (typeof typeOrPageNumber === 'number') {
      return {
        onClick: (event) => handleClick(event, typeOrPageNumber),
        type: PaginationType.Page,
        page: typeOrPageNumber,
        selected: typeOrPageNumber === page,
        disabled: false,
        'aria-current': typeOrPageNumber === page ? 'true' : undefined,
      };
    }

    return {
      onClick: (event) => handleClick(event, buttonPage(typeOrPageNumber) || 0),
      type: typeOrPageNumber,
      page: buttonPage(typeOrPageNumber),
      selected: false,
      disabled:
        (![PaginationType.StartEllipsis, PaginationType.EndEllipsis].includes(typeOrPageNumber) &&
          (typeOrPageNumber === PaginationType.Next ? page >= count : page <= 1)),
    };
  });
};
