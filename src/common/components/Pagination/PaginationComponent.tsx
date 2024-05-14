import {Pagination} from '@mantine/core';
import {useState} from "react";
import {useAppDispatch, useAppSelector} from "../../../app/store";
import {selectMovies} from "../../../features/movies/selectors";
import {setPageAC} from "../../../features/movies/actions";

export const PaginationComponent = () => {
    const dispatch = useAppDispatch()
    const [value, setValue] = useState<number>(1)
    const totalPages = useAppSelector(selectMovies).total_pages
    const handleSetPage = (page: number) => {
        setValue(page)
        dispatch(setPageAC(page))
    }
    return <Pagination boundaries={0}
                       onChange={(value: number) => handleSetPage(value)} defaultValue={1} value={value} total={totalPages}
                       color="#9854F6"/>;
}