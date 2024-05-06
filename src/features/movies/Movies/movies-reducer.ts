import {GetGenresChildrenType, GetMoviesParamsType, moviesApi, MoviesResponseResultsType} from "../../../api/api";
import {MoviesActionsType} from "./types";
import {AllReducersActionsType, AppThunk} from "../../../app/types";
import * as appActions from './../../../app/actions'
import * as moviesActions from './actions'

export const moviesInitialState = {
    movies: {
        page: 1,
        results: [] as MoviesResponseResultsType[],
        total_pages: 0,
        total_results: 0
    },
    genres: [] as GetGenresChildrenType[],
    params: {
        language: 'en-Us',
        page: 1,
        primary_release_year: null,
        sort_by: null,
        with_genres: null,
        ['vote_average.gte']: null,
        ['vote_average.lte']: null
    } as GetMoviesParamsType
}
export type MoviesInitialStateType = typeof moviesInitialState

export const moviesReducer = (state: MoviesInitialStateType = moviesInitialState, action: MoviesActionsType): MoviesInitialStateType => {
    switch (action.type) {
        case 'MOVIES/FETCH_MOVIES':
            return {...state, movies: action.payload.movies}
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
        default:
            return state
    }
}

export const fetchMovies = (): AppThunk<AllReducersActionsType> => async (dispatch, getState) => {
    dispatch(appActions.setAppIsLoadingAC(true))

    const params: GetMoviesParamsType = {...getState().movies.params}

    try {
        const res = await moviesApi.getMovies(params)
        dispatch(moviesActions.fetchMoviesAC(res.data))
    } catch (e) {
        console.error('error', e)
    } finally {
        dispatch(appActions.setAppIsLoadingAC(false))
    }
}

export const fetchGenres = (): AppThunk<AllReducersActionsType> => async (dispatch, getState) => {
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