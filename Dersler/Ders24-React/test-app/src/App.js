import "./App.css";
import Test from "./components/Test";
import { ListItem } from "./components/ListItem";

function App() {
  let name = "Hakan";
  let color = "white";
  const students = [
    "Varol",
    "Ilayda",
    "Hakan",
    "Barış",
    "Esma",
    "Ersan",
    "Serhat",
  ];
  // const data = [
  //   {
  //     id: 1,
  //     name: "Beşiktaş",
  //     color1: "Black",
  //     color2: "White",
  //     w: 300,
  //   },
  //   {
  //     id: 2,
  //     name: "Galatasaray",
  //     color1: "Red",
  //     color2: "Yellow",
  //     w: 300,
  //   },
  //   {
  //     id: 3,
  //     name: "Fenerbahçe",
  //     color1: "Blue",
  //     color2: "Yellow",
  //     w: 300,
  //   },
  // ];
  return (
    <div className="App">
      <h1 style={{ background: "red", color: color }}>Test Uygulaması</h1>
      <Test isim={name} baslik={"test başlık"} id={5} />
      <ul>
        {students.map((student, index) => (
          <ListItem key={index} student={student} />
        ))}
      </ul>
    </div>
  );
}

export default App;
