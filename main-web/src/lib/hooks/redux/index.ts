import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux';
import { TypedDispatch, TypedRootState } from '@/lib/types';

export const useAppDispatch = () => useDispatch<TypedDispatch>();
export const useAppSelector: TypedUseSelectorHook<TypedRootState> = useSelector;
