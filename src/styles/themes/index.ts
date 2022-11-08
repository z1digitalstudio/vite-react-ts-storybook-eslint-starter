import base from './base';

const untypedThemes = {
  base,
};

export type Theme = typeof base;
export type ThemeKey = keyof typeof untypedThemes;
export type Color = keyof Theme['colors'];

const themes: { [k in ThemeKey]: Theme } = untypedThemes;

export default themes;

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  // noinspection JSUnusedGlobalSymbols
  export interface DefaultTheme extends Theme {}
  /* eslint-enable @typescript-eslint/no-empty-interface */
}
