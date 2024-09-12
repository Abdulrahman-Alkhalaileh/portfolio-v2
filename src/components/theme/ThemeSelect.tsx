import { Box, Button, IconButton, Menu, MenuItem, Stack, Typography } from "@mui/material";
import React from "react";
import { ThemeContext } from "./MUIThemeProvider";
import { ThemeType } from "./theme";

export interface ThemeSelectProps {}

interface ThemesType {
  name: ThemeType;
  color: string;
}

const modes: ThemesType[] = [
  { name: "light", color: "white" },
  { name: "dark", color: "black" },
  { name: "red", color: "#d90000" },
];

const ThemeSelect: React.FC<ThemeSelectProps> = ({}) => {
  const { mode, setTheme } = React.useContext(ThemeContext);

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
      <Stack alignItems="center" direction="row">
        <IconButton onClick={() => setTheme("red")}>
          <Box
            width={30}
            height={30}
            bgcolor="#d90000"
            borderRadius="50%"
          ></Box>
        </IconButton>
        <IconButton onClick={() => setTheme("dark")}>
          <Box width={30} height={30} bgcolor="black" borderRadius="50%"></Box>
        </IconButton>
        <IconButton onClick={() => setTheme("light")}>
          <Box width={30} height={30} bgcolor="white" borderRadius="50%"></Box>
        </IconButton>
        <IconButton onClick={() => setTheme("olive")}>
          <Box width={30} height={30} bgcolor="#697565" borderRadius="50%"></Box>
        </IconButton>
        <IconButton onClick={() => setTheme("twilight")}>
          <Box width={30} height={30} bgcolor="#443f6e" borderRadius="50%"></Box>
        </IconButton>
      </Stack>
      {/* <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        variant="contained"
        sx={{width:200}}
      >
        Theme
      </Button>
      <Menu id="basic-menu" anchorEl={anchorEl} open={open} onClose={handleClose}>
        {modes.map((item) => (
          <MenuItem
            key={crypto.randomUUID()}
            onClick={() => setTheme(item.name)}
            selected={mode===item.name}
            sx={{width:150,display:'flex',gap:2}}
          >
            <Box
              width={30}
              height={30}
              bgcolor={item.color}
              borderRadius="50%"
            ></Box>
            <Typography variant="h6" textTransform='capitalize'>{item.name}</Typography>
          </MenuItem>
        ))}
      </Menu> */}
    </>
  );
};

export default ThemeSelect;
