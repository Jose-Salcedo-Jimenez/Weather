import { Search } from "@/components/Search"
import { Logo } from "@/components/Logo"
export const Header = ()=>{
    return(
        <header className="w-screen flex justify-center gap-6 pt-10  ">
            <Logo/>
            <Search/>
        </header>
    )
}