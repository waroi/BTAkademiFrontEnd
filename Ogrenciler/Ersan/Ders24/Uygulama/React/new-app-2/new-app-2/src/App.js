import "./App.css";
import { ListItem } from "./components/ListItem";

function App() {
  const data = [
    {
      id: 1,
      name: "Beşiktaş",
      color1: "Black",
      color2: "White",
      w: 800,
    },
    {
      id: 2,
      name: "Galatasaray",
      color1: "Red",
      color2: "Yellow",
      w: 500,
    },
    {
      id: 3,
      name: "Fenerbahçe",
      color1: "Blue",
      color2: "Yellow",
      w: 300,
    },
    {
      id: 4,
      name: "Trabzonspor",
      color1: "Purple",
      color2: "Blue",
      w: 400,
    },
  ];

  return (
    <div className="App">
      <h1>Test Uygulaması</h1>

      <ul>
        {data.map((item, index) => {
          return (
            <ListItem
              key={index}
              name={item.name}
              color1={item.color1}
              color2={item.color2}
              width={item.w}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default App;
