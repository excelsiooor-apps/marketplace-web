/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { defineCurrentTheme } from '@/lib/helpers';
import { themeActions, themeSelector } from '@/lib/store';
import { useTypedDispatch, useTypedSelector } from '../redux';

export const useDefinedTheme = () => {
  const { current } = useTypedSelector(themeSelector);
  const { setCurrentTheme, setIsThemeDefining } = themeActions;
  const dispatch = useTypedDispatch();

  const currentTheme = defineCurrentTheme();

  useEffect(() => {
    if (!current) {
      dispatch(setIsThemeDefining(true));
      dispatch(setCurrentTheme(currentTheme));
      return;
    }
    dispatch(setIsThemeDefining(false));
  }, [current]);
};
