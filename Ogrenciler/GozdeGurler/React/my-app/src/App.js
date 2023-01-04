import React, { useState, useEffect } from "react";
// import "./App.css";
import axios from "axios";
import styled from "styled-components";

const AppDiv = styled.div`
  text-align: center;
`;

const AppHeader = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const AppLogo = styled.img`
  height: 20vmin;
  pointer-events: none;

  @media (prefers-reduced-motion: no-preference) {
    animation: App-logo-spin infinite 20s linear;
  }

  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const AppPhoto = styled.img`
  max-width: 60vh;
`;

const AppInfo = styled.div`
  font-size: 18px;
  display: block;
  justify-content: center;
  font-style: italic;
  max-width: 800px;
`;

const AppInfoButton = styled.button`
  padding: 10px 2px;
  border: 2px solid rgb(105, 103, 103);
  border-radius: 20px;
  cursor: pointer;
  font-size: 16px;
  background-color: #02050b;
  color: white;
`;

function App() {
  const [picture, setPicture] = useState(null);
  const [day, setDay] = useState(1);

  const url = `https://api.nasa.gov/planetary/apod?api_key=Zm6FlM2qHrhm4NLaAUQCOch84xk3BM35yqamTlWm`;

  const urlDifference = [
    "&date=2023-01-02",
    "&date=2023-01-01",
    "&date=2022-12-31",
    "&date=2022-11-25",
    "&&date=2022-12-01",
    "&date=2022-11-28",
    "&date=2022-11-10",
    "&date=2022-12-02",
    "&date=2022-10-23",
    "&date=2022-10-22",
    "&date=2022-10-24",
  ];

  useEffect(() => {
    axios.get(url + urlDifference[day - 1]).then((response) => {
      setPicture(response.data);
    });
  }, [day]);

  return (
    <AppDiv>
      <AppHeader>
        <AppLogo
          src="https://api.nasa.gov/assets/img/favicons/favicon-192.png"
          alt="logo"
        ></AppLogo>

        {picture === null ? (
          <div>APOD is loading...</div>
        ) : (
          <div>
            <AppPhoto src={picture.url} alt={"Apod"}></AppPhoto>
            <AppInfo>
              <p>
                <strong>Title: </strong>
                {picture.title}
              </p>
              <p>
                <strong>Date: </strong>
                {picture.date}
              </p>
              <p>
                <strong>Explanation:</strong> {picture.explanation}
              </p>
              <AppInfoButton
                onClick={() => {
                  setDay(day + 1);
                }}
              >
                Click me to change the photo!
              </AppInfoButton>
            </AppInfo>
          </div>
        )}
      </AppHeader>
    </AppDiv>
  );
}

export default App;
