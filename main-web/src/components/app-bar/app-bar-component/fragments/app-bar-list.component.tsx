import { FC } from 'react';
import { IThemedComponent } from '@/lib/types';
import { ListItem, Wrapper } from './app-bar-list.styled';
import { mockDataForList } from './__mock__';

// interface IComponentProps extends IThemedComponent {}

export const AppBarListComponent: FC<IThemedComponent> = ({ palette }) => {
  return (
    <Wrapper>
      {mockDataForList.map(item => (
        <ListItem key={`ListItem=${item.id}`}>{item.title}</ListItem>
      ))}
    </Wrapper>
  );
};
