import {FC} from 'react';
import s from './MovieShort.module.css'
import {useAppSelector} from "../../../../../../app/store";
import {selectGenres} from "../../../../selectors";
import noImage from './../../../../../../common/images/no_image_logo.png'
import {ModalForm} from "../../../../../../common/components/ModalForm/ModalForm";
import {NavLink} from "react-router-dom";

type MoviePropsType = {
    image: string
    title: string
    year: string
    popularity: number
    voteCount: number
    voteAverage: number
    genre: number[]
    id: number
}

export const MovieShort: FC<MoviePropsType> = ({popularity,id, voteAverage, genre, image, title, voteCount, year}) => {
    const formatNum = (n: number) => n >= 1000 ? `${(n / 1000).toFixed(1)}К` : `${n}`;
    const genres = useAppSelector(selectGenres)
    const fullGenres = genres && genres.length && genres.filter(i => genre && genre.length && genre.includes(i.id))
    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                <div className={s.imageContainer}>
                    <img src={image ? `https://image.tmdb.org/t/p/w500${image}` : noImage} alt="picture"/>
                </div>
                <div className={s.movieContainer}>
                    <div className={s.titleContainer}>
                        <div className={s.titleBlock}>
                            <div className={s.title}>
                                <NavLink to={`/movie/${id}`} className={s.title}>
                                    {title}
                                </NavLink>
                            </div>
                            <div>
                                <ModalForm id={id} headerTitle={'Your rating'} title={title} image={image} year={year} popularity={popularity} genre={genre} voteAverage={voteAverage} voteCount={voteCount}/>
                            </div>
                        </div>
                        <div className={s.year}>{year && year.slice(0, 4)}</div>
                        <div className={s.averageContainer}>
                            <div className="fa-solid fa-star" style={{color: '#FAB005', fontSize: '23px'}}>{null}</div>
                            <div className={s.average}>{voteAverage}</div>
                            <div className={s.year}>({formatNum(voteCount)})</div>
                        </div>
                    </div>
                    <div className={s.genresContainer}>
                        <div className={s.year + ' ' + s.genre}>Genres</div>
                        {fullGenres && fullGenres.length
                            ? <div
                                className={s.year + ' ' + s.genreTitle}>{fullGenres.length > 4 ? fullGenres.map(el => el.name).slice(0, 5).join(', ') : fullGenres.map(el => el.name).join(', ')}</div>
                            : <div className={s.year + ' ' + s.genreTitle}>...</div>}
                    </div>
                </div>
            </div>
        </div>
    );
};
