import {AppRootStateType} from "./store";

export const selectIsLoading = (state: AppRootStateType) => state.app.isLoading
export const selectIsFirstEnter = (state: AppRootStateType) => state.app.isFirstEnter
export const selectError = (state: AppRootStateType) => state.app.error
export const selectNetworkError = (state: AppRootStateType) => state.app.networkError