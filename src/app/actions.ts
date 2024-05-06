export const setAppIsLoadingAC = (isLoading: boolean) => ({
    type: 'APP/IS_LOADING',
    payload: {isLoading}
} as const)