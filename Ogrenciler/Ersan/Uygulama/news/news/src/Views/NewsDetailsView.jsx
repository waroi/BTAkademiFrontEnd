import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Card } from "../components/Card";
import { CardFooter } from "../components/Card";
import { CardHeader } from "../components/Card";
import { CardTitle } from "../components/Card";
import Button from "../components/Button";
const NewsDetailsView = () => {
  const { index } = useParams();
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
  console.log(news.value && news.value[index]);
  return (
    <div>
      <Card>
        <CardHeader>
          <img
            src={news.value && news.value[index].image?.thumbnail?.contentUrl}
            alt="Haber görseli"
            width="200px"
          />
          <CardTitle>{news.value && news.value[index].name}</CardTitle>
        </CardHeader>
        <Button href={news.value && news.value[index].url} target="_blank">
          Haber Linki
        </Button>
        <p>{news.value && news.value[index].description}</p>
        <CardFooter>
          <small>Kaynak: {news.value && news.value.providername}</small>
        </CardFooter>
      </Card>
    </div>
  );
};

export default NewsDetailsView;
