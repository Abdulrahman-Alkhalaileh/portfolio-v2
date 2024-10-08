import React from "react";
import { ThemeProvider } from "@mui/material";
import { ThemeProviderProps } from "@mui/material/styles/ThemeProvider";
import getTheme, { backgroundColors, ThemeType } from "./theme";

export interface MUIThemeProviderProps extends Partial<ThemeProviderProps> {}

export interface ThemeContextProps {
  mode: string;
  handleThemeToggle: (theme: string) => void;
  setTheme: (theme: ThemeType) => void;
}

export const ThemeContext = React.createContext<ThemeContextProps>({
  mode: localStorage.getItem("theme") || "light",
  handleThemeToggle: () => {},
  setTheme: () => {},
});

const MUIThemeProvider: React.FC<MUIThemeProviderProps> = ({
  children,
  ...props
}) => {
  const [mode, setMode] = React.useState(
    localStorage.getItem("theme") || "dark"
  );

  React.useEffect(() => {
    let body = document.querySelector("body");
    if (body) {
      if (mode === "dark"){
        body.style.setProperty('--scrollbar-thumb-color','#0146af')
        body.style.setProperty('--scrollbar-thumb-color-hovered','#013788')
        body.style.backgroundColor = backgroundColors.dark;
      }
      if (mode === "light") {
        body.style.setProperty('--scrollbar-thumb-color','#0146af')
        body.style.setProperty('--scrollbar-thumb-color-hovered','#013788')
        body.style.backgroundColor = backgroundColors.light;
      }
      if (mode === "red") {
        body.style.setProperty('--scrollbar-thumb-color','#af0101')
        body.style.setProperty('--scrollbar-thumb-color-hovered','#880101')
        body.style.backgroundColor = backgroundColors.red;
      }
      if (mode === 'olive') {
        body.style.setProperty('--scrollbar-thumb-color','#3c3d37')
        body.style.setProperty('--scrollbar-thumb-color-hovered','#2e2e2a')
        body.style.backgroundColor = backgroundColors.olive;
      }
      if (mode === 'twilight') {
        body.style.setProperty('--scrollbar-thumb-color','#bf4e64')
        body.style.setProperty('--scrollbar-thumb-color-hovered','#953c4e')
        body.style.backgroundColor = backgroundColors.twilight;
      }
    }
  }, [mode]);

  const handleThemeToggle = (mode: string) => {
    if (mode === "light") {
      localStorage.setItem("theme", "dark");
      setMode("dark");
    } else {
      localStorage.setItem("theme", "light");
      setMode("light");
    }
  };

  const setTheme = (mode: ThemeType) => {
    localStorage.setItem("theme", mode);
    setMode(mode);
  };

  return (
    <ThemeContext.Provider value={{ mode, handleThemeToggle, setTheme }}>
      <ThemeProvider theme={getTheme(mode as ThemeType)}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default MUIThemeProvider;
