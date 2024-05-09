import {useDisclosure} from '@mantine/hooks';
import {Modal} from '@mantine/core';
import s from './ModalForm.module.css'
import React, {FC, useState} from "react";
import {ButtonModalSave} from "../Button/ButtonComponent";
import {Rating} from "../Rating/Rating";
import {useAppDispatch} from "../../../app/store";
import {addRating} from "../../../features/movies/movies-reducer";

type ModalFormPropsType = {
    title: string
    headerTitle: string
    id: number
}

export const ModalForm: FC<ModalFormPropsType> = ({id, title, headerTitle}) => {
    const dispatch = useAppDispatch()
    const [opened, { open, close }] = useDisclosure(false);
    const [rating, setRating] = useState(0)
    const handleAddRating = () => {
        dispatch(addRating(id, rating))
        close()
    }

    return (
        <>
            <Modal radius={8} classNames={{ title: s.headerTitle, close: s.closeButton}} title={headerTitle} opened={opened} onClose={close} centered>
                <div className={s.wrapper}>
                    <div className={s.title}>{title}</div>
                    <Rating eventHandle={setRating}/>
                    <div className={s.buttonBlock}>
                        <ButtonModalSave eventHandle={handleAddRating} type={'save'} title={'Save'}/>
                        <ButtonModalSave type={'remove'} title={'Remove rating'}/>

                    </div>
                </div>

            </Modal>
            <div className="fa-solid fa-star" style={{color: '#D5D6DC', fontSize: '23px'}} onClick={open}></div>
        </>
    );
}