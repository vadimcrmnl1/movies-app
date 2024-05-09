import React from 'react'
import s from './MoviesContainer.module.css'
import {Sidebar} from "./Movies/Sidebar/Sidebar";
import {MovieFull} from "./Movies/MoviesBar/Movie/MovieFull/MovieFull";
import {MoviesBar} from "./Movies/MoviesBar/MoviesBar";

export const MovieContainer = () => {
        return (
        <div className={s.wrapper}>
            <div className={s.sidebar}><Sidebar/></div>
            <div className={s.movie}><MovieFull/></div>
        </div>
    )
}
export const MoviesContainer = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.sidebar}><Sidebar/></div>
            <div className={s.movie}><MoviesBar/></div>
        </div>
    )
}