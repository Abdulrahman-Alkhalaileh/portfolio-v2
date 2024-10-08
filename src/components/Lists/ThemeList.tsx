import React, { useContext, useEffect, useState } from "react";
import AnimatedTabs from "components/Animations/AnimatedTabs";
import { ThemeContext } from "components/theme/MUIThemeProvider";
import { ThemeType } from "components/theme/theme";
import { themesList } from "configs/themeItems";
import { ModalContext } from "context/ModalContext";

export interface ThemeListProps {}

const ThemeList: React.FC<ThemeListProps> = () => {
  const { setOpenTheme } = useContext(ModalContext)
  const { setTheme } = useContext(ThemeContext);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    const selectedTheme = themesList.find(
      (theme) => theme.name === localStorage.getItem("theme")
    );
    if (selectedTheme) {
      setSelected(selectedTheme.index);
      setTheme(selectedTheme.name as ThemeType);
    } else setSelected(0);
  }, [setTheme]);

  const handleChangeSection = (index: number, name: string) => {
    setSelected(index);
    setTheme(name as ThemeType);
    setTimeout(() => {
      setOpenTheme(false)
    }, 300);
  };

  return (
    <>
      <AnimatedTabs
        selected={selected}
        handleChange={handleChangeSection}
        items={themesList}
        layoutId="themeLayout"
        sx={{
          p: 1,
          bgcolor: "background.default",
          flexWrap: "wrap",
          width: {xs:210,md:235},
          borderRadius: 3,
        }}
      />
    </>
  );
};

export default ThemeList;
