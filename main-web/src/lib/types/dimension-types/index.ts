export interface DimensionObject {
  width: number | null;
  height: number | null;
  top: number | null;
  left: number | null;
  x: number | null;
  y: number | null;
  right: number | null;
  bottom: number | null;
}

export type UseDimensionsHook = [(node: HTMLElement) => void, DimensionObject, HTMLElement | null];

export interface UseDimensionsArgs {
  liveMeasure?: boolean;
}
