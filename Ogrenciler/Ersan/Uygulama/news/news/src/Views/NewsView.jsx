import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const NewsView = () => {
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

  return <div>{console.log(news.value && news.value[index])}</div>;
};

export default NewsView;
