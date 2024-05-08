import "@mantine/core/styles.css";
import {MantineProvider} from "@mantine/core";
import {theme} from "../theme";
import {useSelector} from "react-redux";
import {selectIsFirstEnter, selectIsLoading} from "./selectors";
import {LoaderComponent} from "../common/components/Loader/Loader";
import React, {useEffect} from "react";
import {createGuestSession} from "../features/auth/auth-reducer";
import {useAppDispatch, useAppSelector} from "./store";
import {selectRequestToken, selectSessionId} from "../features/auth/selectors";
import s from "./App.module.css";
import {Outlet} from "react-router-dom";

export const App = () => {
    const dispatch = useAppDispatch()
    const isLoading = useSelector(selectIsLoading)
    const requestToken = useAppSelector(selectRequestToken)

    useEffect(() => {
        dispatch(createGuestSession())
    }, [])
    if (requestToken !== '') {
        location.href = `https://www.themoviedb.org/authenticate/${requestToken}?redirect_to=http://localhost:5173/`
    }
    return <MantineProvider theme={theme}>
        {isLoading && <LoaderComponent/>}
        {/*<MoviesContainer/>*/}
        <div className={s.wrapper}>
            <div className={s.container}>
                {/*<Sidebar/>*/}
                <Outlet/>

                {/*<MoviesBar/>*/}
            </div>

        </div>
    </MantineProvider>;
}
