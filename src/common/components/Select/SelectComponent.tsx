import {FC, useState} from "react";
import s from './SelectComponent.module.css'
import {Select} from "@mantine/core";
import {SlArrowDown, SlArrowUp} from "react-icons/sl";

type SelectComponentProps = {
    label?: string
    placeholder: string
    data: string[] | { value: string; label: string }[]
    rating?: boolean
    type?: 'genres' | 'releaseYear' | 'ratingsFrom' | 'ratingsTo' | 'sortBy'
    eventHandler: (id: string | null) => void
    value: string | null | undefined
    error?: string
}


export const SelectComponent: FC<SelectComponentProps> = ({error, type, value, eventHandler, label, placeholder, data}) => {
    const [focus, setFocus] = useState<boolean>(false)

    return (
        <Select
            classNames={{
                input: focus ? s.inputFocus : s.input,
                label: s.label,
                error: s.error,
                options: s.options,
                option: s.option,
                dropdown: s.dropdown
            }}

            label={label}
            rightSection={type !== 'ratingsTo' && type !== 'ratingsFrom' ? <SlArrowDown size={16}/>
                :
                <div className={s.ratingRightSection}>
                    <SlArrowUp size={10}/>
                    <SlArrowDown size={10}/>
                </div>}
            placeholder={placeholder}
            withCheckIcon={false}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
            data={data}
            value={value}
            onChange={(id) => eventHandler(id)}
            radius={8}
            error={error}
        />

    );
}
