import "./App.css";
import Test from "./components/Test";
import ListItem from "./components/ListItem";
function App() {
  let name = "Vahit";
  const customusation = {
    background: "red",
  };
  const students = [
    "Varol",
    "İlayda",
    "Hakan",
    "Barış",
    "Esma",
    "Ersan",
    "Serhat",
  ];
  // const data = [
  //   { id: 1, name: "Beşiktaş", color1: "Black", color2: "White", w: 300 },
  //   { id: 2, name: "Galatasaray", color1: "Red", color2: "Yellow", w: 300 },
  //   { id: 3, name: "Fenerbahçe", color1: "Blue", color2: "Yellow", w: 300 },
  // ];

  return (
    <div className="App">
      <h1 style={customusation}>Test Uygulaması</h1>
      <Test name={name} title={"Test Başlık"} id={5} />
      <ul>
        {students.map((student, index) => {
          return <ListItem key={index + 1} student={student} />;
        })}
      </ul>
    </div>
  );
}

export default App;
