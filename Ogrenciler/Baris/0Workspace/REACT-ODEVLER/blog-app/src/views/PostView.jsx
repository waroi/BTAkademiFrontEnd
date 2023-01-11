import { useParams } from "react-router-dom";
import Container from "../components/Container";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle,
  CardText,
  CardImage,
} from "../components/Card";
import { useEffect, useState } from "react";
const PostView = () => {
  const { id } = useParams();
  const [getPost, setPost] = useState([]);
  const fetchPost = async () => {
    const data = await fetch("http://localhost:3000/posts/" + id);
    const parsedData = await data.json();
    setPost(parsedData);
  };
  useEffect(() => {
    fetchPost();
  }, []);
  return (
    <Container>
      <Card>
        <CardHeader>
          <CardTitle>{getPost.title}</CardTitle>
        </CardHeader>
        <CardBody>
          <CardImage src={getPost.img} style={{ borderRadius: "8px" }} />
          <CardText>{getPost.text}</CardText>
        </CardBody>
        <CardFooter>
          <small>
            <i className="fa-thin fa-at"></i> Yazar: {getPost.author}
          </small>
          <small>
            <i className="fa-regular fa-calendar-days"></i> Yayınlanma Tarihi:{" "}
            {getPost.date}
          </small>
        </CardFooter>
      </Card>
    </Container>
  );
};

export default PostView;
