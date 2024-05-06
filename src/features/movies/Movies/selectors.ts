import {AppRootStateType} from "../../../app/store";

export const selectPage = (state: AppRootStateType) => state.movies.params.page
export const selectPrimaryReleaseYear = (state: AppRootStateType) => state.movies.params.primary_release_year
export const selectSortBy = (state: AppRootStateType) => state.movies.params.sort_by
export const selectGenre = (state: AppRootStateType) => state.movies.params.with_genres
export const selectMovies = (state: AppRootStateType) => state.movies.movies
export const selectGenres = (state: AppRootStateType) => state.movies.genres
export const selectAverageGte = (state: AppRootStateType) => state.movies.params["vote_average.gte"]
export const selectAverageLte = (state: AppRootStateType) => state.movies.params["vote_average.lte"]
export const selectParams = (state: AppRootStateType) => state.movies.params