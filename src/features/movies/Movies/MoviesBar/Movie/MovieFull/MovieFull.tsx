import React, {useEffect} from 'react';
import s from './MovieFull.module.css'
import st from './../MovieShort/MovieShort.module.css'
import {useAppDispatch, useAppSelector} from "../../../../../../app/store";
import {useParams} from 'react-router-dom';
import {fetchGenres, fetchMovieDetails} from "../../../movies-reducer";
import {selectGenres, selectMovie} from "../../../selectors";
import noImage from './../../../../../../common/images/no_image_logo.png'
import {ModalForm} from "../../../../../../common/components/ModalForm/ModalForm";

export const MovieFull = () => {
    const dispatch = useAppDispatch()
    const movie = useAppSelector(selectMovie)

    const formatNum = n => n >= 1000 ? `${(n / 1000).toFixed(1)}К` : `${n}`;
    const movie_id = useParams().movie_id
    const genres = useAppSelector(selectGenres)
    const fullGenres = genres && genres.length && genres.filter(i => movie.genres && movie.genres.length && movie.genres.map(el => el.id).includes(i.id))
    const duration = function (mins) {
        let hours = Math.trunc(mins/60);
        let minutes = mins % 60;
        return hours + 'h ' + minutes + 'm';
    }


    useEffect(() => {
        dispatch(fetchMovieDetails(movie_id as Number))
        dispatch(fetchGenres())

    }, [])

    return (
        <div className={s.wrapper}>

                <div className={s.linkBlock}>
                    <div className={s.movies}>Movies</div>
                    /
                    <div className={s.movies}>{` ${movie.title}`}</div>
                </div>
                <div className={s.movieContainer}>
                    <div className={s.movieBlock}>
                        <div className={s.movieCard}>
                            <div className={s.posterBlock}>
                                <img src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : noImage} alt={'poster'}/>
                            </div>
                            <div className={s.informBlock}>
                                <div className={s.titleBlock}>
                                    <div className={st.title}>{movie.title}</div>
                                    <div className={st.year}>{movie.release_date && movie.release_date.slice(0, 4)}</div>
                                    <div className={st.averageContainer}>
                                        <div className="fa-solid fa-star"
                                             style={{color: '#FAB005', fontSize: '23px'}}>{null}</div>
                                        <div className={st.average}>{movie.vote_average}</div>
                                        <div className={st.year}>({formatNum(movie.vote_count)})</div>
                                    </div>
                                </div>
                                <div className={s.detailsContainer}>
                                    <div className={s.detail}>
                                        <div>Duration</div>
                                        <span className={st.year + ' ' + st.genreTitle}>{duration(movie.runtime)}</span>
                                    </div>
                                    <div className={s.detail}>
                                        <div>Premiere</div>
                                        <span className={st.year + ' ' + st.genreTitle}>{movie.release_date}</span>
                                    </div>
                                    <div className={s.detail}>
                                        <div>Budget</div>
                                        <span className={st.year + ' ' + st.genreTitle}>${movie.budget}</span>
                                    </div>
                                    <div className={s.detail}>
                                        <div>Gross worldwide</div>
                                        <span className={st.year + ' ' + st.genreTitle}>${movie.revenue}</span>
                                    </div>
                                    <div className={s.detail}>
                                        <div>Genres</div>
                                        {fullGenres && fullGenres.length && fullGenres.map((el, index) => {
                                            return <span className={st.year + ' ' + st.genreTitle}
                                                        key={el.id}>{el.name}</span>
                                        })}
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className={s.starBlock}>
                                <ModalForm id={movie.id} headerTitle={'Your rating'} title={movie.title}/>

                        </div>
                    </div>
                </div>
                <div className={s.descContainer}></div>



        </div>
    );
};
