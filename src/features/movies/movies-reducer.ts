import {
    GetGenresChildrenType,
    GetMoviesParamsType,
    MovieDetailsType,
    moviesApi,
    MoviesResponseResultsType,
    RatedMoviesType
} from "../../api/api";
import {MoviesActionsType} from "./types";
import {AllReducersActionsType, AppThunk} from "../../app/types";
import * as appActions from '../../app/actions'
import * as moviesActions from './actions'

const moviesInitialState = {
    movies: {
        page: 1,
        results: [] as MoviesResponseResultsType[],
        total_pages: 0,
        total_results: 0
    },
    rated_movies: [] as RatedMoviesType[],
    genres: [] as GetGenresChildrenType[],
    params: {
        language: 'en-Us',
        page: 1,
        primary_release_year: null,
        sort_by: 'popularity.desc',
        with_genres: null,
        ['vote_average.gte']: null,
        ['vote_average.lte']: null
    } as GetMoviesParamsType,
    movie: {} as MovieDetailsType
}
export type MoviesInitialStateType = typeof moviesInitialState

export const moviesReducer = (state: MoviesInitialStateType = moviesInitialState, action: MoviesActionsType): MoviesInitialStateType => {
    switch (action.type) {
        case 'MOVIES/FETCH_MOVIES':
            return {...state, movies: action.payload.movies}
        case 'MOVIES/ADD_RATING': {
            const movie = action.payload.movie
            const movieWithRating = state.rated_movies.find(el => el.id === action.payload.id)
            if (movieWithRating) {
                movieWithRating.rating = action.payload.rating
            } else {
                state.rated_movies.push(movie)
            }
            return {...state, rated_movies: [...state.rated_movies]}
        }

        case 'MOVIES/REMOVE_RATING':
            return {...state, rated_movies: [...state.rated_movies.filter(el => el.id !== action.payload.id)]}
        case 'MOVIES/FETCH_GENRES':
            return {...state, genres: action.payload.genres}
        case 'MOVIES/SET_PAGE':
            return {...state, params: {...state.params, page: action.payload.page}}
        case 'MOVIES/SET_GENRE':
            return {...state, params: {...state.params, with_genres: action.payload.genre}}
        case 'MOVIES/SET_PRIMARY_RELEASE_YEAR':
            return {...state, params: {...state.params, primary_release_year: action.payload.year}}
        case 'MOVIES/SET_VOTE_AVERAGE_GTE':
            return {...state, params: {...state.params, ['vote_average.gte']: action.payload.averageGte}}
        case 'MOVIES/SET_VOTE_AVERAGE_LTE':
            return {...state, params: {...state.params, ['vote_average.lte']: action.payload.averageLte}}
        case 'MOVIES/SET_SORT_BY':
            return {...state, params: {...state.params, sort_by: action.payload.sortBy}}
        case 'MOVIES/SET_RESET_FILTERS':
            return {...state, params: action.payload.params}
        case 'MOVIES/SET_MOVIE_DETAILS':
            return {...state, movie: action.payload.movie}
        default:
            return state
    }
}

export const fetchMovies = (): AppThunk<AllReducersActionsType> => async (dispatch, getState) => {
    dispatch(appActions.setAppIsLoadingAC(true))
    const params: GetMoviesParamsType = {...getState().movies.params}
    // @ts-ignore
    if (params["vote_average.gte"] > params["vote_average.lte"]) {
        if (params["vote_average.lte"] !== null) {
            dispatch(appActions.setError('Incorrect type'))

        }
    }
    try {
        const res = await moviesApi.getMovies(params)
        dispatch(moviesActions.fetchMoviesAC(res.data))
    } catch (e: any) {
        dispatch(appActions.setNetworkError(e.message))
        console.error('error', e)
    } finally {
        dispatch(appActions.setAppIsLoadingAC(false))
    }
}


export const fetchGenres = (): AppThunk<AllReducersActionsType> => async (dispatch) => {
    const params = {language: 'en'}
    dispatch(appActions.setAppIsLoadingAC(true))
    try {
        const res = await moviesApi.getGenres(params)
        dispatch(moviesActions.fetchGenresAC(res.data.genres))
    } catch (e) {
        console.error('error', e)
    } finally {
        dispatch(appActions.setAppIsLoadingAC(false))

    }
}

export const fetchMovieDetails = (id: number): AppThunk<AllReducersActionsType> => async (dispatch) => {
    dispatch(appActions.setAppIsLoadingAC(true))
    const params = {
        append_to_response: 'videos',
        language: 'en-Us'
    }
    try {
        const res = await moviesApi.getMovieDetails(id, params)
        dispatch(moviesActions.setMovieDetailsAC(res.data))
    } catch (e: any) {
        dispatch(appActions.setNetworkError(e.message))
        console.error(e)
    } finally {
        dispatch(appActions.setAppIsLoadingAC(false))
    }
}