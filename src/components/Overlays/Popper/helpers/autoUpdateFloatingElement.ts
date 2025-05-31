import type { FloatingElement } from '@floating-ui/core';
import type { AutoUpdateOptions, ReferenceType } from '@floating-ui/react-dom';
import { autoUpdate } from '@floating-ui/react-dom';
import { isHTMLElement } from '@floating-ui/utils/dom';

const defaultOptions = {
  ancestorScroll: true,
  ancestorResize: true,
  elementResize: false,
  animationFrame: false,
};

export const autoUpdateFloatingElement = (
  reference: ReferenceType,
  floating: FloatingElement,
  update: () => void,
  options: Partial<AutoUpdateOptions> = defaultOptions
): ReturnType<typeof autoUpdate> => {
  const { elementResize = false, ...restOptions } = options;

  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  const autoUpdateLibDisposer = autoUpdate(reference, floating, update, {
    ...restOptions,
    elementResize: false,
  });

  let observer: MutationObserver | null = null;
  if (elementResize) {
    let initialUpdate = true;
    observer = new MutationObserver(() => {
      if (!initialUpdate) {
        update();
      }

      initialUpdate = false;
    });

    if (isHTMLElement(reference)) {
      observer.observe(reference, {
        childList: true,
        subtree: true,
      });
    }

    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    observer.observe(floating, {
      childList: true,
      subtree: true,
    });
  }

  return () => {
    if (observer !== null) {
      observer.disconnect();
      observer = null;
    }
    autoUpdateLibDisposer();
  };
};
