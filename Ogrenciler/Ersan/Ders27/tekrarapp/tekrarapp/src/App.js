import { ThemeProvider } from "styled-components";
import "./App.css";

import Appbar from "./components/Appbar";

import Router from "./routes/Router";

function App() {
  return (
    <ThemeProvider>
      <Appbar />
      <Router />
    </ThemeProvider>
  );
}

export default App;
