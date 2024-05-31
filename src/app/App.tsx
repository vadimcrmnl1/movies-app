import "@mantine/core/styles.css";
import {MantineProvider} from "@mantine/core";
import {theme} from "../theme.ts";
import {useSelector} from "react-redux";
import {selectIsLoading} from "./selectors.ts";
import {LoaderComponent} from "../common/components/Loader/Loader.tsx";
import s from '../app/App.module.css'
import {Navigate, Outlet, useLocation} from "react-router-dom";

export const App = () => {
    const location = useLocation()

    const isLoading = useSelector(selectIsLoading)


    // Navigate({to: '/movies'})
    return <MantineProvider theme={theme}>
        {isLoading && <LoaderComponent/>}
        <div className={s.wrapper}>
            <Navigate to={location.pathname === '/' ? '/movies' : location.pathname} replace={true}/>
            <div className={s.container}>
                <Outlet/>
            </div>
        </div>
    </MantineProvider>;
}
