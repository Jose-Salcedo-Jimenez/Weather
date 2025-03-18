import { Header } from "@/layout/Header";
import { MainInformation } from "@/ui/MainInformation";
import { handleWeather, urlFormat } from "@/util/fetchWeather";

export default async function Home({params}) {

  const url = urlFormat('Cartagena')
  const data = await handleWeather(url)
  const {temperature} = data.current;
  return (
    <>
      <Header />
      <main>
        <MainInformation temperature={temperature} rain={temperature}/>
      </main>
    </>
  );
}
