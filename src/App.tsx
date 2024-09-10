import Projects from "./components/Projects";
import MUIThemeProvider from "./components/Providers/MUIThemeProvider";

function App() {
  return (
    <div className="App">
      <MUIThemeProvider>
        <Projects />
      </MUIThemeProvider>
    </div>
  );
}

export default App;
