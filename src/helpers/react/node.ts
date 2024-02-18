import { ReactNode } from 'react';

export const hasReactNode = (value: ReactNode): boolean => {
  return value !== undefined && value !== false && value !== null && value !== '';
};

export function isPrimitiveReactNode(node: ReactNode): boolean {
  return typeof node === 'string' || typeof node === 'number';
}
