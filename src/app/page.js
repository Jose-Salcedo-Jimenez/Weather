import { Header } from "@/layout/Header";
import { MainInformation } from "@/ui/MainInformation";
import { handleWeather, urlFormat } from "@/util/fetchWeather";

export default async function Home() {

  const url = urlFormat('Cartagena')
  const data = await handleWeather(url);
  
  console.log(data)
  const {temperature, precipitation} = data.current;
  return (
    <>
      <Header />
      <main>
        <MainInformation temperature={temperature} rain={precipitation.total}/>
      </main>
    </>
  );
}
