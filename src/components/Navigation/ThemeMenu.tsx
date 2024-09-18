import React, { useContext } from "react";
import ContrastIcon from "@mui/icons-material/Contrast";
import ThemeList from "components/Lists/ThemeList";
import CustomMenu, { CustomMenuProps } from "components/Popups/CustomMenu";
import { ModalContext } from "context/ModalContext";

export interface ThemeMenuProps extends Partial<CustomMenuProps> {}

const ThemeMenu: React.FC<ThemeMenuProps> = ({ ...props }) => {
  const { openTheme, setOpenTheme } = useContext(ModalContext);

  return (
    <>
      <CustomMenu
        open={openTheme}
        onClose={() => setOpenTheme(false)}
        iconButtonProps={{ onClick: () => setOpenTheme(true) }}
        icon={
          <ContrastIcon
            sx={{
              width: { xs: 25, sm: 35 },
              height: { xs: 25, sm: 35 },
              color: "text.primary",
            }}
          />
        }
        {...props}
      >
        <ThemeList />
      </CustomMenu>
    </>
  );
};

export default ThemeMenu;
