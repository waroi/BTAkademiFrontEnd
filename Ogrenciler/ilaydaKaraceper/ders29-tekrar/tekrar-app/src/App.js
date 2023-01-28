import React, { useEffect, useState } from "react"
const App = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "043194262amshb122440d0a90c10p183b05jsna0a228e3be2d",
        "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
      },
    };

    fetch(
      "https://imdb8.p.rapidapi.com/actors/get-all-images?nconst=nm0001667",
      options
    )
      .then((response) => response.json())
      .then((response) => setData(response))
      .catch((err) => console.error(err));
  }, []);

  
  return (
    <div>
     
    </div>
  );
}

export default App;

// fetch("https://rapidapi.com/apidojo/api/imdb8/")
// .then((response) => response.json())
// .then((json) => json.forEach((item) => console.log(item.email)))
// .catch((err) => console.log(err))