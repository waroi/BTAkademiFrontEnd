import { useNavigate } from "react-router-dom";
import Button from "./Button";
import { Card, CardFooter, CardHeader, CardTitle } from "./Card";
import { useEffect, useState } from "react";

const NewsDetails = ({ image, name, url, description, providername }) => {
  const navigate = useNavigate();
  const [news, setNews] = useState({});
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-BingApis-SDK": "true",
        "X-RapidAPI-Key": "043194262amshb122440d0a90c10p183b05jsna0a228e3be2d",
        "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
      },
    };

    fetch(
      "https://bing-news-search1.p.rapidapi.com/news?safeSearch=Off&textFormat=Raw",
      options
    )
      .then((response) => response.json())
      .then((response) => setNews(response))
      .catch((err) => console.error(err));
  }, []);
  return (
    <Card>
      <CardHeader>
        <img src={image} alt="Haber görseli" width="100px" />
        <CardTitle>{name}</CardTitle>
      </CardHeader>
      <Button href={url} target="_blank">
        Haber Linki
      </Button>
      <p>{description}</p>
      <CardFooter>
        <small>Kaynak: {providername}</small>
      </CardFooter>
    </Card>
  );
};

export default NewsDetails;
