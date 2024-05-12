import React from 'react';
import s from './Sidebar.module.css'
import logo from './../../../../common/images/sidebar_logo.png'
import {NavLink} from "react-router-dom";
import {PATH} from "../../../../common/routes/Routes";


export const Sidebar = () => {
       return (
        <div className={s.wrapper}>
            <div className={s.logoContainer}>
                <img src={logo} alt={'logo'}/>
                <div>ArrowFlicks</div>
            </div>
            <div className={s.buttonContainer}>
                <NavLink style={{height: '42px'}}
                    to={PATH.movies}
                    className={({ isActive, isPending }) =>
                        isPending ? s.linkPending : isActive ? s.linkActive : s.linkPending
                    }
                >
                    Movies
                </NavLink>
                <NavLink style={{height: '42px'}}
                    to={PATH.ratedMovies}
                    className={({ isActive, isPending }) =>
                        isPending ? s.linkPending : isActive ? s.linkActive : s.linkPending
                    }
                >
                    Rated movies
                </NavLink>
            </div>

        </div>
    );
};

