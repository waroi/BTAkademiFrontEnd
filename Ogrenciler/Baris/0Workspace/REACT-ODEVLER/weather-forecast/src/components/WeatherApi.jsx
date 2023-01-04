import { useEffect, useState } from "react";

const WeatherApi = () => {
  const [getLocation, setLocation] = useState([]);
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "9446d5843amsh9f235f789eb15edp1ed159jsnee53665116aa",
        "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
      },
    };

    fetch(
      `https://weatherapi-com.p.rapidapi.com/forecast.json?q=London&days=3`,
      options
    )
      .then((response) => response.json())
      .then((result) => {
        setLocation(result);
      })
      .catch((err) => console.error(err));
  }, [getLocation]);
  return <>{getLocation.location.name}</>;
};

export default WeatherApi;
