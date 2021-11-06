type colorType = {
  background: string;
  black: string;
  blue: string;
  blueLight: string;
  blueMedium: string;
  grey: string;
  greyBold: string;
  greyLight: string;
  orange: string;
  placeholder: string;
  purpleBold: string;
  smoke: string;
  white: string;
};

type colorTheme = {
  colors: colorType;
};

const theme: colorTheme = {
  colors: {
    background: '#FFF',
    black: '#000000',
    blue: '#8EB5F0',
    blueLight: '#97DFFC',
    blueMedium: '#5456ff',
    grey: 'rgba(247,248,252,1)',
    greyBold: '#3D3D4D',
    greyLight: '#e4e4eb',
    orange: '#f9b666',
    placeholder: '#000',
    purpleBold: '#4E148C',
    smoke: '#c1cad6',
    white: '#FFFFFF',
  },
};

export type ThemeType = typeof theme;
export { theme };
export default ThemeType;
