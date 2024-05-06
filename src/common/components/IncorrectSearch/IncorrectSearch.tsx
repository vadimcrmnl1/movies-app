import React from 'react';
import s from './IncorrectSearch.module.css'
import st from './../../../features/movies/Movies/MoviesBar/Movie/MovieShort/MovieShort.module.css'
import incorrectLogo from './../../images/incorrect_search_logo.png'
export const IncorrectSearch = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.logoBlock}>
                <img src={incorrectLogo} alt={'incorrect logo'}/>
            </div>
            <div style={{color: 'black', margin: '0 auto'}} className={st.title}>
                We don't have such movies, look for another one
            </div>
        </div>
    );
};

