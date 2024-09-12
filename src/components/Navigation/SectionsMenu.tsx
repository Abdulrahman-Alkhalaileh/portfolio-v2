import React from "react";
import CustomMenu, { CustomMenuProps } from "components/Popups/CustomMenu";
import MenuIcon from "@mui/icons-material/Menu";
import SectionsList from "components/Lists/SectionsList";

export interface SectionsMenuProps extends Partial<CustomMenuProps>{}

const SectionsMenu: React.FC<SectionsMenuProps> = ({...props}) => {
  return (
    <>
      <CustomMenu icon={<MenuIcon fontSize="large" color="primary" sx={{p:0.5}} />} {...props}>
        <SectionsList
          layoutId="menuId"
          sx={{ flexDirection: "column", textAlign: "center", borderRadius: 3 }}
        />
      </CustomMenu>
    </>
  );
};

export default SectionsMenu;
