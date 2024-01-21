
import  React, { createContext, useContext } from 'react';
import { theme } from './Theme';

const ThemeContext = createContext(theme);

type themeProps  = {
   children : React.ReactNode
}

 export const ThemeProvider = ({ children }:themeProps) => {

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};


export  const  useTheme = () => useContext(ThemeContext)




