import MUIThemeProvider from "components/theme/MUIThemeProvider";
import Header from "components/Navigation/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { sections } from "configs/sectionItems";
import { Box } from "@mui/material";

function App() {
  return (
    <>
      <MUIThemeProvider>
        <BrowserRouter>
          <Header />
          <Box
            px={{ xs: 1, sm: 3, md: 5, lg: 7, xl: 9 }}
            pt='120px'
            pb='16px'
            minHeight="calc(100vh - 136px)"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Box height={120} />
            <Routes>
              {sections.map((section) => (
                <Route
                  key={section.index}
                  path={section.path}
                  element={section.element}
                />
              ))}
            </Routes>
          </Box>
        </BrowserRouter>
      </MUIThemeProvider>
    </>
  );
}

export default App;
