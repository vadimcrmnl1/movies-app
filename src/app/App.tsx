import "@mantine/core/styles.css";
import {MantineProvider} from "@mantine/core";
import {theme} from "../theme";
import {useSelector} from "react-redux";
import {selectIsLoading} from "./selectors";
import {LoaderComponent} from "../common/components/Loader/Loader";
import s from '../app/App.module.css'
import {Navigate, Outlet} from "react-router-dom";

export const App = () => {

    // const dispatch = useAppDispatch()
    const isLoading = useSelector(selectIsLoading)
    // const requestToken = useAppSelector(selectRequestToken)
    // const page = useAppSelector(selectPage)
    // const genre = useAppSelector(selectGenre)
    // const year = useAppSelector(selectPrimaryReleaseYear)
    // const averageGte = useAppSelector(selectAverageGte)
    // const averageLte = useAppSelector(selectAverageLte)
    // const sortBy = useAppSelector(selectSortBy)
    //
    //
    // useEffect(() => {
    //     // dispatch(createGuestSession())
    //     dispatch(fetchMovies())
    //     dispatch(fetchGenres())
    // }, [page, genre, year, averageGte, averageLte, sortBy])
    Navigate({to: '/movies-app/movies'})
    return <MantineProvider theme={theme}>
        {isLoading && <LoaderComponent/>}
        <div className={s.wrapper}>
            <div className={s.container}>
                <Outlet/>
            </div>

        </div>
    </MantineProvider>;
}
