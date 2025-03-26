import { Header } from "@/layout/Header";
import { MainInformation } from "@/components/MainInformation";
import { handleWeather, urlFormat } from "@/util/fetchWeather";
import { SliderForecast } from "@/components/SliderForecast";
import { SliderAirCondition } from "@/components/SliderAirConditions";

export default async function Home() {

  const url = urlFormat('Cartagena')
  const data = await handleWeather(url);
  
  const {temperature, cloud_cover, precipitation, wind} = data.current;
  return (
    <>
      <Header />
      <main className="flex flex-col items-center">
        <MainInformation cloud_cover={cloud_cover} rain={precipitation.total} temperature={temperature}/>
        <hr className="bg-gray-400 w-40 h-1 rounded-full mt-6"/>
        <SliderForecast hourly={data.hourly}/>
        <SliderAirCondition temperature={temperature} wind = {wind.speed} rain={precipitation.total}/>        
      </main>
    </>
  );
}
