import {createBrowserRouter} from "react-router-dom";
import {App} from "../../app/App";
import {MovieContainer, MoviesContainer, RatedMovies} from "../../features/movies/MoviesContainer";
import {ErrorPage} from "../components/ErrorPage/ErrorPage";

export const PATH = {
    app: '/movies-app/',
    movies: '/movies-app/movies',
    ratedMovies: '/movies-app/rated_movies',
    movie: '/movies-app/movie/:movie_id'

}

const router = createBrowserRouter([
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