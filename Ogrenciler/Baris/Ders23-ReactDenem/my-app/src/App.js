import "./App.css";
import Test from './components/Test'
function App() {
  let name = "Vahit"
  return <div className="App">
    <h1>Test Uygulaması</h1>
    <Test name = {name} title={"Test Başlık"} id = {5}/>
  </div>;
}

export default App;
