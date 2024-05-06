import React, {FC} from 'react';
import s from './MovieShort.module.css'
import {useAppSelector} from "../../../../../../app/store";
import {selectGenres} from "../../../selectors";
import noImage from './../../../../../../common/images/no_image_logo.png'
import {ModalForm} from "../../../../../../common/components/ModalForm/ModalForm";

type MoviePropsType = {
    image: string
    title: string
    year: string
    popularity?: number
    voteCount: number
    voteAverage: number
    genre: number[]

}

export const MovieShort: FC<MoviePropsType> = ({voteAverage, genre, image, title, voteCount, year}) => {
    const formatNum = n => n >= 1000 ? `${(n / 1000).toFixed(1)}К` : `${n}`;
    const genres = useAppSelector(selectGenres)
    const fullGenres = genres.filter(i => genre.includes(i.id))
    console.log('full Genres', fullGenres)

    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                <div className={s.imageContainer}>
                    <img src={image ? `https://image.tmdb.org/t/p/w500${image}` : noImage} alt="picture"/>
                </div>
                <div className={s.movieContainer}>
                    <div className={s.titleContainer}>
                        <div className={s.titleBlock}>
                            <div className={s.title}>{title}</div>
                            <div>
                                {/*<div className="fa-solid fa-star" style={{color: '#D5D6DC', fontSize: '23px'}}></div>*/}
                                <ModalForm headerTitle={'Your rating'} title={title}/>
                            </div>
                        </div>
                        <div className={s.year}>{year.slice(0, 4)}</div>
                        <div className={s.averageContainer}>
                            <div class="fa-solid fa-star" style={{color: '#FAB005', fontSize: '23px'}}></div>
                            <div className={s.average}>{voteAverage}</div>
                            <div className={s.year}>({formatNum(voteCount)})</div>
                        </div>
                    </div>
                    <div className={s.genresContainer}>
                        <div className={s.year + ' ' + s.genre}>Genres</div>
                        {fullGenres.map((el, index) => {
                            return <div className={s.year + ' ' + s.genreTitle}
                                        key={el.id}>{el.name}</div>
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};
