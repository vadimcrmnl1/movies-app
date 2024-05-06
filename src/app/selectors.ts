import {AppRootStateType} from "./store";

export const selectIsLoading = (state: AppRootStateType) => state.app.isLoading