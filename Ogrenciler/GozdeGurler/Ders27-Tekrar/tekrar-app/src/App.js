import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      "X-RapidAPI-Key": "2ac8e75ee3msh0a94ec030caea5ep105b87jsn793274b05605",
      "X-RapidAPI-Host": "matchilling-chuck-norris-jokes-v1.p.rapidapi.com",
    },
  };
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    fetch(
      "https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setData(response);
      })
      .catch((err) => console.error(err));
  };

  console.log("***");
  //  console.log(options);
  return (
    <div className="App">
      <img
        className="App-logo"
        src="https://api.chucknorris.io/img/chucknorris_logo_coloured_small@2x.png"
      ></img>
      <p
        style={{
          marginTop: "60px",
        }}
      >
        {data.value}
      </p>

      <button
        style={{
          marginTop: "30px",
        }}
        onClick={getData}
      >
        Yenile
      </button>
    </div>
  );
}

export default App;
