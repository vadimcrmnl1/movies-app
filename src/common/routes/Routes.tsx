import {createBrowserRouter} from "react-router-dom";
import {App} from "../../app/App";
import React from "react";
import {MoviesContainer} from "../../features/movies/Movies/MoviesContainer";
import {MoviesBar} from "../../features/movies/Movies/MoviesBar/MoviesBar";
import {ErrorPage} from "../components/ErrorPage/ErrorPage";

export const PATH = {
    movies: '/',
    ratedMovies: '/rated_movies',
    movie: '/movie/:movie_id'

}

const router = createBrowserRouter([
    {
        path: PATH.movies,
        element: <App />,
        errorElement: <ErrorPage/>,
        children: [
            {
                errorElement: <ErrorPage/>,
                children: [
                    {path: PATH.ratedMovies, element: ''},
                    {path: PATH.movies, element: <MoviesBar />},
                    {path: PATH.movie, element: <MoviesContainer />}
                ]
            }
        ]


    }
])
export default router