import * as actions from './actions'
import {ThunkAction, ThunkDispatch} from "redux-thunk";
import {AnyAction} from "redux";
import {AppRootStateType} from "./store";
import {MoviesActionsType} from "../features/movies/types";

export type InferValueTypes<T> = T extends { [key: string]: infer U } ? U : never
export type AppThunkDispatch = ThunkDispatch<AppRootStateType, unknown, AllReducersActionsType>
export type AppThunk<A extends AnyAction, ReturnType = void> = ThunkAction<
    ReturnType,
    AppRootStateType,
    unknown,
    A
    >
export type AllReducersActionsType =
    | AppActionsType | MoviesActionsType

export type AppActionsType = ReturnType<InferValueTypes<typeof actions>>

