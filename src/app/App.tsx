import "@mantine/core/styles.css";
import {MantineProvider} from "@mantine/core";
import {theme} from "../theme";
import {useSelector} from "react-redux";
import {selectIsFirstEnter, selectIsLoading} from "./selectors";
import {LoaderComponent} from "../common/components/Loader/Loader";
import React, {useEffect} from "react";
import {createGuestSession} from "../features/auth/auth-reducer";
import {useAppDispatch, useAppSelector} from "./store";
import {selectGuestSessionId, selectRequestToken, selectSessionId} from "../features/auth/selectors";
import s from "./App.module.css";
import {Outlet, Router, Route,Navigate} from "react-router-dom";
import {Sidebar} from "../features/movies/Movies/Sidebar/Sidebar";
import {PATH} from "../common/routes/Routes";
import {MoviesBar} from "../features/movies/Movies/MoviesBar/MoviesBar";
import {MovieFull} from "../features/movies/Movies/MoviesBar/Movie/MovieFull/MovieFull";

export const App = () => {
    const dispatch = useAppDispatch()
    const isLoading = useSelector(selectIsLoading)
    const requestToken = useAppSelector(selectRequestToken)
    const isFirstStart = useAppSelector(selectIsFirstEnter)
    const guestId = useAppSelector(selectGuestSessionId)

    useEffect(() => {
        dispatch(createGuestSession())
    }, [])
    if (requestToken !== '') {
        location.href = `https://www.themoviedb.org/authenticate/${requestToken}?redirect_to=http://localhost:5173/`
    }

    return <MantineProvider theme={theme}>
        {isLoading && <LoaderComponent/>}
        <div className={s.wrapper}>
            <div className={s.container}>
                {/*<Sidebar/>*/}
                <Outlet/>
                {/*<MoviesBar/>*/}
            </div>

        </div>
    </MantineProvider>;
}
