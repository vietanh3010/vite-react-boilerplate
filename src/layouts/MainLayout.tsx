import { memo } from "react"
import { useOutlet } from "react-router-dom";
import GradientBackground from "./GradientBackground";
import Header from "./Header";


const MainLayout = (): JSX.Element => {
    const outlet = useOutlet();

    return (
        <div>
            <Header/>
            <GradientBackground/>
            {outlet}
        </div>
    )
}

export default memo(MainLayout)