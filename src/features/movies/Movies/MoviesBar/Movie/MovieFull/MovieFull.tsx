import {useEffect} from 'react';
import YouTube from 'react-youtube';

import s from './MovieFull.module.css'
import st from './../MovieShort/MovieShort.module.css'
import {useAppDispatch, useAppSelector} from "../../../../../../app/store";
import {useParams} from 'react-router-dom';
import {fetchGenres, fetchMovieDetails} from "../../../../movies-reducer";
import {selectGenres, selectMovie} from "../../../../selectors";
import noImage from './../../../../../../common/images/no_image_logo.png'
import {ModalForm} from "../../../../../../common/components/ModalForm/ModalForm";
import dateFormat from "dateformat"

export const MovieFull = () => {
    const dispatch = useAppDispatch()
    const movie = useAppSelector(selectMovie)
    const formatNum = (n: number) => n >= 1000 ? `${(n / 1000).toFixed(1)}К` : `${n}`;
    const movie_id = useParams().movie_id
    const genres = useAppSelector(selectGenres)
    const genresMovieDetails = genres.map(el => el.id)
    const fullGenres = genres && genres.length && genres.filter(i => movie.genres && movie.genres.length && movie.genres.map(el => el.id).includes(i.id))
    const duration = function (mins: number) {
        const hours = Math.trunc(mins / 60);
        const minutes = mins % 60;
        return hours + 'h ' + minutes + 'm';
    }


    useEffect(() => {
        dispatch(fetchMovieDetails(Number(movie_id)))
        dispatch(fetchGenres())

    }, [movie_id])

    return (
        <div className={s.wrapper}>

            <div className={s.linkBlock}>
                <div className={s.movies}>Movies</div>
                <span style={{margin: '0 10px 0 10px'}}>/</span>
                <div className={s.movies}>{` ${movie.title}`}</div>
            </div>
            <div className={s.movieContainer}>
                <div className={s.movieBlock}>
                    <div className={s.movieCard}>
                        <div className={s.posterBlock}>
                            <img
                                src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : noImage}
                                alt={'poster'}/>
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
                                    <span
                                        className={st.year + ' ' + st.genreTitle}>{dateFormat(movie.release_date, 'longDate')}</span>
                                </div>
                                <div className={s.detail}>
                                    <div>Budget</div>
                                    <span
                                        className={st.year + ' ' + st.genreTitle}>${movie.budget ? movie.budget.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : '...'}</span>
                                </div>
                                <div className={s.detail}>
                                    <div>Gross worldwide</div>
                                    <span
                                        className={st.year + ' ' + st.genreTitle}>${movie.revenue ? movie.revenue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : '...'}</span>
                                </div>
                                <div className={s.detail}>
                                    <div>Genres</div>
                                    {fullGenres && fullGenres.length ? <span
                                            className={st.year + ' ' + st.genreTitle}> {fullGenres.map(el => el.name).join(', ')}</span>
                                        : <span>...</span>}

                                </div>

                            </div>
                        </div>
                    </div>
                    <div className={s.starBlock}>
                        <ModalForm genre={genresMovieDetails} image={movie.poster_path} year={movie.release_date} popularity={movie.popularity} voteCount={movie.vote_count} voteAverage={movie.vote_average} id={movie.id} headerTitle={'Your rating'} title={movie.title}/>

                    </div>
                </div>
            </div>
            <div style={{marginBottom: '100px'}} className={s.movieContainer}>
                <div className={s.container}>
                    {movie.videos && movie.videos.results.length !== 0 && <div className={s.trailerContainer}>
                        <p>Trailer</p>
                        <div className={s.youtubeBlock}>
                            {<YouTube style={{borderRadius: '9px'}} className={s.movie}
                                      // opts={s.movie}
                                      videoId={movie.videos.results[0].key.toString()}/>}
                        </div>
                    </div>}
                    {movie.overview && <div className={s.trailerContainer}>
                        <p>Description</p>
                        <div>
                            {movie.overview}
                        </div>
                    </div>}
                    {movie.production_companies && movie.production_companies.length !== 0 &&
                    <div className={s.trailerContainer}>
                        <p>Production</p>
                        {movie.production_companies.map(el => {
                            return <div key={el.id} className={s.prodBlock}>
                                <img src={el.logo_path ? `https://image.tmdb.org/t/p/w500${el.logo_path}` : noImage}
                                     alt={el.name}/>
                                <span className={s.prodTitle}>{el.name}</span>
                            </div>
                        })}
                    </div>}
                </div>

            </div>


        </div>
    );
};
