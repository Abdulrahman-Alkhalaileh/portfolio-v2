import MUIThemeProvider from "components/theme/MUIThemeProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { sections } from "configs/sectionItems";
import NavigationWrapper from "components/Navigation/NavigationWrapper";
import ReduxProvider from "components/providers/ReduxProvider";
import SyncData from "helpers/SyncData";

function App() {
  return (
    <ReduxProvider>
      <MUIThemeProvider>
        <BrowserRouter>
          <SyncData />
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
    </ReduxProvider>
  );
}

export default App;
