import React, { createContext, useContext, useState } from 'react';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { darkTheme, lightTheme, GlobalStyles } from '../styles';

const ThemeContext = createContext({
  isDarkMode: true,
  toggleTheme: () => {},
});

export const ThemeProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <EmotionThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <GlobalStyles theme={isDarkMode ? darkTheme : lightTheme} />
        {children}
      </EmotionThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
