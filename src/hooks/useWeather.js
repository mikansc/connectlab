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
    getWeatherByCityName(cityName)
      .then((data) => {
        storageService.save(query, data);
        setWeather(data);
        setStatus.success();
      })
      .catch((err) => {
        console.log(err);
        setStatus.error();
      });
  }, [cityName, setStatus]);

  useEffect(() => {
    setStatus.loading();
    const weather = retrieveWeather();
    if (!weather) {
      getWeather();
      return;
    }

    if (!hasExpired(weather.date)) {
      setWeather(weather);
      setStatus.success();
    }
  }, [getWeather, retrieveWeather, setStatus]);

  return {
    status,
    weather,
  };
};

function hasExpired(time) {
  const FIFTEEN_MINUTES = 60 * 15;
  const timeNow = parseInt(Date.now() / 1000);
  return timeNow - time > FIFTEEN_MINUTES;
}
