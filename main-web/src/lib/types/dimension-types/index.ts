import { Nullable } from 'global-types';

export interface DimensionObject {
  width: Nullable<number>;
  height: Nullable<number>;
  top: Nullable<number>;
  left: Nullable<number>;
  x: Nullable<number>;
  y: Nullable<number>;
  right: Nullable<number>;
  bottom: Nullable<number>;
}

export type UseDimensionsHook = [
  (node: HTMLElement) => void,
  DimensionObject,
  measureHandler: () => Nullable<number>,
  Nullable<HTMLElement>,
];

export interface UseDimensionsArgs {
  liveMeasure?: boolean;
}
