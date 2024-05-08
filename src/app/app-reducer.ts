import {AppActionsType} from "./types";

const appInitialState: AppInitialStateType = {
    isLoading: false,
    isFirstEnter: true
}
export type AppInitialStateType = typeof appInitialState
export const appReducer = (state: AppInitialStateType = appInitialState, action: AppActionsType): AppInitialStateType => {
    switch (action.type) {
        case 'APP/IS_LOADING':
            return {...state, isLoading: action.payload.isLoading}
        case 'APP/IS_FIRST_ENTER':
            return {...state, isFirstEnter: action.payload.isFirstEnter}
        default:
            return state
    }
}