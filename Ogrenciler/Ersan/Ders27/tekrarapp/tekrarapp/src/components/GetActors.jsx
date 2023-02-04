import React from "react";
import Col from "react-bootstrap/Col";
import BEImage from "./BEImage";
import BEText from "./BEText";
import BECard from "./BECard";
import { useNavigate } from "react-router-dom";
import { useActor } from "../context/APIContext";

const GetActors = () => {
  const navigate = useNavigate();
  const { actors } = useActor();
  return (
    <>
      {actors.resource?.images &&
        actors.resource?.images.map((actor) => {
          return (
            <Col
              sm={2}
              key={actor.id}
              onClick={() => navigate(`actor/${actor.createdOn}`)}
            >
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
