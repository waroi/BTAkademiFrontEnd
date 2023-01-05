import Card from "./Card";
import CardHeader from "./CardHeader";
import CardText from "./CardText";
import CardBody from "./CardBody";
import CardFooter from "./CardFooter";
const Post = ({ title, text, author, date }) => {
  return (
    <Card>
      <CardHeader>{title}</CardHeader>
      <CardBody>
        <CardText>{text}</CardText>
      </CardBody>
      <CardFooter>
        <small>
          <i className="fa-solid fa-at"></i>Yazar: {author}
        </small>
        <small>
          <i className="fa-solid fa-calendar-days"></i>Tarih: {date}
        </small>
      </CardFooter>
    </Card>
  );
};

export default Post;
