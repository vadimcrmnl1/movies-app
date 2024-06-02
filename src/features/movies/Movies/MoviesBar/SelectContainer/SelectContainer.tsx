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
import {useSearchParams} from "react-router-dom";
import {useEffect} from "react";

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
            label: 'Original titles A-Z'
        },
        {
            value: 'original_title.desc',
            label: 'Original titles Z-A'
        },
        {
            value: 'popularity.asc',
            label: 'Least popular'
        },
        {
            value: 'popularity.desc',
            label: 'Most popular'
        },
        {
            value: 'revenue.asc',
            label: 'Least revenue'
        },
        {
            value: 'revenue.desc',
            label: 'Most revenue'
        },
        {
            value: 'primary_release_date.asc',
            label: 'Release date ascending'
        },
        {
            value: 'primary_release_date.desc',
            label: 'Release date descending'
        },
        {
            value: 'vote_average.asc',
            label: 'Least vote average'
        },
        {
            value: 'vote_average.desc',
            label: 'Most vote average'
        },

        {
            value: 'title.asc',
            label: 'Title A-Z'
        },
        {
            value: 'title.desc',
            label: 'Title Z-A'
        },
        {
            value: 'vote_count.asc',
            label: 'Least vote count'
        },
        {
            value: 'vote_count.desc',
            label: 'Most vote count'
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
    const [searchParams, setSearchParams] = useSearchParams()
    const sortQuery = searchParams.get('sortBy') || ''
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
            sort_by: sortQuery,
            ['vote_average.lte']: null, ['vote_average.gte']: null
        }))
    }
    const handleSetSortBy = (id: string | null) => {
        setSearchParams({sortBy: id as string})
        dispatch(setSortByAC(id as string))
    }
    useEffect(() => {
        setSearchParams({sortBy: sortBy as string})

    }, []);
    return (
        <div className={s.selectContainer}>
            <div className={s.selectFormContainer}>
                <div className={s.selectForm}><SelectComponent type={'genres'} rating={false} label={'Genres'}
                                                               placeholder={'Select genre'}
                                                               data={genres} value={genre ? genre.toString() : null}
                                                               eventHandler={handleSetGenre}/></div>
                <div className={s.selectForm}><SelectComponent type={'releaseYear'} rating={false}
                                                               label={'Release year'}
                                                               value={year ? year.toString() : null}
                                                               placeholder={'Select release year'}
                                                               data={years} eventHandler={handleSetYear}/>
                </div>

                <div className={s.selectRatingForm}>
                    <div className={s.selectRating}><SelectComponent type={'ratingsFrom'} rating={true}
                                                                     label={'Ratings'} placeholder={'From'}
                                                                     data={averages}
                                                                     value={averageGte ? averageGte.toString() : null}

                                                                     eventHandler={handleSetAverageGte}/>
                    </div>
                    <div className={s.selectRating}><SelectComponent type={'ratingsTo'} rating={true} placeholder={'To'}
                                                                     data={averages}
                                                                     value={averageLte ? averageLte.toString() : null}

                                                                     eventHandler={handleSetAverageLte}/>
                    </div>
                </div>
                <div className={s.selectResetForm}><ButtonReset title={'Reset filters'}
                                                                genre={genre} year={year} averageGte={averageGte}
                                                                averageLte={averageLte}
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