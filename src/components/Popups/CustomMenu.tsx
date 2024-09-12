import React from "react";
import { IconButton, IconButtonProps, Menu, MenuProps } from "@mui/material";

export interface CustomMenuProps extends Partial<MenuProps> {
  icon: React.ReactNode;
  iconButtonProps?: IconButtonProps;
}

const CustomMenu: React.FC<CustomMenuProps> = ({
  children,
  icon,
  iconButtonProps,
  ...props
}) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <IconButton
        {...iconButtonProps}
        onClick={handleClick}
        sx={{ bgcolor: "secondary.main", ...iconButtonProps?.sx }}
      >
        {icon}
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
          sx: { py: 0 },
        }}
        sx={{
          "& .MuiMenu-paper": {
            background: "none",
            borderRadius: 5,
          },
          ...props.sx,
        }}
        {...props}
      >
        {children}
      </Menu>
    </>
  );
};

export default CustomMenu;
