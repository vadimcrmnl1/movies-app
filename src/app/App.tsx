import "@mantine/core/styles.css";
import {MantineProvider} from "@mantine/core";
import {theme} from "../theme";
import {useSelector} from "react-redux";
import {selectIsLoading} from "./selectors";
import {LoaderComponent} from "../common/components/Loader/Loader";
import React, {useEffect} from "react";
import {createGuestSession} from "../features/auth/auth-reducer";
import {useAppDispatch, useAppSelector} from "./store";
import {selectRequestToken} from "../features/auth/selectors";
import s from "./App.module.css";
import {Outlet} from "react-router-dom";
import {
    selectAverageGte,
    selectAverageLte,
    selectGenre,
    selectPage,
    selectPrimaryReleaseYear,
    selectSortBy
} from "../features/movies/selectors";
import {fetchGenres, fetchMovies} from "../features/movies/movies-reducer";

export const App = () => {
    const dispatch = useAppDispatch()
    const isLoading = useSelector(selectIsLoading)
    const requestToken = useAppSelector(selectRequestToken)
    const page = useAppSelector(selectPage)
    const genre = useAppSelector(selectGenre)
    const year = useAppSelector(selectPrimaryReleaseYear)
    const averageGte = useAppSelector(selectAverageGte)
    const averageLte = useAppSelector(selectAverageLte)
    const sortBy = useAppSelector(selectSortBy)


    useEffect(() => {
        dispatch(createGuestSession())
        dispatch(fetchMovies())
        dispatch(fetchGenres())
    }, [page, genre, year, averageGte, averageLte, sortBy])

    if (requestToken !== '') {
        location.href = `https://www.themoviedb.org/authenticate/${requestToken}?redirect_to=http://localhost:5173/`
    }

    return <MantineProvider theme={theme}>
        {isLoading && <LoaderComponent/>}
        <div className={s.wrapper}>
            <div className={s.container}>
                <Outlet/>
            </div>

        </div>
    </MantineProvider>;
}
