import "./App.css";
import Navbar from "./views/Navbar";
import Homeview from "./views/Homeview";
import Tasklist from "./views/Tasklist";

import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <div className="cont1">
        <div className="container">
          <Homeview />
        </div>
        <div className="tas1">
          <Tasklist />
        </div>
      </div>
    </div>
  );
}

export default App;
