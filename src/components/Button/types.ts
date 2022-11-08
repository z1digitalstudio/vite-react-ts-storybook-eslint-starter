import type {
  ButtonHTMLAttributes,
  MouseEvent,
  ReactNode,
  TouchEvent,
} from 'react';

export type ButtonProps = {
  ariaLabel?: string;
  label?: string;
  className?: string;
  disabled?: boolean;
  size?: 'small' | 'medium';
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  href?: string;
  variant?: 'contained' | 'outlined' | 'text';
  edges?: 'rounded' | 'square';
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  form?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  onTouchEnd?: (event: TouchEvent<HTMLButtonElement>) => void;
};

export type LabelProps = {
  label?: ButtonProps['label'];
  icon?: ButtonProps['icon'];
  iconPosition?: ButtonProps['iconPosition'];
};

export type IconProps = {
  icon?: LabelProps['icon'];
};

export type $ContainerProps = {
  $disabled: ButtonProps['disabled'];
  $size: ButtonProps['size'];
  $variant: ButtonProps['variant'];
  $edges: ButtonProps['edges'];
};
