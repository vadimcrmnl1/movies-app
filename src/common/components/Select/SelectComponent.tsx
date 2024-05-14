import {FC} from "react";
import './SelectComponent.css'
import {Select} from "@mantine/core";


type SelectComponentProps = {
    label?: string
    placeholder: string
    data: string[] | { value: string; label: string }[]
    rating?: boolean
    type?: 'genres' | 'releaseYear' | 'ratingsFrom' | 'ratingsTo' | 'sortBy'
    eventHandler: (id: string | null) => void
    value: string | null
    error?: string
}


export const SelectComponent: FC<SelectComponentProps> = ({value, eventHandler, label, placeholder, data}) => {
    return (
        <Select
            label={label}
            placeholder={placeholder}
            data={data}
            value={value}
            onChange={(id) => eventHandler(id)}
            radius={8}
        />
    );
}
