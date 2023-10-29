import { ReactElement } from 'react';

export type KeyType = string | number;
export type KeyExtractorType = (value: KeyType, keyPrefix?: string) => string;
export type RenderItemFunction<T> = (value: T, key: KeyExtractorType) => ReactElement;
