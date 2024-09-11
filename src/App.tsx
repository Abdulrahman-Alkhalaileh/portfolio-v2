import MUIThemeProvider from "./components/theme/MUIThemeProvider";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      <MUIThemeProvider>
        <Home />
      </MUIThemeProvider>
    </div>
  );
}

export default App;
