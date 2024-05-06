import {createBrowserRouter} from "react-router-dom";
import {App} from "../../app/App";
import React from "react";

const PATH = {
    movies: '/',
    ratedMovies: '/rated_movies',

}
const router = createBrowserRouter([
    {
        path: PATH.movies,
        element: <App/>,
        errorElement: '',
        children: [
            {
                errorElement: '',
                children: [
                    {path: PATH.ratedMovies, element: ''}
                ]
            }
        ]


    }
])