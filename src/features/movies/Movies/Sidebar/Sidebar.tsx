import React from 'react';
import s from './Sidebar.module.css'
import logo from './../../../../common/images/sidebar_logo.png'
import {useAppDispatch} from "../../../../app/store";
import {createSession, getRequestToken} from "../../../auth/auth-reducer";
import {NavLink} from "react-router-dom";


export const Sidebar = () => {
    const dispatch = useAppDispatch()
    const handleAcceptToken = () => {
        dispatch(getRequestToken())
    }
    const handleCreateSession = () => {
        dispatch(createSession())
    }
    return (
        <div className={s.wrapper}>
            <div className={s.logoContainer}>
                <img src={logo} alt={'logo'}/>
                <div>ArrowFlicks</div>
            </div>
            <div className={s.buttonContainer}>
                <NavLink style={{height: '42px'}}
                    to="/"
                    className={({ isActive, isPending }) =>
                        isPending ? s.linkPending : isActive ? s.linkActive : s.linkPending
                    }
                >
                    Movies
                </NavLink>
                <NavLink style={{height: '42px'}}
                    to="/rated_movies"
                    className={({ isActive, isPending }) =>
                        isPending ? s.linkPending : isActive ? s.linkActive : s.linkPending
                    }
                >
                    Rated movies
                </NavLink>
                <button onClick={handleAcceptToken}>accept token</button>
                <button onClick={handleCreateSession}>create session</button>
            </div>

        </div>
    );
};

