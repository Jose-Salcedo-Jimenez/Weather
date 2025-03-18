import Image from "next/image"
export const Logo = () => {
    return (
        
            <Image
                src="/icons/viento.png"
                width={48}
                height={48}
                alt="Wedsite logo"
                className="shadow-[0px_2px_10px_rgba(0,0,0,0.2)] p-1 rounded-lg"
            />
    )
}