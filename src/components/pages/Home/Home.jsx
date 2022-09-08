import { DeviceList, WeatherHero } from "@organisms";
import { DefaultPage } from "@templates";

export const Home = () => {
  return (
    <DefaultPage>
      <WeatherHero />
      <DeviceList />
    </DefaultPage>
  );
};
