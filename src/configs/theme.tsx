import { createTheme } from "@mui/material/styles";

export const getTheme = (mode: "dark" | "light") => {
  const theme = createTheme({
    palette: {
      mode: mode,
      primary: {
        main: mode === "light" ? "#0052cc" : "#032d88",
      },
      secondary: {
        main: mode === "light" ? "#edf2ff" : "#2e323d",
      },
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
        textShadow: '1px 1px 10px #fff',
        fontWeight: 600,
        fontFamily: "'Caveat', cursive",
      },
      h2: {
        // 32px
        fontSize: "3rem",
        fontWeight: 700,
        fontFamily: '"Pragati Narrow", sans-serif',
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
          },
        },
      },
    },
  });
  return theme;
};

export default getTheme;
