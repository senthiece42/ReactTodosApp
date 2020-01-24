import React, {createContext} from 'react';

export const themes = { 
    light: {
      foreground: '#000000',
      background: '#eeeeee'
    },
    dark: {
      foreground: '#fff',
      background: '#222'
    }
 };

 export const ThemeContext = createContext(
     themes.dark
 );
 