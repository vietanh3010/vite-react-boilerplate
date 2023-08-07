import { memo } from "react"
import HorizontalNavigation from "./navigation/HorizontalNavigation"


const Header = (): JSX.Element => {

    return (
        <header>
            <HorizontalNavigation/>
        </header>
    )
}

export default memo(Header)