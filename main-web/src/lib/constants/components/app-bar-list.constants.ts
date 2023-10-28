import { IAppBarListItem } from '@/lib/types/components/app-bar-list.types';
import { RouterKeys } from '../router/router.constants';

export const APP_BAR_LIST: IAppBarListItem[] = [
  {
    id: 0,
    title: 'Home',
    type: 'main',
    route: RouterKeys.HOME,
  },
  {
    id: 1,
    title: 'Categories',
    type: 'main',
    route: null,
  },
];
