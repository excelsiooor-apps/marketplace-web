import { Nullable } from 'global-types';

export interface IAppBarListItem {
  id: number;
  title: string;
  type: 'main' | 'sublist' | 'subitem';
  route: Nullable<string>;
}

export interface IAppBarListItemResponse extends IAppBarListItem {
  children: IAppBarListItem[];
}
