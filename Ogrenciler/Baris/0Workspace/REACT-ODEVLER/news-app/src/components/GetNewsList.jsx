import GetNews from "./GetNews";
import { useEffect, useState } from "react";
import { GridColumn, GridRow } from "./Grid";
import blankNews from "../image/blankNews.png";

const GetNewsList = () => {
  const [news, setNews] = useState({});
  const fetchData = async () => {
    const options = {
      method: "GET",
      headers: {
        "X-BingApis-SDK": "true",
        "X-RapidAPI-Key": "9446d5843amsh9f235f789eb15edp1ed159jsnee53665116aa",
        "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
      },
    };
    await fetch(
      "https://bing-news-search1.p.rapidapi.com/news/search?q=&count=100&setLang=TR&freshness=Day&textFormat=Raw&safeSearch=Off",
      options
    )
      .then((response) => response.json())
      .then((data) => setNews(data));
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <h2>
        <i className="fa-solid fa-arrow-trend-up"></i> Popular News
      </h2>
      <GridRow>
        <GridColumn col="4">
          {news.value &&
            news.value.map((item, index) => {
              return (
                <GetNews
                  key={index}
                  author={item.provider[0].name}
                  image={
                    item.image?.thumbnail?.contentUrl != null
                      ? item.image?.thumbnail?.contentUrl
                      : blankNews
                  }
                  title={item.name}
                  description={item.description}
                  date={item.datePublished}
                />
              );
            })}
        </GridColumn>
      </GridRow>
    </>
  );
};
export default GetNewsList;
