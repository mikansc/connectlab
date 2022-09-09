import { DefaultPage } from "@templates";
import { DeviceModal, DeviceGrid, WeatherHero } from "@organisms";

export const Home = () => {
  return (
    <DefaultPage>
      <WeatherHero />
      <DeviceGrid />
      <DeviceModal open={false} />
    </DefaultPage>
  );
};
