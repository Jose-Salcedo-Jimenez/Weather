"use client"
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
export const Search = () => {
    const route = useRouter();
    const [city, setCity] = useState('')

    const handleChange = () => {
        !city.trim() ? console.error("Parameter invalide") : route.push(`city/${city.trim()}`)
    }
    return (
        <form onSubmit={handleChange}>

            <label className="relative inline-flex items-center">
                <input onChange={(e)=>setCity(e.target.value)} placeholder="Search cities" className="p-3 rounded-2xl shadow-[0px_2px_10px_rgba(0,0,0,0.2)] outline-none font-medium" />
                <button type="submit">
                    <Image
                        src="/arrow-right.svg"
                        width={26}
                        height={26}
                        alt="Send arrow"
                        className="absolute right-3 bottom-2"
                    />
                </button>
            </label>

        </form>
    )
}
