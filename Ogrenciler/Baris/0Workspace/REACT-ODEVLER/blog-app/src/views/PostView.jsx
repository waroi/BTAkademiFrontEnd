import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle,
  CardText,
  CardImage,
} from "../components/Card";
import NavLink from "../components/NavLink";
const PostView = ({ title, img, text, author, date }) => {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardBody>
          <CardImage src={img} style={{ borderRadius: "8px" }} />
          <CardText>{text.slice(0, 500)}...</CardText>
          <div>
            <NavLink color="primary">Göster</NavLink>
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
    </>
  );
};

export default PostView;
