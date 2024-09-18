import React, { useEffect, useRef } from "react";
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
  const iconButtonRef = useRef<HTMLButtonElement | null>(null);

  // Initially set the anchorEl to the IconButton by default
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

  useEffect(() => {
    // Set anchorEl to the IconButton element after it's rendered
    if (iconButtonRef.current) {
      setAnchorEl(iconButtonRef.current);
    }
  }, []);

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
        onClick={handleClick}
        ref={iconButtonRef}
        {...iconButtonProps}
        sx={{ bgcolor: "secondary.main", ...iconButtonProps?.sx }}
      >
        {icon}
      </IconButton>
      <Menu
        open={open}
        onClose={handleClose}
        {...props}
        MenuListProps={{
          "aria-labelledby": "basic-button",
          sx: { py: 0 },
        }}
        id="basic-menu"
        anchorEl={anchorEl}
        sx={{
          "& .MuiMenu-paper": {
            background: "none",
            borderRadius: 5,
            my:1
          },
          ...props.sx,
        }}
      >
        {children}
      </Menu>
    </>
  );
};

export default CustomMenu;
