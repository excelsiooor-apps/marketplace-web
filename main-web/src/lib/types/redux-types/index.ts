import { rootReducer, setupStore } from '@/lib/store';

export type TypedRootState = ReturnType<typeof rootReducer>;
export type TypedAppStore = ReturnType<typeof setupStore>;
export type TypedDispatch = TypedAppStore['dispatch'];
