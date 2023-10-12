import { CurrentThemes } from 'styled-components';
import { ComponentVariantsEnum } from '@/lib/constants';

export type ComponentVariants = ComponentVariantsEnum.PRIMARY | ComponentVariantsEnum.SECONDARY;

export interface IThemedComponent {
  theme?: CurrentThemes;
}

export interface IVariantedComponent {
  variant?: ComponentVariants;
}

/**
 * ? EXAMPLE
 * ? interface IComponentProps extends IThemedComponent, IVariantedComponent {
 * ?  ...other props
 * ? }
 */
