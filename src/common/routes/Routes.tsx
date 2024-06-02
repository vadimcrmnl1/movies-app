import {createHashRouter} from "react-router-dom";
import {App} from "../../app/App";
import {MovieContainer, MoviesContainer, RatedMovies} from "../../features/movies/MoviesContainer";
import {ErrorPage} from "../components/ErrorPage/ErrorPage";

export const PATH = {
    app: '/',
    movies: '/movies',
    ratedMovies: '/rated_movies',
    movie: '/movie/:movie_id'

}

const router = createHashRouter([
    {
        path: PATH.app,
        element: <App />,
        errorElement: <ErrorPage/>,
        children: [
            {path: PATH.ratedMovies, element: <RatedMovies/>},
            {path: PATH.movies, element: <MoviesContainer/>},
            {path: PATH.movie, element: <MovieContainer />}
        ],
    }
])

export default router