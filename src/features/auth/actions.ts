export const setGuestSessionIdAC = (id: string) => ({
    type: 'AUTH/SET_GUEST_SESSION_ID',
    payload: {id}
} as const)
export const setRequestTokenAC = (request_token: string) => ({
    type: 'AUTH/SET_REQUEST_TOKEN',
    payload: {request_token}
} as const)
export const setSessionIdAC = (session_id: string) => ({
    type: 'AUTH/SET_SESSION_ID',
    payload: {session_id}
} as const)