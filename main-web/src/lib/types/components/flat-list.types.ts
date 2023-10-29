import { ReactElement } from 'react';

export type KeyType = string | number;
export type keyExtractorType = (value: KeyType, keyPrefix?: string) => string;
export type RenderItemFunction<T> = (value: T, key: keyExtractorType) => ReactElement;
