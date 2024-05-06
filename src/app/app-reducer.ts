import {AppActionsType, AppInitialStateType} from "./types";

const appInitialState: AppInitialStateType = {
    isLoading: false
}
export const appReducer = (state: AppInitialStateType = appInitialState, action: AppActionsType): AppInitialStateType => {
    switch (action.type) {
        case 'APP/IS_LOADING':
            return {...state, isLoading: action.payload.isLoading}
        default:
            return state
    }
}