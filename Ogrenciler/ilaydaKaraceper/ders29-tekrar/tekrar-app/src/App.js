import React, { useState, useEffect } from 'react';
import XCard from "./components/XCard";
import Col from "react-bootstrap/Col";



function App() {
  const [data, setData] = useState([]);


  

  
  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '10b38a2c6bmshc72ca8464766d3bp10742bjsnf64a52eef4ef',
        'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
      }
    };
    fetch('https://imdb8.p.rapidapi.com/actors/get-all-images?nconst=nm0001667', options)
    .then(response => response.json())
    .then(response => setData(response))
    .catch(err => console.error(err));
    
  }, []);

  return (
    <div>
      {data.resource?.images && data.resource?.images.map((movie, index) => (
        index < 10 && <XCard key={movie.id}>
          <h2>{movie.caption}</h2>
          <p>{movie.createdOn}</p>
          <p>{movie.relatedNames[0].name}</p>

          <img src={movie.url} alt="" 
        style={{
          borderColor: 'red',
          borderWidth: 5,
          height: 300,
          width: 300,
          justifyContent: 'center',
        }}
      />

          
        </XCard>
      ))}

    </div>
  );
}

export default App;




