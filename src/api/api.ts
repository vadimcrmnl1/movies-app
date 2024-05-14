import axios from "axios";

const instance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    headers: {
        accept: 'application/json',
        "Content-Type": 'application/json;charset=utf-8',
        Authorization: import.meta.env.VITE_API_KEY_VALUE
    },


})

export const moviesApi = {
    getMovies(params: GetMoviesParamsType) {
        return instance.get('discover/movie', {params})
    },
    getGenres(params: { language: string }) {
        return instance.get('genre/movie/list', {params})
    },
    getMovieDetails(movie_id: number, params: MovieRequestType) {
        return instance.get(`movie/${movie_id}`, {params})
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
    rating?: number | null
}
export type RatedMoviesType = {
    id: number
    rating: number
    genre_ids: number[]
    popularity: number
    poster_path: string
    release_date: string
    title: string
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

type MovieRequestType = {
    append_to_response: string
    language: string
}
export type MovieDetailsType = {
    adult: boolean;
    backdrop_path: string;
    belongs_to_collection?: string;
    budget: number;
    genres: MovieDetailsTypeGenres[];
    homepage: string;
    id: number;
    imdb_id: string;
    origin_country?: string[];
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: MovieDetailsTypeProduction_companies[];
    production_countries: MovieDetailsTypeProduction_countries[];
    release_date: string;
    revenue: number;
    runtime: number;
    spoken_languages: MovieDetailsTypeSpoken_languages[];
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    videos: MovieDetailsVideosType;
    vote_average: number;
    vote_count: number;
}
type MovieDetailsVideosType = {
    results: MovieDetailsVideosChildrenType[]
}
export type MovieDetailsVideosChildrenType = {
    iso_639_1: string;
    iso_3166_1: string;
    name: string;
    key: string;
    site: string;
    size: number;
    type: string;
    official: boolean;
    published_at: string;
    id: string;
}
export type MovieDetailsTypeGenres = {
    id: number;
    name: string;
}
export type MovieDetailsTypeProduction_companies = {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
}
export type MovieDetailsTypeProduction_countries = {
    iso_3166_1: string;
    name: string;
}
export type MovieDetailsTypeSpoken_languages = {
    english_name: string;
    iso_639_1: string;
    name: string;
}
