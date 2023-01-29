import {createContext, useContext, useEffect, useState} from 'react'

const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  const value = {
    theme,
    setTheme
  }
  return(<ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>)
}



export const useTheme = () => useContext(ThemeContext);