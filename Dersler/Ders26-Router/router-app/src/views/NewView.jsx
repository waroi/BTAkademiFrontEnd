import React, { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";

const NewView = () => {
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-BingApis-SDK": "true",
        "X-RapidAPI-Key": "32ac2efa13mshbde23206fcb9781p18030djsnf0b103af5aad",
        "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
      },
    };
    fetch(
      "https://bing-news-search1.p.rapidapi.com/news?textFormat=Raw&safeSearch=Off",
      options
    )
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div>
      <h1>Haberler</h1>
      <Link to="economy">Ekonomi Sayfası</Link>
      <Link to="sports">Spor Sayfası</Link>
      <Outlet />
    </div>
  );
};

export default NewView;
