import MUIThemeProvider from "components/theme/MUIThemeProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { sections } from "configs/sectionItems";
import NavigationWrapper from "components/Navigation/NavigationWrapper";

function App() {
  return (
    <>
      <MUIThemeProvider>
        <BrowserRouter>
          <NavigationWrapper>
            <Routes>
              {sections.map((section) => (
                <Route
                  key={section.index}
                  path={section.path}
                  element={section.element}
                />
              ))}
            </Routes>
          </NavigationWrapper>
        </BrowserRouter>
      </MUIThemeProvider>
    </>
  );
}

export default App;
