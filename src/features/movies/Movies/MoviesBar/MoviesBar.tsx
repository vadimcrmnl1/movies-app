import  {useEffect} from 'react';
import s from './MoviesBar.module.css'
import {useAppDispatch, useAppSelector} from "../../../../app/store";
import {fetchGenres, fetchMovies} from "../../movies-reducer";
import SelectContainer from "./SelectContainer/SelectContainer";
import {
    selectAverageGte,
    selectAverageLte,
    selectGenre,
    selectMovies,
    selectPage,
    selectPrimaryReleaseYear,
    selectSortBy
} from "../../selectors";
import {MovieShort} from "./Movie/MovieShort/MovieShort";
import {PaginationComponent} from "../../../../common/components/Pagination/PaginationComponent";
import {IncorrectSearch} from "../../../../common/components/IncorrectSearch/IncorrectSearch";
import {setNetworkError} from "../../../../app/actions.ts";

export const MoviesBar = () => {
    const dispatch = useAppDispatch()
    const movies = useAppSelector(selectMovies)
    const page = useAppSelector(selectPage)
    const genre = useAppSelector(selectGenre)
    const year = useAppSelector(selectPrimaryReleaseYear)
    const averageGte = useAppSelector(selectAverageGte)
    const averageLte = useAppSelector(selectAverageLte)
    const sortBy = useAppSelector(selectSortBy)

    useEffect(() => {
        dispatch(setNetworkError(''))
        dispatch(fetchMovies())
        dispatch(fetchGenres())

    }, [page, genre, year, averageGte, averageLte, sortBy])
    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                <p className={s.title}>Movies</p>
                <SelectContainer/>
                <div className={s.moviesContainer}>
                    {movies.results && movies.results.map((el) => {
                        return <MovieShort key={el.id} id={el.id} image={el.poster_path}
                                           title={el.title} year={el.release_date}
                                           popularity={el.popularity}
                                           voteCount={el.vote_count}
                                           voteAverage={el.vote_average}
                                           genre={el.genre_ids}/>
                    })}
                </div>
                {movies.results.length !== 0 ? <div className={s.paginationBlock}>
                        <PaginationComponent/>
                    </div>
                    : <IncorrectSearch title={' We don\'t have such movies, look for another one'}/>}
            </div>
        </div>
    );
};