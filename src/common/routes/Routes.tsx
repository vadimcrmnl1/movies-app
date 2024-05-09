import {createBrowserRouter} from "react-router-dom";
import {App} from "../../app/App";
import React from "react";
import {MovieContainer, MoviesContainer} from "../../features/movies/MoviesContainer";
import {MoviesBar} from "../../features/movies/Movies/MoviesBar/MoviesBar";
import {ErrorPage} from "../components/ErrorPage/ErrorPage";
import {Sidebar} from "../../features/movies/Movies/Sidebar/Sidebar";

export const PATH = {
    // app: '/',
    movies: 'movies',
    ratedMovies: 'rated_movies',
    movie: 'movie/:movie_id'

}

const router = createBrowserRouter([
    {

        // path: PATH.app,
        element: <App />,
        errorElement: <ErrorPage/>,
        children: [
            {
                errorElement: <ErrorPage/>,
                children: [
                    // {path: PATH.ratedMovies, element: ''},
                    {path: PATH.movies, element: <MoviesContainer/>},
                    {path: PATH.movie, element: <MovieContainer />}
                ]
            }
        ],



    }
])
export default router