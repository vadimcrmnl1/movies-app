import {AppActionsType} from "./types";

const appInitialState = {
    isLoading: false,
    isFirstEnter: false,
    error: '',
    networkError: ''
}
export type AppInitialStateType = typeof appInitialState
export const appReducer = (state: AppInitialStateType = appInitialState, action: AppActionsType): AppInitialStateType => {
    switch (action.type) {
        case 'APP/IS_LOADING':
            return {...state, isLoading: action.payload.isLoading}
        case 'APP/IS_FIRST_ENTER':
            return {...state, isFirstEnter: action.payload.isFirstEnter}
        case 'APP/SET_ERROR':
            return {...state, error: action.payload.error}
        case 'APP/SET_NETWORK_ERROR':
            return {...state, networkError: action.payload.networkError}
        default:
            return state
    }
}