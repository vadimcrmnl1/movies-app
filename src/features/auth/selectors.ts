import {AppRootStateType} from "../../app/store";

export const selectGuestSessionId = (state: AppRootStateType) => state.auth.guest_session_id
export const selectRequestToken = (state: AppRootStateType) => state.auth.request_token
export const selectSessionId = (state: AppRootStateType) => state.auth.session_id