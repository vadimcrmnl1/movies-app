import React from 'react'
import s from './MoviesContainer.module.css'
import {Sidebar} from "./Sidebar/Sidebar";
import {MoviesBar} from "./MoviesBar/MoviesBar";

export const MoviesContainer = () => {

    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                <Sidebar/>
                <MoviesBar/>
            </div>

        </div>
    )
}