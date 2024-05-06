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
                <ButtonComponent background={"#9854F6"} color={'#000000'} variant={'subtle'} title={'Movies'}/>
                <ButtonComponent background={"#9854F6"} color={'#000000'}  variant={'subtle'} title={'Rated movies'}/>
            </div>

        </div>
    );
};
