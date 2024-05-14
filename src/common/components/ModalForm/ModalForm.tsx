import {useDisclosure} from '@mantine/hooks';
import {Modal} from '@mantine/core';
import s from './ModalForm.module.css'
import st from './../../../features/movies/Movies/MoviesBar/Movie/MovieShort/MovieShort.module.css'
import {FC, useState} from "react";
import {ButtonModalSave} from "../Button/ButtonComponent";
import {Rating} from "../Rating/Rating";
import {useAppDispatch, useAppSelector} from "../../../app/store";
import {addRatingAC, removeRatingAC} from "../../../features/movies/actions";
import {selectRatedMovies} from "../../../features/movies/selectors";

type ModalFormPropsType = {

    headerTitle: string
    image: string
    title: string
    year: string
    popularity: number
    voteCount: number
    voteAverage: number
    genre: number[]
    id: number
    type?: 'full' | 'short'
}

export const ModalForm: FC<ModalFormPropsType> = ({
                                                      id,
                                                      title,
                                                      headerTitle,
                                                      genre,
                                                      image,
                                                      popularity,
                                                      voteAverage,
                                                      voteCount,
                                                      year,

                                                  }) => {
    const dispatch = useAppDispatch()
    const ratingMovies = useAppSelector(selectRatedMovies).filter(el => el.id === id)
    // const ratingMovies = useAppSelector(selectRatedMovies)
    const [opened, {open, close}] = useDisclosure(false);
    const [rating, setRating] = useState(ratingMovies.length && ratingMovies[0].rating)
    // const [rating, setRating] = useState(0)
    const handleAddRating = () => {
        const movie = {
            id: id,
            rating: rating,
            genre_ids: genre,
            popularity: popularity,
            poster_path: image,
            release_date: year,
            title: title,
            vote_average: voteAverage,
            vote_count: voteCount
        }

        dispatch(addRatingAC(movie, id, rating))
        close()
    }
    const handleRemoveRating = () => {
        dispatch(removeRatingAC(id))
        close()
    }

    return (
        <>
            <Modal radius={8} classNames={{title: s.headerTitle, close: s.closeButton}} title={headerTitle}
                   opened={opened} onClose={close} centered>
                <div className={s.wrapper}>
                    <div className={s.title}>{title}</div>
                    <Rating ratingCount={ratingMovies.length && ratingMovies[0].rating} eventHandle={setRating}/>
                    <div className={s.buttonBlock}>
                        <ButtonModalSave eventHandle={handleAddRating} type={'save'} title={'Save'}/>
                        <ButtonModalSave eventHandle={handleRemoveRating} type={'remove'} title={'Remove rating'}/>

                    </div>
                </div>

            </Modal>
            <div className={s.openButton}>
                <div className="fa-solid fa-star" style={ratingMovies.length ? {color: '#9854F6', fontSize: '23px'} : {
                    color: '#D5D6DC',
                    fontSize: '23px'
                }} onClick={open}>
                </div>
                <div
                    className={st.average}>{ratingMovies.length && ratingMovies[0].rating !== 0 ? ratingMovies[0].rating : ''}</div>
            </div>

        </>
    );
}