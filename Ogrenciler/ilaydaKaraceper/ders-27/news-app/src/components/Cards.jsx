// import React from "react";
// import ReactDOM from "react-dom";
// import "../styles.css";

// function Cards({title, image, description}) {
//   return (
//     <div className="App">
//       <div className="styleImage">
//       <img style={{ width: 500 + "px", marginTop: "-8%" }} src= {image} alt="" />
//       </div>
//       <h4>{title}</h4>
//       <p className="styleDescription"> {description} </p>
//     </div>
//   );
// }
// export default Cards

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useEffect } from 'react';
import { useState } from 'react';

function Cards() {
  const [news, setNews] = useState({})
  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        'X-BingApis-SDK': 'true',
        'X-RapidAPI-Key': '74ce2f5724msh1e99219984ad861p14e2a5jsn85a0fac159b3',
        'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
      }
    };

    fetch('https://bing-news-search1.p.rapidapi.com/news?safeSearch=Off&textFormat=Raw', options)
      .then(response => response.json())
      .then(response => setNews(response))
      .catch(err => console.error(err));


  }, [])
  return (
    <>
      {
        news.value && news.value.map((item, index) => {
          return <Card key={index} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={item.image?.thumbnail?.contentUrl} />
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>
                {item.description.slice(0,20)}
              </Card.Text>
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </Card>
        })
      }
    </>
  );
}

export default Cards;
