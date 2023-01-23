import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Card,
  CardBody,
  CardText,
  CardTitle,
  CardImage,
  CardSmallText,
  CardFooter,
} from "../components/Card";
import blankNews from "../image/blankNews.png";
import Container from "../components/Container";

const NewsViews = () => {
  const { name } = useParams();
  const [news, setNews] = useState([]);
  const fetchNews = async () => {
    const options = {
      method: "GET",
      headers: {
        "X-BingApis-SDK": "true",
        "X-RapidAPI-Key": "9446d5843amsh9f235f789eb15edp1ed159jsnee53665116aa",
        "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
      },
    };
    const data = await fetch(
      "https://bing-news-search1.p.rapidapi.com/news/search?q=&count=100&setLang=TR&freshness=Day&textFormat=Raw&safeSearch=Off",
      options
    );
    const parsedData = await data.json();
    setNews(parsedData);
  };
  useEffect(() => {
    fetchNews();
  }, []);
  return (
    <Container>
      {news.value &&
        news.value.map((item, index) =>
          item.name === name ? (
            <Card key={index}>
              <div
                style={{
                  margin: "0 auto",
                  padding: "1rem",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <CardImage
                  src={
                    item.image?.thumbnail?.contentUrl != null
                      ? item.image?.thumbnail?.contentUrl
                      : blankNews
                  }
                />
              </div>
              <CardBody>
                <CardTitle>{item.name}</CardTitle>
                <CardText>{item.description}</CardText>
              </CardBody>
              <CardFooter>
                <CardSmallText>
                  <i className="fa-regular fa-calendar-days"></i>{" "}
                  {item.datePublished.slice(0, 10)}
                </CardSmallText>
                <CardSmallText>
                  <i className="fa-solid fa-user-pen"></i>{" "}
                  {item.provider[0].name}
                </CardSmallText>
              </CardFooter>
            </Card>
          ) : null
        )}
    </Container>
  );
};

export default NewsViews;
