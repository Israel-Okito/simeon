import { createContext } from "react";

const ThemeContext = createContext({
  darkTheme: true,
  setDarkTheme: () => null,
});

export default ThemeContext;
