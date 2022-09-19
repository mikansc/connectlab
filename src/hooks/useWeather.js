import { useEffect, useState, useCallback } from "react";

import { useAppContext } from "@contexts";
import { getWeatherByCityName, storageService } from "@services";

const query = "weather";

export const useWeather = (cityName) => {
  const { setStatus, status } = useAppContext();
  const [weather, setWeather] = useState();

  if (!cityName) throw new Error("You need to pass cityName to useWeather");

  const retrieveWeather = useCallback(() => {
    return storageService.get(query);
  }, []);

  const getWeather = useCallback(() => {
    setStatus.loading();
    getWeatherByCityName(cityName)
      .then((data) => {
        storageService.save(query, data);
        setWeather(data);
        setStatus.success();
      })
      .catch((err) => {
        console.error(err);
        setStatus.error();
      });
  }, [cityName, setStatus]);

  useEffect(() => {
    const weather = retrieveWeather();
    if (!weather || (weather && hasExpired(weather.date))) {
      getWeather();
    } else {
      setWeather(weather);
    }
  }, [getWeather, retrieveWeather, setStatus]);

  return {
    status,
    weather,
  };
};

function hasExpired(creationTimestamp) {
  const TWENTY_MINUTES = 1000 * 60 * 20;
  const timestampNow = parseInt(Date.now());
  return timestampNow - creationTimestamp * 1000 > TWENTY_MINUTES;
}
