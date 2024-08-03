import React from 'react';
import {StatusBar} from 'react-native';
import colors, {IColors} from './color';
// import dimension, {IDimension} from './dimension'
// import fonts, {IFonts} from './fonts';
// import shadow from './shadow'
// import spacing, {ISpacing} from './spacing'

const DefaultTheme = {
  mode: 'light',
  colors: colors.light,
  // dimension,
  // fonts,
  // shadow,
  // spacing,
};

export interface IThemes {
  mode: string;
  colors: IColors;
  // dimension: IDimension
  // fonts: IFonts;
  shadow: any;
  // spacing: ISpacing
  setThemes?: (mode: string) => void;
}

export const ThemeContext = React.createContext<IThemes>(DefaultTheme);

interface ThemeProviderProps {
  children?: React.ReactNode | undefined;
}

const ThemeProvider = ({children}: ThemeProviderProps) => {
  StatusBar.setBarStyle('light-content');

  // if (dimension.isAndroid) {
  //   StatusBar.setTranslucent(true);
  //   StatusBar.setBackgroundColor(colors.light.background);
  // }

  const [mode, setMode] = React.useState<string>('light');
  const [sColors, setColors] = React.useState<IColors>(colors.light);

  const setThemes = _mode => {
    console.log(_mode);
    setMode(_mode);
    // setColors(_mode == 'dark' ? colors.dark : colors.light);
  };

  const values = React.useMemo(() => ({...DefaultTheme, mode, colors: sColors, setThemes}), [mode, sColors]);
  return <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;

export const useTheme = () => {
  const theme = React.useContext(ThemeContext);
  return theme;
};
