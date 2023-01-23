import { useNavigate } from "react-router-dom";
import {
  Card,
  CardBody,
  CardImage,
  CardTitle,
  CardText,
  CardHeader,
  CardSmallText,
  CardLink,
} from "./Card";

const GetNews = ({ title, description, image, date, author }) => {
  const navigate = useNavigate();
  return (
    <Card style={{ maxWidth: "18rem" }}>
      <CardImage src={image} />
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardBody>
        <CardSmallText>
          <i className="fa-regular fa-calendar-days"></i> {date.slice(0, 10)}
        </CardSmallText>

        <CardSmallText>
          <i className="fa-solid fa-user-pen"></i> {author}
        </CardSmallText>
        <CardText>
          {description.slice(0, 20)}...
          <CardLink onClick={() => navigate(`/news/${title}`)}>
            Devamını Oku <i className="fa-solid fa-angles-right"></i>
          </CardLink>
        </CardText>
      </CardBody>
    </Card>
  );
};

export default GetNews;
