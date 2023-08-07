import { Button } from "primereact/button"
import { memo } from "react"


const Home = (): JSX.Element => {

    return (
        <div>
            <Button>hello home</Button>
        </div>
    )
}

export default memo(Home)