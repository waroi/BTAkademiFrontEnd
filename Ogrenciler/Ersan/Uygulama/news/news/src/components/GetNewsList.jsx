import React, { useEffect } from "react";
import { useState } from "react";
import GetNews from "./GetNews";

const GetNewsList = () => {
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
    <div>
      {news.value &&
        news.value.map((item, index) => {
          return (
            <GetNews
              key={index}
              index={index}
              image={item.image?.thumbnail?.contentUrl}
              name={item.name}
              url={item.url}
              description={item.description}
              providername={item.provider[0].name}
            />
          );
        })}
    </div>
  );
};

export default GetNewsList;
