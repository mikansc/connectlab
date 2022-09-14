export const weaterAdapter = ({ data }) => {
  const { main, name, dt, weather } = data;
  const { temp, humidity, temp_max, temp_min, feels_like } = main;
  return {
    date: dt,
    weatherId: weather[0].id,
    city: name,
    temp: parseInt(temp),
    tempMin: parseInt(temp_min),
    tempMax: parseInt(temp_max),
    feelsLike: parseInt(feels_like),
    humidity,
  };
};
