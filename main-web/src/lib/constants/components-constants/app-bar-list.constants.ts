import { IAppBarListItem } from '@/lib/types';
import { RouterKeys } from '../router-constants';

export const APP_BAR_LIST: IAppBarListItem[] = [
  {
    id: 0,
    title: 'Home',
    type: 'main',
    route: RouterKeys.HOME,
  },
  {
    id: 0,
    title: 'Categories',
    type: 'main',
    route: null,
  },
];
