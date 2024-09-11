import { createTheme } from "@mui/material/styles";

export const getTheme = (mode: "dark" | "light") => {
  const theme = createTheme({
    palette: {
      mode: mode,
      primary: {
        main: mode === "light" ? "#0c5dcc" : "#0c5dcc",
      },
      secondary: {
        main: mode === "light" ? "#edf2ff" : "#2e323d",
      },
      background:{
        paper: mode === "light" ? "#ffffffc1" : "#13193ad9",
        default: mode === "light" ? "#ffffffed" : "#13193aed"
      }
    },
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
        textShadow: '1px 0px 3px #fff',
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
        fontWeight:700
      },
      h5: {
        fontSize: "1.5rem",
      },
      h6: {
        fontSize: "1rem",
        fontWeight: 600,
      },
      body1:{
        fontFamily: "'SUSE', sans-serif",
      }
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: "capitalize",
            fontSize: 20
          },
        },
      },
    },
  });
  return theme;
};

export default getTheme;
