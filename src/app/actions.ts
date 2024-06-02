export const setAppIsLoadingAC = (isLoading: boolean) => ({
    type: 'APP/IS_LOADING',
    payload: {isLoading}
} as const)
export const setAppIsFirstEnter = (isFirstEnter: boolean) => ({
    type: 'APP/IS_FIRST_ENTER',
    payload: {isFirstEnter}
} as const)
export const setError = (error: string) => ({
    type: 'APP/SET_ERROR',
    payload: {error}
} as const)
export const setNetworkError = (networkError: string) => ({
    type: 'APP/SET_NETWORK_ERROR',
    payload: {networkError}
} as const)