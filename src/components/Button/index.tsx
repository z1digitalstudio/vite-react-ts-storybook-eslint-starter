import { ButtonLabel, Container, IconContainer } from './styles';
import type { ButtonProps, IconProps, LabelProps } from './types';

const Icon = ({ icon }: IconProps) =>
  icon ? <IconContainer aria-hidden="true">{icon}</IconContainer> : null;

const Label = ({ label, icon, iconPosition }: LabelProps) => (
  <>
    {iconPosition === 'left' ? <Icon icon={icon} /> : null}

    {label ? <ButtonLabel>{label}</ButtonLabel> : null}

    {iconPosition === 'right' ? <Icon icon={icon} /> : null}
  </>
);

export default function Button({
  ariaLabel,
  className,
  disabled,
  href,
  size,
  label,
  icon,
  iconPosition = 'left',
  variant,
  edges,
  type = 'button',
  form,
  onClick,
  onTouchEnd,
}: ButtonProps): JSX.Element {
  if (href) {
    return (
      <Container
        href={href}
        className={className}
        $disabled={disabled}
        tabIndex={disabled ? -1 : undefined}
        $size={size}
        $variant={variant}
        $edges={edges}
        as="a"
        aria-label={ariaLabel}
      >
        <Label label={label} icon={icon} iconPosition={iconPosition} />
      </Container>
    );
  }
  return (
    <Container
      className={className}
      disabled={disabled}
      $disabled={disabled}
      $size={size}
      $variant={variant}
      $edges={edges}
      as="button"
      onClick={onClick}
      onTouchEnd={onTouchEnd}
      aria-label={ariaLabel}
      type={type}
      form={form}
    >
      <Label label={label} icon={icon} iconPosition={iconPosition} />
    </Container>
  );
}
