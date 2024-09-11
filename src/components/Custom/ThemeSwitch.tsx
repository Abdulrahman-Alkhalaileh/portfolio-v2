import React from "react";
import { ThemeContext } from "../theme/MUIThemeProvider";
import { Switch } from "@mui/material";

export interface ThemeSwitchProps {}

const ThemeSwitch: React.FC<ThemeSwitchProps> = ({ ...props }) => {
  const {mode,handleThemeToggle} = React.useContext(ThemeContext)
  const [checked, setChecked] = React.useState(localStorage.getItem('theme') === 'dark'? true : false);

  const handleThemeChange = (e: any, checked: boolean) => {
    handleThemeToggle(mode)
    if (mode === "light") {
      setChecked(true);
    } else {
      setChecked(false);
    }
  };

  return (
    <>
      <Switch
        onChange={handleThemeChange}
        checked={checked}
        color="warning"
        {...props}
      />
    </>
  );
};

export default ThemeSwitch;