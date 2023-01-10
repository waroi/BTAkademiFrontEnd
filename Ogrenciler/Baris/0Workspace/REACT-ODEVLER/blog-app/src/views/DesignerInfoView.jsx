import { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  CardImage,
  CardText,
  CardTitle,
} from "../components/Card";
import Col from "../components/Col";
import avatar from "../images/avatar.png";

const DesignerInfoView = () => {
  const [getUser, setUser] = useState([]);
  const fetchUser = async () => {
    const data = await fetch("http://localhost:3000/designerInfo");
    const parsedData = await data.json();
    setUser(parsedData);
  };
  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <>
      {getUser.map((item) => {
        return (
          <Card
            key={item.id}
            style={{
              boxShadow: "0 0 12px 1px #cccc",
              borderRadius: "8px",
              background: "linear-gradient(to bottom right, #F8F9FA,#cccc)",
            }}
          >
            <CardBody>
              <Col>
                <CardImage style={{ borderRadius: "50%" }} src={avatar} />
                <CardTitle style={{ textAlign: "center" }}>
                  {item.name}
                </CardTitle>
                <CardText>
                  <i className="fa-solid fa-building"></i> {item.job}
                </CardText>
                <CardText>
                  <i className="fa-solid fa-location-dot"></i> {item.address}
                </CardText>
                <CardText>
                  <i className="fa-solid fa-envelope"></i> {item.email}
                </CardText>
                <CardText>
                  <i className="fa-solid fa-phone"></i> {item.phoneNumber}
                </CardText>
              </Col>
            </CardBody>
          </Card>
        );
      })}
    </>
  );
};

export default DesignerInfoView;
