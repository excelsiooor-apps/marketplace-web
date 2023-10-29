import { FC } from 'react';
import { IAppBarListItem, IThemedComponent, RenderItemFunction } from '@/lib/types';
import { APP_BAR_LIST } from '@/lib/constants';
import { RenderList } from '@/components/shared/lists';
import { ListItem, Wrapper } from './app-bar-list.styled';

// interface IComponentProps extends IThemedComponent {}

export const AppBarListComponent: FC<IThemedComponent> = ({ palette }) => {
  const renderItem: RenderItemFunction<IAppBarListItem> = (value, key) => (
    <ListItem key={key(value.id)}>{value.title}</ListItem>
  );
  return <RenderList<IAppBarListItem> data={APP_BAR_LIST} renderItem={renderItem} wrapper={Wrapper} />;
};
