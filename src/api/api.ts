import axios, {AxiosResponse} from "axios";

const instance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    headers: {
        accept: 'application/json',
        "Content-Type": 'application/json;charset=utf-8',
        Authorization: import.meta.env.VITE_API_KEY_VALUE
    }
})

export const moviesApi = {
    getMovies(params: GetMoviesParamsType) {
        return instance.get('discover/movie', {params})
    },
    getGenres(params) {
        return instance.get('genre/movie/list', {params} )
    },
    addRating() {
        return instance.post(``)
    }
}



export type MoviesResponseType = {
    page: number
    results: MoviesResponseResultsType[]
    total_pages: number
    total_results: number
}
export type MoviesResponseResultsType = {
    adult: boolean
    backdrop_path: string
    genre_ids: number[]
    id: number
    original_language: string
    original_title: string
    overview: string
    popularity: number
    poster_path: string
    release_date: string
    title: string
    video: boolean
    vote_average: number
    vote_count: number
}
export type GetMoviesParamsType = {
    language: string
    with_genres: number | null
    primary_release_year: number | null
    ['vote_average.gte']: number | null
    ['vote_average.lte']: number | null
    sort_by: string | null
    page: number


}
export type GetGenresType = {
    genres: GetGenresChildrenType[]
}
export type GetGenresChildrenType = {
    id: number
    name: string
}

interface ImportMetaEnv {
    readonly VITE_API_BASE_URL: string;
    readonly VITE_API_KEY_VALUE: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}