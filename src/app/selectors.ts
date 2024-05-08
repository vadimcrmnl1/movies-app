import {AppRootStateType} from "./store";

export const selectIsLoading = (state: AppRootStateType) => state.app.isLoading
export const selectIsFirstEnter = (state: AppRootStateType) => state.app.isFirstEnter