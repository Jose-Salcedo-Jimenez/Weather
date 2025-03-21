import { Header } from "@/layout/Header";
import { MainInformation } from "@/components/MainInformation";
import { handleWeather, urlFormat } from "@/util/fetchWeather";
import { SliderForecast } from "@/components/SliderForecast";

export default async function Home() {

  const url = urlFormat('Cartagena')
  const data = await handleWeather(url);
  
  console.log(data)
  const {temperature, cloud_cover, precipitation} = data.current;
  return (
    <>
      <Header />
      <main className="flex flex-col items-center">
        <MainInformation cloud_cover={cloud_cover} rain={precipitation.total} temperature={temperature}/>
        <hr className="bg-gray-400 w-40 h-1 rounded-full mt-6"/>
        <SliderForecast hourly={data.hourly}/>
      </main>
    </>
  );
}
