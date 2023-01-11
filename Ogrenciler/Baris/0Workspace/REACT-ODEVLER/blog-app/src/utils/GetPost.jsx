import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle,
  CardText,
  CardImage,
} from "../components/Card";
import { Button } from "../components/Button";
import { useNavigate } from "react-router-dom";
const GetPost = ({ id, title, img, text, author, date }) => {
  const navigate = useNavigate();
  return (
    <Card color="secondary">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardBody>
        <CardImage src={img} style={{ borderRadius: "8px" }} />
        <CardText>{text.slice(0, 500)}...</CardText>
        <div>
          <Button onClick={() => navigate(`/post/${id}`)} color="primary">
            Göster
          </Button>
        </div>
      </CardBody>
      <CardFooter>
        <small>
          <i className="fa-thin fa-at"></i> Yazar: {author}
        </small>
        <small>
          <i className="fa-regular fa-calendar-days"></i> Yayınlanma Tarihi:{" "}
          {date}
        </small>
      </CardFooter>
    </Card>
  );
};

export default GetPost;
