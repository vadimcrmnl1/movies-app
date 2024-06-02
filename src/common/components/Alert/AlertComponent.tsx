import {Alert} from '@mantine/core';

import {useAppDispatch} from "../../../app/store.ts";
import {setNetworkError} from "../../../app/actions.ts";
import s from './AlertComponent.module.css'
import {FC} from "react";

type AlertComponentPropsType = {
    error: string
}
export const AlertComponent: FC<AlertComponentPropsType> = ({error}) => {
    const dispatch = useAppDispatch()
    const handleCloseAlert = () => {
        dispatch(setNetworkError(''))
    }
    return (
        <Alert classNames={{
            root: s.root,
            wrapper: s.wrapper,
            label: s.label,
            message: s.message,
            closeButton: s.closeButton,
            title: s.title,
            icon: s.icon
        }} variant={'filled'}
               color="grape" radius="md" onClose={handleCloseAlert} withCloseButton title={error}>
            Try turning on VPN and reload the page
        </Alert>
    );
}