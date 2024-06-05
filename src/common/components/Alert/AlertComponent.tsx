import {Modal} from '@mantine/core';

import {useAppDispatch} from "../../../app/store.ts";
import {setNetworkError} from "../../../app/actions.ts";
import s from './AlertComponent.module.css'
import {FC} from "react";
import {useDisclosure} from "@mantine/hooks";

type AlertComponentPropsType = {
    error: string
}
export const AlertComponent: FC<AlertComponentPropsType> = ({error}) => {
    const dispatch = useAppDispatch()
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [, {close}] = useDisclosure()
    const handleCloseAlert = () => {
        dispatch(setNetworkError(''))
        close()
    }
    return (
        <Modal classNames={{title: s.label, root: s.root}} opened={error !== ''} onClose={handleCloseAlert} centered title={error}>
            Try turning on VPN and reload the page
        </Modal>

    );
}