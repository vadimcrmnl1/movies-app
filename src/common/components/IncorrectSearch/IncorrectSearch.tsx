import {FC} from 'react';
import s from './IncorrectSearch.module.css'
import st from './../../../features/movies/Movies/MoviesBar/Movie/MovieShort/MovieShort.module.css'
import incorrectLogo from './../../images/incorrect_search_logo.png'
import noRatedMoviesLogo from './../../images/no_rated_movies_logo.png'
import {TitleButtonComponent} from "../ErrorPage/ErrorPage";
type IncorrectSearchPropsType = {
    type?: 'ratedMovies'
    title: string

}
export const IncorrectSearch:  FC<IncorrectSearchPropsType> = ({type, title}) => {
    return (
        <div className={s.wrapper}>
            <div className={s.logoBlock}>
                <img src={type === 'ratedMovies' ? noRatedMoviesLogo : incorrectLogo} alt={'incorrect logo'}/>
            </div>
            {type === 'ratedMovies' ? <TitleButtonComponent title={title} buttonTitle={'Find movies'}/>
            : <div style={{color: 'black', margin: '0 auto'}} className={st.title}>
                    {title}
                </div>
            }

        </div>
    );
};

