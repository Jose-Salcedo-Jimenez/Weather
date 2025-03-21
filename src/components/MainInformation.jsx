import Image from "next/image"
import { Inter } from "next/font/google"
import { climateManager } from "@/util/climateManager"

const inter = Inter({ subsets: ['latin'] })
export const MainInformation = ({ cloud_cover = 30, rain = 0, city = "Cartagena", temperature }) => {
    console.log(cloud_cover)
    return (
        <div className={`mr-10 ml-10 mt-4 ${inter.className}`}>
            <div className="flex justify-center items-center flex-col">
                <Image
                    src={climateManager(cloud_cover)}
                    width={150}
                    height={150}
                    alt="Website weather"
                />
                <div className="container tracking-wide flex flex-col w-full p-[0rem_0rem_0rem_3.2rem] ">
                    <p className="text-5xl font-semibold text-gray-700">
                        {city.length > 6 ? city.slice(0,6) + "..": city}
                    </p>
                    <div className="grid grid-cols-2 mt-2 ">
                        <div>
                            <p className="mt-2 font-medium tracking-wide text-[#373737] text-sm">Change of rain {rain}%</p>
                        </div>
                        <div className="flex w-3/5 justify-end">
                            <p className="text-4xl font-bold text-gray-700"><span>{Math.trunc(temperature)}°</span></p>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}