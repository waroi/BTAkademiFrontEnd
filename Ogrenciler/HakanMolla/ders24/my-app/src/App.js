
import './App.css';
import  Test from "./components/test"
import  {ListItem} from "./components/listItem"

function App() {
  let name="hakan"
  let id="5"
  let color="white"

  const students=[
    "Varol",
    "Ilayda",
    "Hakan",
    "Barıs",
    "Esma",
    "Ersan",
    "Serhat"]


    const data = [
      {
        id: 1,
        name: "Beşiktaş",
        color1: "Black",
        color2: "White",
        w: 300,
      },
      {
        id: 2,
        name: "Galatasaray",
        color1: "Red",
        color2: "Yellow",
        w: 300,
      },
      {
        id: 3,
        name: "Fenerbahçe",
        color1: "Blue",
        color2: "Yellow",
        w: 300,
      },
    ];
  
  return (
    <div className="App">
     <h1 style={{background:"red",color:color}}>Test Uygulaması</h1>
     <Test isim={name} id={id}/>
    <ul>
    {Object.keys(data).map((name,index)=>(
    <ListItem key={index}student={student}/>))}
    </ul>
    </div>
  );
}




export default App;
