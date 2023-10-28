import { FC } from 'react';
import { IThemedComponent } from '@/lib/types';
import { APP_BAR_LIST } from '@/lib/constants';
import { ListItem, Wrapper } from './app-bar-list.styled';

// interface IComponentProps extends IThemedComponent {}

export const AppBarListComponent: FC<IThemedComponent> = ({ palette }) => {
  return (
    <Wrapper>
      {APP_BAR_LIST.map(item => (
        <ListItem key={`ListItem=${item.id}`}>{item.title}</ListItem>
      ))}
    </Wrapper>
  );
};
