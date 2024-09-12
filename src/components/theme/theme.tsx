import { createTheme } from "@mui/material/styles";
import { PaletteOptions } from "@mui/material/styles";

export type ThemeType = "light" | "dark" | "red" | "olive" | "twilight";

const twilightPalette: PaletteOptions = {
  mode: "dark",
  primary: {
    main: "#e6b03c",
  },
  secondary: {
    main: "#e06d56",
  },
  background: {
    paper: "#bf4e65c8",
    default: "#bf4e64",
  },
  text: {
    primary: '#eee0a1'
  }
};

const olivePalette: PaletteOptions = {
  mode: "light",
  primary: {
    main: "#4d4e46",
  },
  secondary: {
    main: "#c2b8aa",
  },
  background: {
    paper: "#8c9f86c9",
    default: "#8c9f86",
  },
  text: {
    primary: '#23291d'
  }
};

const lightPalette: PaletteOptions = {
  mode: "light",
  primary: {
    main: "#0c5dcc",
  },
  secondary: {
    main: "#edf2ff",
  },
  background: {
    paper: "#ffffffc1",
    default: "#ffffffed",
  },
  text: {
    primary: '#072b5c'
  }
};

const darkPalette: PaletteOptions = {
  mode: "dark",
  primary: {
    main: "#0c5dcc",
  },
  secondary: {
    main: "#2e323d",
  },
  background: {
    paper: "#1c2553cf",
    default: "#1c2553e6",
  },
};

const redPalette: PaletteOptions = {
  mode: "dark",
  primary: {
    main: "#cc0c0c",
  },
  secondary: {
    main: "#3d2e2e",
  },
  background: {
    paper: "#5c1e1ed9",
    default: "#3a1313ec",
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
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: "capitalize",
            fontSize: 20,
          },
        },
      },
    },
  });
  return theme;
};

export default getTheme;
