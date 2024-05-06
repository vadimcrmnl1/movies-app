import {useDisclosure} from '@mantine/hooks';
import {Modal} from '@mantine/core';
import s from './ModalForm.module.css'
import React, {FC} from "react";
import {ButtonComponent} from "../Button/ButtonComponent";

type ModalFormPropsType = {
    title: string
    headerTitle: string
}

export const ModalForm: FC<ModalFormPropsType> = ({title, headerTitle}) => {
    const [opened, { open, close }] = useDisclosure(false);

    return (
        <>
            <Modal radius={8} classNames={{root: s.root, title: s.headerTitle, close: s.closeButton}} title={headerTitle} opened={opened} onClose={close} centered>
                <div className={s.wrapper}>
                    <div className={s.title}>{title}</div>
                    <div className={s.ratingBlock}>
                        <div className="fa-solid fa-star" style={{color: '#D5D6DC', fontSize: '23px'}} onClick={open}></div>
                        <div className="fa-solid fa-star" style={{color: '#D5D6DC', fontSize: '23px'}} onClick={open}></div>
                        <div className="fa-solid fa-star" style={{color: '#D5D6DC', fontSize: '23px'}} onClick={open}></div>
                        <div className="fa-solid fa-star" style={{color: '#D5D6DC', fontSize: '23px'}} onClick={open}></div>
                        <div className="fa-solid fa-star" style={{color: '#D5D6DC', fontSize: '23px'}} onClick={open}></div>
                        <div className="fa-solid fa-star" style={{color: '#D5D6DC', fontSize: '23px'}} onClick={open}></div>
                        <div className="fa-solid fa-star" style={{color: '#D5D6DC', fontSize: '23px'}} onClick={open}></div>
                        <div className="fa-solid fa-star" style={{color: '#D5D6DC', fontSize: '23px'}} onClick={open}></div>
                        <div className="fa-solid fa-star" style={{color: '#D5D6DC', fontSize: '23px'}} onClick={open}></div>
                        <div className="fa-solid fa-star" style={{color: '#D5D6DC', fontSize: '23px'}} onClick={open}></div>

                    </div>
                    <div className={s.buttonBlock}>
                        <ButtonComponent title={'Save'} variant={'filled'} width={'73px'} height={'40px'} color={'#fff'} background={'#9854F6'}/>
                    </div>
                </div>

            </Modal>
            <div className="fa-solid fa-star" style={{color: '#D5D6DC', fontSize: '23px'}} onClick={open}></div>
        </>
    );
}