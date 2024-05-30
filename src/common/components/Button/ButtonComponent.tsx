import {Button} from '@mantine/core';
import {FC} from "react";
import './ButtonComponent.css'

type ButtonComponentProps = {
    title: string
    eventHandle?: () => void
    type?: 'save' | 'remove'
    rating?: number | null
    genre?: number | null
    year?: number | null
    averageGte?: number | null
    averageLte?: number | null
}

export const ButtonReset: FC<ButtonComponentProps> = ({genre, year, averageGte, averageLte, title, eventHandle}) => {
    return <Button onClick={eventHandle} size={'compact-md'}
                   disabled={!genre && !year && !averageGte && !averageLte}
                   style={{height: '42px', fontWeight: '500', fontSize: '14px', lineHeight: '20px'}}
                   variant="transparent" color="#7B7C88">{title}</Button>;
}
export const ButtonModalSave: FC<ButtonComponentProps> = ({rating, title, eventHandle, type}) => {
    return <Button onClick={eventHandle} size={'compact-md'} radius={8} justify={'center'}
                   style={{height: '40px', minWidth: '73px', fontWeight: '600', fontSize: '14px', lineHeight: '20px'}}
                   variant={type === 'save' ? 'filled' : 'subtle'} color={"#9854F6"}
                   disabled={type === 'remove' && rating == 0}>{title}</Button>;
}