import { createContext, useContext, useState, useEffect } from "react";

const APIContext = createContext();

export const APIProvider = ({ children }) => {
  const [actors, setActors] = useState([]);
  const fetchData = async () => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "043194262amshb122440d0a90c10p183b05jsna0a228e3be2d",
        "X-RapidAPI-Host": "imdb8.p.rapidapi.com",
      },
    };

    await fetch(
      "https://imdb8.p.rapidapi.com/actors/get-all-images?nconst=nm0001667",
      options
    )
      .then((response) => response.json())
      .then((response) => setActors(response))
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    fetchData();
  }, []);
  //   const actorDetail = async () => {
  //     actors.resource.images &&
  //       actors.resource.images.map((actor) => {
  //         return actor;
  //       });
  //   };
  const value = { actors, setActors };
  return <APIContext.Provider value={value}>{children}</APIContext.Provider>;
};
export const useActor = () => useContext(APIContext);
