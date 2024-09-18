import React, { useContext } from "react";
import CustomMenu, { CustomMenuProps } from "components/Popups/CustomMenu";
import MenuIcon from "@mui/icons-material/Menu";
import SectionsList from "components/Lists/SectionsList";
import { ModalContext } from "context/ModalContext";

export interface SectionsMenuProps extends Partial<CustomMenuProps> {}

const SectionsMenu: React.FC<SectionsMenuProps> = ({ ...props }) => {
  const { openSection, setOpenSection } = useContext(ModalContext);

  return (
    <>
      <CustomMenu
        {...props}
        open={openSection}
        onClose={() => setOpenSection(false)}
        iconButtonProps={{
          onClick: () => setOpenSection(true),
          ...props.iconButtonProps,
        }}
        icon={
          <MenuIcon
            sx={{
              p: 0.5,
              width: { xs: 25, sm: 35 },
              height: { xs: 25, sm: 35 },
              color: "text.primary",
            }}
          />
        }
      >
        <SectionsList
          layoutId="menuId"
          sx={{ flexDirection: "column", textAlign: "center", borderRadius: 3 }}
        />
      </CustomMenu>
    </>
  );
};

export default SectionsMenu;
