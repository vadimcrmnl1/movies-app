import {useEffect, useState} from 'react';
import {useAppSelector} from "../../../app/store";
import {selectRatedMovies} from "../selectors";
import s from './../Movies/MoviesBar/MoviesBar.module.css'
import {MovieShort} from "../Movies/MoviesBar/Movie/MovieShort/MovieShort";
import {IncorrectSearch} from "../../../common/components/IncorrectSearch/IncorrectSearch";
import {Pagination} from "@mantine/core";
import {useSearchParams} from "react-router-dom";
import {RatedMoviesType} from "../../../api/api";
import {SearchInput} from "../../../common/components/SearchInput/SearchInput";

function chunk<T>(array: T[], size: number): T[][] {
    if (!array.length) {
        return [];
    }
    const head = array.slice(0, size);
    const tail = array.slice(size);
    return [head, ...chunk(tail, size)];
}

export const RatedMoviesContainer = () => {
    const ratedMovies = useAppSelector(selectRatedMovies)
    // const fullRatedMovies = movies.results.filter(i => ratedMovies.includes(i.id))
    // const data = chunk<MoviesResponseResultsType>(fullRatedMovies, 4)
    const data = chunk<RatedMoviesType>(ratedMovies, 4)

    const [searchParams, setSearchParams] = useSearchParams()
    const titleQuery = searchParams.get('title') || ''
    const [page, setPage] = useState(1)

    const items = data[page - 1] && data[page - 1].length !== 0 && data[page - 1].filter(m => m.title.toLowerCase().includes(titleQuery.toLowerCase())).map(el => {
        return <MovieShort key={el.id}
                           popularity={el.popularity}
                           image={el.poster_path}
                           title={el.title}
                           year={el.release_date}
                           voteCount={el.vote_count}
                           voteAverage={el.vote_average}
                           genre={el.genre_ids}
                           id={el.id}/>
    })
    // const findMovies = fullRatedMovies.filter(el => el.title.toLowerCase().includes(titleQuery.toLowerCase())).map(el => {
    //     return <MovieShort key={el.id}
    //                        image={el.poster_path}
    //                        title={el.title}
    //                        year={el.release_date}
    //                        voteCount={el.vote_count}
    //                        voteAverage={el.vote_average}
    //                        genre={el.genre_ids}
    //                        id={el.id}/>
    // })
    const findMovies = ratedMovies.filter(el => el.title.toLowerCase().includes(titleQuery.toLowerCase())).map(el => {
        return <MovieShort key={el.id}
                           popularity={el.popularity}
                           image={el.poster_path}
                           title={el.title}
                           year={el.release_date}
                           voteCount={el.vote_count}
                           voteAverage={el.vote_average}
                           genre={el.genre_ids}
                           id={el.id}/>
    })
    const handleSetPage = (value: number) => {
        setPage(value)
    }
    const handleSearchMovie = (title: string) => {
        setSearchParams({title: title})
    }

   useEffect(() => {
       if (data[page - 1] && data[page - 1].length == 0) {
           setPage(page - 1)
       } else {
           setPage(1)
       }


   }, [data[page - 1] && data[page - 1].length === 0])

    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                <div className={s.ratedMoviesContainer}>
                    {ratedMovies.length !== 0 && <div className={s.titlePageBlock}>
                        {<p className={s.title}>Rated movies</p>}
                        {<SearchInput eventHandle={handleSearchMovie}/>}
                    </div>}
                    <div className={s.moviesContainer}>
                        {titleQuery === '' ? ratedMovies.length !== 0 && items : findMovies}
                        {/*{items}*/}
                        {/*{ratedMovies && fullRatedMovies.map((el, index) => {*/}
                        {/*    return <MovieShort key={el.id}*/}
                        {/*                       image={el.poster_path}*/}
                        {/*                       title={el.title}*/}
                        {/*                       year={el.release_date}*/}
                        {/*                       voteCount={el.vote_count}*/}
                        {/*                       voteAverage={el.vote_average}*/}
                        {/*                       genre={el.genre_ids}*/}
                        {/*                       id={el.id}/>*/}
                        {/*})}*/}
                    </div>
                    {ratedMovies.length >= 4 && !titleQuery && <div className={s.ratedPaginationBlock}>
                        <Pagination total={data.length} color="#9854F6"
                                    value={page} onChange={(value: number) => handleSetPage(value)}
                                    withControls withEdges={false}/>
                    </div>}
                    {ratedMovies.length === 0 && <div className={s.emptyRatedMoviesBlock}>
                        <IncorrectSearch type={'ratedMovies'} title={'You haven\'t rated any films yet'}/>
                    </div>}
                </div>
            </div>

        </div>
    );
};
