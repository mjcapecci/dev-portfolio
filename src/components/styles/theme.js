// Colors
export const primary = '#ed6858';
export const primaryDark = '#003171';
export const h_primaryDark = '#001c40';
export const light = '#fcfcfa';
export const secondary = '#689775';
export const accent = '#ad8174';
export const accentDark = '#917164';
export const spaceColor = '#0f1e3b';

// Fonts
export const mainFont = 'Archivo Black';

// Breakpoints
const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '1150px',
  tabletS: '735px',
  laptop: '1360px',
  laptopL: '1450px',
  desktop: '1600px',
  desktopL: '2560px'
};

export const device = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  tabletS: `(max-width: ${size.tabletS})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopL: `(max-width: ${size.laptopL})`,
  desktop: `(max-width: ${size.desktop})`,
  desktopL: `(max-width: ${size.desktopL})`
};
