import {
    GetGenresChildrenType,
    GetMoviesParamsType,
    MovieDetailsType,
    MoviesResponseType,
    RatedMoviesType
} from "../../api/api";

export const fetchMoviesAC = (movies: MoviesResponseType) => ({
    type: 'MOVIES/FETCH_MOVIES',
    payload: {movies}
} as const)
export const addRatingAC = (movie: RatedMoviesType, id: number, rating: number) => ({
    type: 'MOVIES/ADD_RATING',
    payload: {movie, id, rating}
} as const)
export const removeRatingAC = (id: number,) => ({
    type: 'MOVIES/REMOVE_RATING',
    payload: {id}

} as const)

export const fetchGenresAC = (genres: GetGenresChildrenType[]) => ({
    type: 'MOVIES/FETCH_GENRES',
    payload: {genres}
} as const)
export const setPageAC = (page: number) => ({
    type: 'MOVIES/SET_PAGE',
    payload: {page}
} as const)
export const setYearAC = (year: number) => ({
    type: 'MOVIES/SET_PRIMARY_RELEASE_YEAR',
    payload: {year}
} as const)
export const setSortByAC = (sortBy: string) => ({
    type: 'MOVIES/SET_SORT_BY',
    payload: {sortBy}
} as const)
export const setGenreAC = (genre: number) => ({
    type: 'MOVIES/SET_GENRE',
    payload: {genre}
} as const)
export const setVoteAverageGteAC = (averageGte: number | null) => ({
    type: 'MOVIES/SET_VOTE_AVERAGE_GTE',
    payload: {averageGte}
} as const)
export const setVoteAverageLteAC = (averageLte: number | null) => ({
    type: 'MOVIES/SET_VOTE_AVERAGE_LTE',
    payload: {averageLte}
} as const)
export const setResetFiltersAC = (params: GetMoviesParamsType) => ({
    type: 'MOVIES/SET_RESET_FILTERS',
    payload: {params}
} as const)
export const setMovieDetailsAC = (movie: MovieDetailsType) => ({
    type: 'MOVIES/SET_MOVIE_DETAILS',
    payload: {movie}
} as const)