export const setAppIsLoadingAC = (isLoading: boolean) => ({
    type: 'APP/IS_LOADING',
    payload: {isLoading}
} as const)
export const setAppIsFirstEnter = (isFirstEnter: boolean) => ({
    type: 'APP/IS_FIRST_ENTER',
    payload: {isFirstEnter}
} as const)