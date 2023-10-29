import React, { ComponentType, Fragment, ReactElement, ReactNode } from 'react';
import { HttpResponse } from 'global-types';
import { RenderItemFunction, keyExtractorType } from '@/lib/types';

type WrapperChildrenType = { children: ReactElement | ReactNode };

interface RenderListProps<T> {
  data: HttpResponse<T> | T[];
  wrapper?: ComponentType<WrapperChildrenType>;
  renderItem: RenderItemFunction<T>;
  noDataElement?: () => ReactElement;
}

export const RenderList = <ItemGeneric,>({
  data,
  wrapper,
  renderItem,
  noDataElement,
}: RenderListProps<ItemGeneric>) => {
  const Wrapper = wrapper || Fragment;
  const noDataMessage = noDataElement ? noDataElement() : null;

  const isRenderrebleData = Array.isArray(data);

  const key: keyExtractorType = (value, keyPrefix = '') => `${keyPrefix}${value}`;

  const validatedData =
    isRenderrebleData && data.length > 0 ? data.map(value => renderItem(value, key)) : noDataMessage;

  return <Wrapper>{isRenderrebleData && validatedData}</Wrapper>;
};
