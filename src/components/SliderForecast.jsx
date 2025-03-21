import { Inter } from "next/font/google";
import { hanldeHourlly } from "@/util/timeFormatted";
import { IconsForecast } from "@/ui/IconsForecast";

const inter = Inter({ subsets: ["latin"] })
export const SliderForecast = ({ hourly }) => {
    const { data } = hourly;
    return (
        <section className={` ${inter.className} w-3/4 h-56 shadow-[2px_2px_20px_0px_rgba(0,0,0,0.3)] rounded-xl flex flex-col justify-center mt-8 p-[0rem_0.8rem_0rem_0.8rem]`}>
            <h4 className=" text-[#373737] font-medium">Today's Forecast</h4>
            <ul className="flex overflow-hidden items-center mt-5 overflow-x-auto custom-scrollbar ">

                {
                    data.map(hour => (
                        <li key={hour.date} className="border-r-2 border-gray-500">
                            <div className="flex justify-center items-center flex-col w-28">
                                <p className="font-medium text-[#373737]">
                                    {
                                        hanldeHourlly(hour.date)
                                    }
                                </p>
                                <IconsForecast cloud_cover={hour.cloud_cover.total} />
                                <p className="font-bold text-[#373737]">{hour.temperature}°</p>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </section>
    )
}