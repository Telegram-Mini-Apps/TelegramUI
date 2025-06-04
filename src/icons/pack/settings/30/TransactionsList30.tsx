/* eslint-disable */
import type { JSX } from 'react';

type SvgAttributes = JSX.IntrinsicElements['svg'];

export interface TransactionsList30Props extends SvgAttributes {
  /**
   * Icon size. This value will be passed to the SVG's width and height attributes.
   * @default 30
   */
  size?: SvgAttributes['width'];
}

export function TransactionsList30({ size = 30, ...props }: TransactionsList30Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 30 30" width={size} height={size} {...props}><rect width="30" height="30" fill="currentColor" rx="7"/><path fill="#fff" fill-rule="evenodd" d="M7.77 7.055a.25.25 0 0 1 .46 0l.373.894a.25.25 0 0 0 .21.153l.965.077a.25.25 0 0 1 .143.44l-.735.63a.25.25 0 0 0-.08.247l.224.942a.25.25 0 0 1-.374.271l-.826-.504a.25.25 0 0 0-.26 0l-.827.504a.25.25 0 0 1-.373-.271l.225-.942a.25.25 0 0 0-.08-.248l-.736-.63a.25.25 0 0 1 .142-.439l.966-.077a.25.25 0 0 0 .21-.153zm.46 6a.25.25 0 0 0-.46 0l-.373.894a.25.25 0 0 1-.21.153l-.966.077a.25.25 0 0 0-.142.44l.735.63a.25.25 0 0 1 .08.247l-.224.942a.25.25 0 0 0 .373.271l.827-.504a.25.25 0 0 1 .26 0l.826.504a.25.25 0 0 0 .374-.271l-.225-.942a.25.25 0 0 1 .08-.248l.736-.63a.25.25 0 0 0-.143-.439l-.965-.077a.25.25 0 0 1-.21-.153zM13 14.25a.75.75 0 0 0 0 1.5h10.5a.75.75 0 0 0 0-1.5zm0-6a.75.75 0 0 0 0 1.5h10.5a.75.75 0 0 0 0-1.5zM7.77 19.055a.25.25 0 0 1 .46 0l.373.894a.25.25 0 0 0 .21.153l.965.077a.25.25 0 0 1 .143.44l-.735.63a.25.25 0 0 0-.08.247l.224.942a.25.25 0 0 1-.374.271l-.826-.504a.25.25 0 0 0-.26 0l-.827.504a.25.25 0 0 1-.373-.271l.225-.942a.25.25 0 0 0-.08-.248l-.736-.63a.25.25 0 0 1 .142-.439l.966-.077a.25.25 0 0 0 .21-.153zM13 20.25a.75.75 0 0 0 0 1.5h10.5a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"/></svg>
  );
}
