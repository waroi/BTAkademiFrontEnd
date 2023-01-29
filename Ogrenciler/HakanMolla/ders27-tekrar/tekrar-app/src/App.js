import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "74ce2f5724msh1e99219984ad861p14e2a5jsn85a0fac159b3",
      "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
    },
  };
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    fetch(
      "https://imdb8.p.rapidapi.com/auto-complete?q=game%20of%20thr",
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
      <div className="card" style={{width: "18rem",}}>
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
