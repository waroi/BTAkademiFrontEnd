import HomeView from "./views/HomeView";
import "./App.css";
import { TodoProvider } from "./context/TodoContext";

function App() {
  return (
    <div className="App">
      <TodoProvider>
        <HomeView />
      </TodoProvider>
    </div>
  );
}

export default App;
