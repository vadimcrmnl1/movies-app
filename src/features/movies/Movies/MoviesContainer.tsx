import React from 'react'
import s from './MoviesContainer.module.css'
import {Sidebar} from "./Sidebar/Sidebar";
import {MovieFull} from "./MoviesBar/Movie/MovieFull/MovieFull";

export const MoviesContainer = () => {
    const params = location.href
    console.log('useSearchParams', params)

    return (
        <div className={s.wrapper}>
            <div className={s.sidebar}><Sidebar/></div>
            <div className={s.movie}><MovieFull/></div>



        </div>
    )
}