import "./App.css";
import Navbar from "./components/Navbar";
import { TodoProvider } from "./context/TodoContext"; /* context'ten bütün bilgiyi almak için import ediyoruz. bunu yapmaya mecbursun. Context i tanıtmak içinn */
import Home from "./components/Home";

function App() {
  return (
    <TodoProvider>
      <div>
        <Navbar />
        <Home />
        <div className="container"></div>
      </div>
    </TodoProvider>
  );
}

export default App;
