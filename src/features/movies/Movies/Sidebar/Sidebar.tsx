import React from 'react';
import s from './Sidebar.module.css'
import {ButtonComponent} from "../../../../common/components/Button/ButtonComponent";
import logo from './../../../../common/images/sidebar_logo.png'


export const Sidebar = () => {

    return (
        <div className={s.wrapper}>
            <div className={s.logoContainer}>
                <img src={logo} alt={'logo'}/>
                <div>ArrowFlicks</div>
            </div>
            <div className={s.buttonContainer}>
                <ButtonComponent title={'Movies'}/>
                <ButtonComponent title={'Rated movies'}/>
            </div>

        </div>
    );
};
