import React from "react";
import ContrastIcon from "@mui/icons-material/Contrast";
import ThemeList from "components/Lists/ThemeList";
import CustomMenu, { CustomMenuProps } from "components/Popups/CustomMenu";

export interface ThemeMenuProps extends Partial<CustomMenuProps> {}

const ThemeMenu: React.FC<ThemeMenuProps> = ({ ...props }) => {
  return (
    <>
      <CustomMenu
        icon={
          <ContrastIcon
            sx={{ width: { xs: 25, sm: 35 }, height: { xs: 25, sm: 35 } }}
            color="primary"
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
