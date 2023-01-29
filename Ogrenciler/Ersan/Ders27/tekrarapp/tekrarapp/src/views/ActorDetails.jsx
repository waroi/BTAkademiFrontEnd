import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/esm/Container";
import GetActorDetails from "../components/GetActorDetails";

const ActorDetails = () => {
  const { createdOn } = useParams();
  const [actor, setActor] = useState([]);
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
      .then((response) => setActor(response))
      .catch((err) => console.error(err));
  }, []);
  return (
    <Container className="mt-5 shadow-lg p-3" style={{ width: "700px" }}>
      <Carousel fade>
        {actor.resource?.images &&
          actor.resource?.images.map((item) =>
            item.createdOn === createdOn
              ? item.relatedTitles.map((data) => {
                  return (
                    <Carousel.Item>
                      <img
                        height="600px"
                        className="d-block w-100"
                        src={data.image?.url}
                        alt={data.title}
                      />
                    </Carousel.Item>
                  );
                })
              : null
          )}
      </Carousel>
      {actor.resource?.images &&
        actor.resource?.images.map((data) =>
          data.createdOn === createdOn ? (
            <GetActorDetails key={data.id} props={data} />
          ) : null
        )}
    </Container>
  );
};

export default ActorDetails;
