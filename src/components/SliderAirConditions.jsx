import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] })
export const SliderAirCondition = ({ temperature = 30, wind = 0, rain = 0 }) => {

    return (
        <section className={` ${inter.className} w-3/4 h-56 shadow-[2px_2px_20px_0px_rgba(0,0,0,0.3)] rounded-xl flex flex-col mt-8 p-[0rem_0.8rem_0rem_0.8rem] justify-center`}>
            <h4 className=" text-[#373737] font-medium">Air Condition</h4>

            <ul className="w-full flex flex-nowrap items-center overflow-x-auto  ">
                <li className="flex-1 h-28">
                    <div className=" w-40 relative text-center border-r-2 border-gray-500 h-full flex flex-col justify-center items-center gap-y-1 " >
                        <div className="inline-flex justify-center items-center">
                            <Image
                                src="/icons/termometro.png"
                                width={25}
                                height={20}
                                alt="Thermometer icon"
                            />
                            <p className="text-base text-[rgba(55,55,55,0.74)] font-medium">
                                Real Feel
                            </p>
                        </div>

                        <p className="text-2xl font-bold text-[rgba(55,55,55,0.74)]">{temperature}°</p>
                    </div>
                </li>
                <li className="flex-1 h-28" >
                    <div className=" w-40  text-center border-r-2 border-gray-500 h-full flex flex-col justify-center items-center gap-y-1  ">
                        <div className="flex">
                            <Image
                                src="/icons/raindrop.png"
                                width={25}
                                height={20}
                                alt="Raindrop icon"
                            />
                            <p className="text-base text-[rgba(55,55,55,0.74)] font-medium ">
                                Change of rain
                            </p>
                        </div>

                        <p className="text-2xl font-bold text-[rgba(55,55,55,0.74)]">
                            {
                                rain
                            }
                        </p>
                    </div>
                </li>
                <li className="flex-1 h-28">
                    <div className="w-40 relative text-center border-r-2 border-gray-500 h-full flex flex-col justify-center items-center gap-y-1 ">
                        <div className="inline-flex justify-center items-center">
                            <Image
                                src="/icons/Frame.png"
                                width={25}
                                height={20}
                                alt="Air Condition icon"
                            />
                            <p className="text-base text-[rgba(55,55,55,0.74)] font-medium">
                                Wind
                            </p>

                        </div>
                        <p className="text-2xl font-bold text-[rgba(55,55,55,0.74)]">  {
                            wind
                        }</p>
                    </div>

                </li>
             
            </ul>
        </section>
    )
}