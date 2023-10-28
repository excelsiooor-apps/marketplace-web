import { Palette } from 'styled-components';
import { ComponentVariantsEnum } from '@/lib/constants/components/components.constants';

export type ComponentVariants = ComponentVariantsEnum.PRIMARY | ComponentVariantsEnum.SECONDARY;

export interface IThemedComponent {
  palette: Palette;
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
