import { createContext, useContext, useState, useEffect } from "react";
const ThemeContext = createContext();
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);
  const value = { theme, setTheme };
  return <ThemeContext.Provider value={value}></ThemeContext.Provider>;
};
export const useTheme = () => useContext(ThemeContext);