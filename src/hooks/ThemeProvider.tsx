import React, {  useContext,  } from 'react';

import theme from '../themes/'

export const ThemeContext = React.createContext({});
export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {

    return (
        <ThemeContext.Provider value={{theme}}>
        {children}
      </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext) as IThemeProvider;