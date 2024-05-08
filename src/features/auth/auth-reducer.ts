import {AuthActionsType} from "./types";
import {AllReducersActionsType, AppThunk} from "../../app/types";
import * as appActions from "../../app/actions";
import * as authActions from './actions'
import {authApi} from "../../api/api";

const authInitialState: AuthInitialStateType = {
    guest_session_id: '',
    request_token: '',
    session_id: ''
}
export type AuthInitialStateType =  typeof authInitialState

export const authReducer = (state: AuthInitialStateType = authInitialState, action: AuthActionsType): AuthInitialStateType => {
    switch (action.type) {
        case 'AUTH/SET_GUEST_SESSION_ID':
            return {...state, guest_session_id: action.payload.id }
        case 'AUTH/SET_REQUEST_TOKEN':
            return {...state, request_token: action.payload.request_token}
        case 'AUTH/SET_SESSION_ID':
            return {...state, session_id: action.payload.session_id}
        default:
            return state
    }

}

export const createGuestSession = (): AppThunk<AllReducersActionsType> => async (dispatch, getState) => {
    dispatch(appActions.setAppIsLoadingAC(true))
    try {
        const res = await authApi.createGuestSession()
        dispatch(authActions.setGuestSessionIdAC(res.data.guest_session_id))
    } catch (e) {
        console.error('error', e)
    } finally {
        dispatch(appActions.setAppIsLoadingAC(false))
    }
}
export const getRequestToken = (): AppThunk<AllReducersActionsType> => async (dispatch) => {
    dispatch(appActions.setAppIsLoadingAC(true))

    try {
        const res = await authApi.createRequestToken()
        dispatch(authActions.setRequestTokenAC(res.data.request_token))
    } catch (e) {
        console.error('error', e)
    } finally {
        dispatch(appActions.setAppIsLoadingAC(false))
        dispatch(appActions.setAppIsFirstEnter(false))
    }
}
export const createSession = (): AppThunk<AllReducersActionsType> => async (dispatch, getState) => {
    dispatch(appActions.setAppIsLoadingAC(true))
    const url_token = location.href
    const request_token = new URL(url_token).searchParams.get('request_token')
    try {
        const res = await authApi.createSession(request_token)
        dispatch(authActions.setSessionIdAC(res.data.session_id))
    } catch (e) {
        console.error('error', e)
    } finally {
        dispatch(appActions.setAppIsLoadingAC(false))

    }
}