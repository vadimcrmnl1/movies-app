import s from "../MoviesBar.module.css";
import {SelectComponent} from "../../../../../common/components/Select/SelectComponent";
import {ButtonReset} from "../../../../../common/components/Button/ButtonComponent";
import {useAppDispatch, useAppSelector} from "../../../../../app/store";
import {
    setGenreAC,
    setResetFiltersAC,
    setSortByAC,
    setVoteAverageGteAC,
    setVoteAverageLteAC,
    setYearAC
} from "../../../actions";
import {useSelector} from "react-redux";
import {
    selectAverageGte,
    selectAverageLte,
    selectGenre,
    selectGenres,
    selectPrimaryReleaseYear,
    selectSortBy
} from "../../../selectors";

const SelectContainer = () => {
    const dispatch = useAppDispatch()

    const genres = useSelector(selectGenres).map(el => {
        return {value: el.id.toString(), label: el.name}
    })
    const genre = useAppSelector(selectGenre)
    const year = useAppSelector(selectPrimaryReleaseYear)
    const averages = ['10', '9', '8', '7', '6', '5', '4', '3', '2', '1', '0']
    const sortByArray = [
        {
            value: 'original_title.asc',
            label: 'Original title ascending'
        },
        {
            value: 'original_title.desc',
            label: 'Original title descending'
        },
        {
            value: 'popularity.asc',
            label: 'Popularity ascending'
        },
        {
            value: 'popularity.desc',
            label: 'Popularity descending'
        },
        {
            value: 'revenue.asc',
            label: 'Revenue ascending'
        },
        {
            value: 'revenue.desc',
            label: 'Revenue descending'
        },
        {
            value: 'primary_release_date.asc',
            label: 'Primary release date ascending'
        },
        {
            value: 'primary_release_date.desc',
            label: 'Primary release date descending'
        },
        {
            value: 'vote_average.asc',
            label: 'Vote average ascending'
        },
        {
            value: 'vote_average.desc',
            label: 'Vote average descending'
        },

        {
            value: 'title.asc',
            label: 'Title ascending'
        },
        {
            value: 'title.desc',
            label: 'Title descending'
        },
        {
            value: 'vote_count.asc',
            label: 'Vote count ascending'
        },
        {
            value: 'vote_count.desc',
            label: 'Vote count descending'
        },
    ]
    const sortBy = useAppSelector(selectSortBy)
    const averageGte = useAppSelector(selectAverageGte)
    const averageLte = useAppSelector(selectAverageLte)
    const createArrayYears = (currentYear: number) => {
        const start = currentYear;
        const end = currentYear - 50;
        const arr = [];
        for (let i = end; i <= start; ++i) {
            arr.unshift(i);
        }
        return arr;
    }
    const years = createArrayYears(2024).map(el => el.toString())
    const handleSetGenre = (id: string | null) => {
        dispatch(setGenreAC(Number(id)))
    }
    const handleSetYear = (id: string | null) => {
        dispatch(setYearAC(Number(id)))
    }
    const handleSetAverageGte = (id: string | null) => {
        dispatch(setVoteAverageGteAC(Number(id)))
    }
    const handleSetAverageLte = (id: string | null) => {
        dispatch(setVoteAverageLteAC(Number(id)))
    }
    const handleResetFilters = () => {
        dispatch(setResetFiltersAC({
            page: 1,
            language: 'en-Us',
            with_genres: null,
            primary_release_year: null,
            sort_by: null,
            ['vote_average.lte']: null, ['vote_average.gte']: null
        }))
    }
    const handleSetSortBy = (id: string | null) => {
        dispatch(setSortByAC(id as string))
    }
    return (
        <div className={s.selectContainer}>
            <div className={s.selectFormContainer}>
                <div className={s.selectForm}><SelectComponent type={'genres'} rating={false} label={'Genres'}
                                                               placeholder={'Select genre'}
                                                               data={genres} value={genre ? genre.toString() : null}
                                                               eventHandler={handleSetGenre}/></div>
                <div className={s.selectForm}><SelectComponent type={'releaseYear'} rating={false}
                                                               label={'Release year'} value={year ? year.toString() : null}
                                                               placeholder={'Select release year'}
                                                               data={years} eventHandler={handleSetYear}/>
                </div>

                <div className={s.selectRatingForm}>
                    <div className={s.selectRating}><SelectComponent type={'ratingsFrom'} rating={true}
                                                                     label={'Ratings'} placeholder={'From'}
                                                                     data={averages} value={averageGte ? averageGte.toString() : null}

                                                                     eventHandler={handleSetAverageGte}/>
                    </div>
                    <div className={s.selectRating}><SelectComponent type={'ratingsTo'} rating={true} placeholder={'To'}
                                                                     data={averages} value={averageLte ? averageLte.toString() : null}

                                                                     eventHandler={handleSetAverageLte}/>
                    </div>
                </div>
                <div className={s.selectResetForm}><ButtonReset title={'Reset filters'}
                                                                genre={genre} year={year} averageGte={averageGte} averageLte={averageLte}
                                                                eventHandle={handleResetFilters}/></div>

            </div>
            <div className={s.selectSortForm}>
                <SelectComponent type={'sortBy'} rating={false} placeholder={'Select sort by'}
                                 data={sortByArray} value={sortBy} eventHandler={handleSetSortBy}
                                 label={'Sort by'}/>
            </div>
        </div>
    );
};

export default SelectContainer;