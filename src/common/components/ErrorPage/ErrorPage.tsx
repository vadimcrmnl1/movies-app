import React from 'react';
import s from './ErrorPage.module.css'
import st from './../../../features/movies/Movies/Sidebar/Sidebar.module.css'
import logo from "../../images/error_page_sidebar_logo.png";
import pageNotFound from "../../images/page_not_found.png";
import {NavLink} from "react-router-dom";
import {PATH} from "../../routes/Routes";

export const ErrorPage = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.logoContainer}>
                <div className={st.logoContainer}>
                    <img src={logo} alt={'logo'}/>
                    <div>ArrowFlicks</div>
                </div>
            </div>
            <div className={s.mainContainer}>

                <div className={s.mainBlock}>

                    <div className={s.pictureBlock}>
                        <Rainbow/>
                        <img src={pageNotFound} alt="404"/>

                        <Rainbow/>
                    </div>
                    <div className={s.descBlock}>
                        <div>We can’t find the page you are looking for</div>
                        <NavLink to={PATH.movies} className={s.homeButton}>Go Home</NavLink>

                    </div>
                </div>

            </div>
        </div>
    );
};

const Rainbow = () => {
    return (
        <div className={s.picture}>
            <div style={{backgroundColor: '#ffffff', minWidth: '93px', height: '50px'}}></div>
            <div style={{backgroundColor: '#FBE54D', minWidth: '93px', height: '50px'}}></div>
            <div style={{backgroundColor: '#74FADB', minWidth: '93px', height: '50px'}}></div>
            <div style={{backgroundColor: '#68DC42', minWidth: '93px', height: '50px'}}></div>
            <div style={{backgroundColor: '#E83CF2', minWidth: '93px', height: '50px'}}></div>
            <div style={{backgroundColor: '#D52D25', minWidth: '93px', height: '50px'}}></div>
            <div style={{backgroundColor: '#0732B3', minWidth: '93px', height: '50px'}}></div>

        </div>
    )
}