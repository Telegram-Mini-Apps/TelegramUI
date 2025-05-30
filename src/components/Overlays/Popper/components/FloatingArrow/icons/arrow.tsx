import type { SVGAttributes } from 'react';

export const DEFAULT_ARROW_WIDTH = 22;
export const DEFAULT_ARROW_HEIGHT = 6;
export const DEFAULT_ARROW_PADDING = 12;

const PLATFORM_HEIGHT = 1;
const ARROW_HEIGHT_WITH_WHITE_SPACE = DEFAULT_ARROW_HEIGHT + PLATFORM_HEIGHT;

export const DefaultIcon = (props: SVGAttributes<SVGSVGElement>) => (
  <svg
    width={DEFAULT_ARROW_WIDTH}
    height={ARROW_HEIGHT_WITH_WHITE_SPACE}
    viewBox={`0 0 ${DEFAULT_ARROW_WIDTH} ${ARROW_HEIGHT_WITH_WHITE_SPACE}`}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M10.804 0C6.387 0 6.94 6 .865 6h19.878c-6.074 0-5.521-6-9.939-6Z" fill="currentColor" />
  </svg>
);

