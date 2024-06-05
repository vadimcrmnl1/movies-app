import {NumberInput} from '@mantine/core';
import s from './../Select/SelectComponent.module.css'
import {FC, useState} from "react";
import {SlArrowDown, SlArrowUp} from "react-icons/sl";

type InputNumberPropsType = {
    label: string
    placeholder: string
    error: string
    eventHandler: (id: string | null) => void
}

export const Input: FC<InputNumberPropsType> = ({error, label, placeholder, eventHandler}) => {
    const [focus, setFocus] = useState<boolean>(false)
    const [value, setValue] = useState<string | number>('')
    return (
        <NumberInput
            classNames={{

                input: focus ? s.inputFocus : s.input,
                label: s.label,
                error: s.error,
                section: s.ratingRightSection

            }}
            onFocus={() => setFocus(true)}
            error={error}
            min={0}
            max={10}
            value={value}
            label={label}
            placeholder={placeholder}
            onChange={setValue}
            rightSection={<div className={s.ratingRightSection}>
                <button disabled={Number(value) === 10} className={s.rightSectionButton} onClick={() => setValue(Number(value) + 1)}><SlArrowUp size={10}/></button>
                <button disabled={Number(value) === 0} className={s.rightSectionButton} onClick={() => setValue(Number(value) - 1)}><SlArrowDown size={10}/></button>
            </div> }
            radius={8}
            onBlur={() => {
                eventHandler(value.toString())
                setFocus(false)
            }}
        />
    );
}