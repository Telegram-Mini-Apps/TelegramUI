import { useEffect, useLayoutEffect } from 'react';

import { canUseDOM } from 'helpers/dom';

/**
 * A version of `useLayoutEffect` that does not show a warning when server-side rendering.
 * This is useful for effects that are only needed for client-side rendering but not for SSR.
 */
export const useEnhancedEffect = canUseDOM ? useLayoutEffect : useEffect;
