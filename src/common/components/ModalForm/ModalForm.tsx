import {useDisclosure} from '@mantine/hooks';
import {Modal} from '@mantine/core';
import s from './ModalForm.module.css'
import React, {FC} from "react";

type ModalFormPropsType = {
    title: string
    headerTitle: string
}

export const ModalForm: FC<ModalFormPropsType> = ({title, headerTitle}) => {
    const [opened, { open, close }] = useDisclosure(false);

    return (
        <>
            <Modal radius={8} classNames={{root: s.root, title: s.headerTitle, close: s.closeButton}} title={headerTitle} opened={opened} onClose={close} centered>
                <div className={s.title}>{title}</div>
            </Modal>
            <div className="fa-solid fa-star" style={{color: '#D5D6DC', fontSize: '23px'}} onClick={open}></div>
        </>
    );
}