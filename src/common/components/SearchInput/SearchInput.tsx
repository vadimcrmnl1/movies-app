import {FC, KeyboardEvent, useState} from 'react';
import {Button, Input} from "@mantine/core";
import s from './SearchInput.module.css'
import {CiSearch} from "react-icons/ci";


type SearchInputPropsType = {
    eventHandle: (title: string) => void
}
export const SearchInput: FC<SearchInputPropsType> = ({eventHandle}) => {
    const [value, setValue] = useState('');
    const [focus, setFocus] = useState<boolean>(false)
    const handlePressEnter = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.code === 'Enter') {
            eventHandle(value)
        }
    }

    return (
        <div className={s.searchBlock} onKeyDown={handlePressEnter}>
            <Input
                classNames={{wrapper: s.wrapper, input: focus ? s.inputFocus : s.input, section: s.section}}
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
                placeholder={'Search movie title'}
                value={value}
                onChange={(event) => setValue(event.currentTarget.value)}
                rightSectionPointerEvents="all"
                mt="md"
                leftSection={<CiSearch size={16}/>}
                rightSection={
                    <Button
                        classNames={{label: s.label, root: s.buttonRoot}}
                        color={'purple.1'}
                        variant={'filled'} onClick={() => eventHandle(value)}>Search</Button>
                }
            />
        </div>
    );
};
