import "@mantine/core/styles.css";
import {MantineProvider} from "@mantine/core";
import {theme} from "../theme.ts";
import {selectNetworkError} from "./selectors.ts";
import s from '../app/App.module.css'
import {Navigate, Outlet, useLocation} from "react-router-dom";
import {useAppSelector} from "./store.ts";
import {AlertComponent} from "../common/components/Alert/AlertComponent.tsx";

export const App = () => {
    const location = useLocation()
    const networkError = useAppSelector(selectNetworkError)

    return <MantineProvider theme={theme}>
        {networkError && <AlertComponent error={networkError}/>}
        <div className={s.wrapper}>
            <Navigate to={location.pathname === '/' ? '/movies' : location.pathname} replace={true}/>
            <div className={s.container}>
                <Outlet/>
            </div>
        </div>
    </MantineProvider>;
}
