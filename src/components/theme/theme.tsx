import { createTheme } from "@mui/material/styles";
import { PaletteOptions } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface PaletteOptions {
    backgroundColor?: PaletteOptions["primary"];
  }

  interface Palette {
    backgroundColor: Palette["primary"];
  }

  interface BreakpointOverrides {
    xxl: true;
  }
}

export type ThemeType = "light" | "dark" | "red" | "olive" | "twilight";

export const backgroundColors = {
  dark: "rgba(9, 10, 33, 1)",
  light: "rgba(255, 255, 255, 1)",
  red: "rgba(37, 9, 9, 1)",
  olive: "rgba(244, 230, 209, 1)",
  twilight: "rgba(56, 52, 91, 1)",
};

const twilightPalette: PaletteOptions = {
  mode: "dark",
  backgroundColor: { main: backgroundColors.twilight },
  primary: {
    main: "#e6b03c",
    dark: "#38345b",
  },
  secondary: {
    main: "#e06d56",
  },
  background: {
    paper: "#bf4e65c8",
    default: "#bf4e65",
  },
  text: {
    primary: "#eee0a1",
  },
};

const olivePalette: PaletteOptions = {
  mode: "light",
  backgroundColor: { main: backgroundColors.olive },
  primary: {
    main: "#4d4e46",
    dark: "#42433c",
  },
  secondary: {
    main: "#c2b8aa",
  },
  background: {
    paper: "#8c9f86c9",
    default: "#8c9f86",
  },
  text: {
    primary: "#23291d",
  },
};

const lightPalette: PaletteOptions = {
  mode: "light",
  backgroundColor: { main: backgroundColors.light },
  primary: {
    main: "#2851c1",
    dark: "#304767",
  },
  secondary: {
    main: "#98a6c7",
  },
  background: {
    paper: "#bac5dabf",
    default: "#bac5da",
  },
  text: {
    primary: "#2b2d42",
  },
};

const darkPalette: PaletteOptions = {
  mode: "dark",
  backgroundColor: { main: backgroundColors.dark },
  primary: {
    main: "#0c5dcc",
    dark: "#090a21",
  },
  secondary: {
    main: "#374465",
  },
  background: {
    paper: "#1c2553cf",
    default: "#1c2553",
  },
};

const redPalette: PaletteOptions = {
  mode: "dark",
  backgroundColor: { main: backgroundColors.red },
  primary: {
    main: "#cc0c0c",
    dark: "#250909",
  },
  secondary: {
    main: "#3d2e2e",
  },
  background: {
    paper: "#5c1e1ed9",
    default: "#3a1313",
  },
};

export const getTheme = (mode: ThemeType) => {
  let palette = darkPalette;
  switch (mode) {
    case "light":
      palette = lightPalette;
      break;

    case "red":
      palette = redPalette;
      break;

    case "olive":
      palette = olivePalette;
      break;

    case "twilight":
      palette = twilightPalette;
      break;
  }
  const theme = createTheme({
    palette,
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
        xxl: 1700,
      },
    },
    typography: {
      fontFamily: "inherit",
      h1: {
        // 40px
        fontSize: "4.5rem",
        textShadow: "1px 0px 3px #fff",
        fontWeight: 600,
        // fontFamily: "'Caveat', cursive",
      },
      h2: {
        // 32px
        fontSize: "3rem",
        fontWeight: 700,
        textTransform: "capitalize",
      },
      h3: {
        // 32px
        fontSize: "2.5rem",
        fontWeight: 700,
        fontFamily: '"Pragati Narrow", sans-serif',
        textTransform: "capitalize",
      },
      h4: {
        fontSize: "2rem",
        fontWeight: 700,
      },
      h5: {
        fontSize: "1.5rem",
      },
      h6: {
        fontSize: "1rem",
        fontWeight: 600,
      },
      body1: {
        fontFamily: "'SUSE', sans-serif",
        textAlign: "justify",
      },
      body2: {
        fontFamily: "'SUSE', sans-serif",
        textAlign: "justify",
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: "capitalize",
            fontSize: 20,
            whiteSpace:'nowrap',
            borderRadius:10
          },
        },
      },
    },
  });
  return theme;
};

export default getTheme;
