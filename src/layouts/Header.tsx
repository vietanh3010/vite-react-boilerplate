import { memo } from "react"
import HorizontalNavigation from "./navigation/HorizontalNavigation"


const Header = (): JSX.Element => {

    return (
        <header>
            <div className="text-primary text-xl font-bold">Talent Flow</div>
            <HorizontalNavigation/>
        </header>
    )
}

export default memo(Header)