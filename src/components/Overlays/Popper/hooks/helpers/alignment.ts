import { Placement } from '@floating-ui/react-dom';

import { AutoPlacementType, PlacementWithAuto } from '../types';

export const isNotAutoPlacement = (placement: PlacementWithAuto): placement is Placement => {
  return !placement.startsWith('auto');
};

export const getAutoPlacementAlignment = (placement: AutoPlacementType): 'start' | 'end' | null => {
  const align = placement.replace(/auto-|auto/, '');
  return align === 'start' || align === 'end' ? align : null;
};
