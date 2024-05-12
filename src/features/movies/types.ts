import * as actions from './actions'
import {InferValueTypes} from "../../app/types";


export type MoviesActionsType = ReturnType<InferValueTypes<typeof actions>>
export type RatedMoviesType = {
    id: number
    rating?: number | null

}