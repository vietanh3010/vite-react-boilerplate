import { memo } from 'react'
import './app.scss'
import AppRouter from './routers/AppRouter'

//primereact theme
import "primereact/resources/themes/lara-light-blue/theme.css";
//primereact core
import "primereact/resources/primereact.min.css";
//primereact config
import PrimeReact from 'primereact/api';
//primereact icon style
import 'primeicons/primeicons.css';


//use in a component
PrimeReact.inputStyle = 'filled';
PrimeReact.ripple = true;


const App = (): JSX.Element => {

    return (
        <>
            <AppRouter/>
        </>
    )
}

export default memo(App)
