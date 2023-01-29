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
        // console.log(response);
        setData(response.d);
      })
      .catch((err) => console.error(err));
  };

  console.log("***");
  console.log(data);
  return (
    <div className="App">
      <div className="container  ">
        <div className="row align-self-start">
          {data?.map((d) => (
            <div
              className="card col-2  "
              key={d.id}
              style={{ margin: "10px", height: "40rem", width: "18rem" }}
            >
              <img
                src={d?.i?.imageUrl}
                className="card-img-top"
                alt="..."
                style={{
                  margin: "auto",
                  marginTop: "5px",
                  height: "25rem",
                  width: "16rem",
                }}
              />
              <div className="card-body">
                <h5 className="card-title">{d?.l}</h5>
                <p className="card-text">{d?.s}</p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
