import { useNavigate } from "react-router-dom";
import Button from "./Button";
import { Card, CardFooter, CardHeader, CardTitle } from "./Card";

const GetNews = ({ image, name, url, description, providername, index }) => {
  const navigate = useNavigate();
  return (
    <Card>
      <CardHeader>
        <img src={image} alt="Haber görseli" width="100px" />
        <CardTitle>{name}</CardTitle>
      </CardHeader>
      <Button href={url} target="_blank">
        Haber Linki
      </Button>
      <p>
        {description.slice(0, 20)}
        <Button onClick={() => navigate(`/news/${index}`)}>
          ...devamını oku
        </Button>
      </p>
      <CardFooter>
        <small>Kaynak: {providername}</small>
      </CardFooter>
    </Card>
  );
};

export default GetNews;
