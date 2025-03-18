import Image from "next/image"
export const MainInformation = ({ temperature, rain, city }) => {
    console.log(rain)
    return (
        <div className="mr-10 ml-10">
            <div className="border border-black flex justify-center items-center flex-col"> 
                <Image
                    src={`${temperature < 30 ? '/icons/cloudy.png' : '/icons/Sun.png'}`}
                    width={170}
                    height={170}
                    alt="Website weather"
                />
                <p className="font-medium text-[#373737]">Change of rain {rain} <span>{temperature}</span></p>
            </div>
            
        </div>
    )
}