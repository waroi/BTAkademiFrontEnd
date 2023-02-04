import { ThemeProvider } from "./context/ThemeContext";
import "./App.css";
import { APIProvider } from "./context/APIContext";

import Appbar from "./components/Appbar";

import Router from "./routes/Router";

function App() {
  return (
    <ThemeProvider>
      <APIProvider>
        <Appbar />
        <Router />
      </APIProvider>
    </ThemeProvider>
  );
}

export default App;
