import styled, { css } from 'styled-components';

import { $ContainerProps } from './types';

export const IconContainer = styled.span`
  display: flex;
  align-items: center;
`;

export const ButtonLabel = styled.span``;

export const Container = styled.a<$ContainerProps>`
  display: inline-flex;
  gap: 0.75rem;
  align-items: center;
  color: white;
  font-weight: 500;
  font-size: 0.875rem;
  border: 2px solid transparent;
  border-radius: ${({ $edges }) =>
    $edges === 'square' ? '0.75rem' : '2.5rem'};
  padding-inline: 1rem;
  padding-block: 0.5rem;
  ${IconContainer} {
    > svg {
      width: 1.25rem;
      height: 1.25rem;
    }
  }
  ${({ $disabled }) =>
    $disabled &&
    css`
      pointer-events: none;
    `}
  ${({ $size }) => {
    switch ($size) {
      case 'small':
      default:
        return css`
          padding-inline: 1rem;
          padding-block: 0.5rem;
        `;
      case 'medium':
        return css`
          padding-inline: 1.25rem;
          padding-block: 0.75rem;
        `;
    }
  }}
  ${({ theme, $variant, $disabled }) => {
    switch ($variant) {
      case 'contained':
      default:
        return css`
          background-color: ${$disabled
            ? () => theme.colors.gray300
            : () => theme.colors.primary500};
          border-color: ${() => theme.colors.primary500};
          cursor: ${$disabled ? 'not-allowed' : 'default'};
          transition: all 0.2s ease-out;
          &:hover,
          &:focus-visible {
            background-color: ${$disabled
              ? () => theme.colors.gray300
              : () => theme.colors.primary900};
            border-color: ${() => theme.colors.primary900};
            cursor: ${$disabled ? 'default' : 'pointer'};
          }
          &:focus-visible {
            outline: ${$disabled ? 'transparent' : theme.colors.primary100}
              solid 0.25rem;
          }
        `;
      case 'outlined':
        return css`
          color: ${$disabled
            ? () => theme.colors.gray300
            : () => theme.colors.primary500};
          background-color: transparent;
          border-color: ${$disabled
            ? () => theme.colors.gray300
            : () => theme.colors.primary500};
          cursor: ${$disabled ? 'default' : 'pointer'};
          transition: all 0.2s ease-out;
          &:hover,
          &:focus-visible {
            color: ${$disabled
              ? () => theme.colors.gray300
              : () => theme.colors.white};
            background-color: ${$disabled
              ? 'transparent'
              : () => theme.colors.primary900};
            border-color: ${$disabled
              ? () => theme.colors.gray300
              : () => theme.colors.primary900};
          }
          &:focus-visible {
            outline: ${$disabled ? 'transparent' : theme.colors.primary100}
              solid 0.25rem;
          }
        `;
      case 'text':
        return css`
          color: ${$disabled
            ? () => theme.colors.gray300
            : () => theme.colors.primary500};
          background-color: transparent;
          cursor: ${$disabled ? 'default' : 'pointer'};
          transition: all 0.2s ease-out;
          &:hover,
          &:focus-visible {
            color: ${$disabled
              ? () => theme.colors.gray300
              : () => theme.colors.primary900};
          }
          &:focus-visible {
            outline: transparent;
          }
        `;
    }
  }}
`;
