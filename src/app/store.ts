import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux'
import {applyMiddleware, combineReducers, legacy_createStore} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import {thunk} from 'redux-thunk'


import {appReducer} from './app-reducer'
import {AppThunkDispatch} from './types'
import {moviesReducer} from "../features/movies/Movies/movies-reducer";
import {authReducer} from "../features/auth/auth-reducer";

const rootReducer = combineReducers({
    app: appReducer,
    movies: moviesReducer,
    auth: authReducer

})
const middlewareEnhancer = applyMiddleware<AppThunkDispatch, AppRootStateType>(thunk)

const composedEnhancers = composeWithDevTools(middlewareEnhancer)

export const store = legacy_createStore(rootReducer, composedEnhancers)
export type AppRootStateType = ReturnType<typeof rootReducer>

export const useAppDispatch = () => useDispatch<AppThunkDispatch>()
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector

// @ts-ignore
window.store = store
