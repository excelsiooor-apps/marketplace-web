/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable global-require */
import { renderHook } from '@testing-library/react-hooks';
import { expect } from '@jest/globals';
import { AppThemesEnum } from '@/lib/constants';
import { theme as globalTheme } from '@/lib/theme';
import { useCurrentPallete } from '../use-current-palette';

// Mock the useTheme function
jest.mock('styled-components', () => ({
  useTheme: jest.fn(),
  createGlobalStyle: jest.fn(),
}));

describe('useCurrentPallete', () => {
  const { theme } = globalTheme;
  beforeAll(() => {
    // Mock the useTheme hook to return the theme
    require('styled-components').useTheme.mockReturnValue({ theme });
  });
  it('should return the current light palette', () => {
    const { result } = renderHook(() => useCurrentPallete(AppThemesEnum.LIGHT));

    // Assert that the result matches the expected light theme palette
    expect(result.current).toEqual(theme[AppThemesEnum.LIGHT]);
  });

  it('should return the current dark palette', () => {
    const { result } = renderHook(() => useCurrentPallete(AppThemesEnum.DARK));

    // Assert that the result matches the expected dark theme palette
    expect(result.current).toEqual(theme[AppThemesEnum.DARK]);
  });
});
