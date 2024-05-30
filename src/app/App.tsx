import "@mantine/core/styles.css";
import {MantineProvider} from "@mantine/core";
import {theme} from "../theme.ts";
import {useSelector} from "react-redux";
import {selectIsLoading} from "./selectors.ts";
import {LoaderComponent} from "../common/components/Loader/Loader.tsx";
import s from '../app/App.module.css'
import {Navigate, Outlet} from "react-router-dom";

export const App = () => {
    const isLoading = useSelector(selectIsLoading)

    Navigate({to: '/movies'})
    return <MantineProvider theme={theme}>
        {isLoading && <LoaderComponent/>}
        <div className={s.wrapper}>
            <div className={s.container}>
                <Outlet/>
            </div>
        </div>
    </MantineProvider>;
}
