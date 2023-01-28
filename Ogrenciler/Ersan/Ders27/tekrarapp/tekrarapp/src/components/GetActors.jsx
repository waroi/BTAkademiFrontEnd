import React from "react";
import Col from "react-bootstrap/Col";
import { useState, useEffect } from "react";
import BEImage from "./BEImage";
import BEText from "./BEText";
import BECard from "./BECard";

const GetActors = () => {
  const [actors, setActors] = useState([]);
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
      .then((response) => setActors(response))
      .catch((err) => console.error(err));
  }, []);
  return (
    <>
      {actors.resource?.images &&
        actors.resource?.images.map((actor) => {
          return (
            <Col sm={2} key={actor.id}>
              <BECard className="h-100 bg-dark text-white">
                <BEImage url={actor.url} />
                <BEText
                  name={actor.relatedNames[0].name}
                  caption={actor.caption}
                />
              </BECard>
            </Col>
          );
        })}
    </>
  );
};

export default GetActors;
