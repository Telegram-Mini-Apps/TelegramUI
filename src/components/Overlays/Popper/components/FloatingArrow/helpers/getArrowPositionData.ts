import { CSSProperties } from 'react';

import { Placement } from '@floating-ui/react-dom';

export type Coords = {
  x?: number;
  y?: number;
};

export const getArrowPositionData = (
  placement: Placement,
  coords: Coords = { x: 0, y: 0 },
  offset = 0,
  isStaticOffset = false,
): [undefined | 'right' | 'bottom' | 'left', CSSProperties] => {
  const withOffset = (isVerticalPlacement: boolean) => {
    const parsedCoords = { x: coords.x || 0, y: coords.y || 0 };
    return isStaticOffset ? offset : parsedCoords[isVerticalPlacement ? 'y' : 'x'] + offset;
  };

  if (placement.startsWith('top')) {
    return [
      'bottom',
      {
        top: '100%',
        left: withOffset(false),
      },
    ];
  }

  if (placement.startsWith('right')) {
    return [
      'left',
      {
        top: withOffset(true),
        left: 0,
      },
    ];
  }

  if (placement.startsWith('bottom')) {
    return [
      undefined,
      {
        bottom: '100%',
        left: withOffset(false),
      },
    ];
  }

  return [
    'right',
    {
      top: withOffset(true),
      right: 0,
    },
  ];

};
