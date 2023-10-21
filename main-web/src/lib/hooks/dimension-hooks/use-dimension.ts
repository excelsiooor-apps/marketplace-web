import { useState, useCallback, useEffect } from 'react';
import { DimensionObject, UseDimensionsArgs, UseDimensionsHook } from '@/lib/types';

const getDimensionObject = (node: HTMLElement): DimensionObject => {
  const rect = node.getBoundingClientRect();

  return {
    width: rect.width,
    height: rect.height,
    top: rect.x ? rect.x : rect.top,
    left: rect.y ? rect.y : rect.left,
    x: rect.x ? rect.x : rect.left,
    y: rect.y ? rect.y : rect.top,
    right: rect.right,
    bottom: rect.bottom,
  };
};

export const useDimensions = ({ liveMeasure = true }: UseDimensionsArgs): UseDimensionsHook => {
  const [dimensions, setDimensions] = useState<DimensionObject>({
    width: null,
    height: null,
    top: null,
    left: null,
    x: null,
    y: null,
    right: null,
    bottom: null,
  });
  const [node, setNode] = useState<HTMLElement | null>(null);

  const ref = useCallback((newNode: HTMLElement) => {
    setNode(newNode);
  }, []);

  useEffect(() => {
    if (!node) return;

    const measure = () => window.requestAnimationFrame(() => setDimensions(getDimensionObject(node)));
    measure();

    if (liveMeasure) {
      window.addEventListener('resize', measure);
      window.addEventListener('scroll', measure);

      return () => {
        window.removeEventListener('resize', measure);
        window.removeEventListener('scroll', measure);
      };
    }
  }, [node, liveMeasure]);

  return [ref, dimensions, node];
};
