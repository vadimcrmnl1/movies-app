import {Button} from '@mantine/core';
import React, {FC} from "react";
import './ButtonComponent.css'

type ButtonComponentProps = {
    title: string
    eventHandle?: () => void
}

export const ButtonComponent: FC<ButtonComponentProps> = ({title}) => {

    return <Button size={'md'} style={{
        fontFamily: 'Inter',
        fontSize: '16px',
        fontWeight: '700',
        lineHeight: '22.4',
        padding: '10px',
        color: 'black'
    }} justify={'start'} radius={8} variant="subtle" color="#9854F6">{title}</Button>;
}

export const ButtonReset: FC<ButtonComponentProps> = ({title, eventHandle}) => {
    return <Button onClick={eventHandle} size={'compact-md'}
                   style={{height: '42px', fontWeight: '500', fontSize: '14px', lineHeight: '20px'}}
                   variant="transparent" color="#7B7C88">{title}</Button>;
}