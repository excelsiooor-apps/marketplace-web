import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux';
import { TypedDispatch, TypedRootState } from '@/lib/store/core';

export const useTypedDispatch = () => useDispatch<TypedDispatch>();
export const useTypedSelector: TypedUseSelectorHook<TypedRootState> = useSelector;
