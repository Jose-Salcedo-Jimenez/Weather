import { climateManager } from "@/util/climateManager"
import Image from "next/image"

export const IconsForecast = ({ cloud_cover }) => {
    let url = climateManager(cloud_cover)
    return (
        < Image
            src={url}
            width={60}
            height={60}
            alt="Website Forecast"
            className="m-[0.7rem_0rem_0.7rem_0rem] w-auto h-auto"
        />
    )
}