import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux'
import {applyMiddleware, combineReducers, legacy_createStore} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import {thunk} from 'redux-thunk'


import {appReducer} from './app-reducer'
import {AppThunkDispatch} from './types'
import {moviesReducer} from "../features/movies/movies-reducer";

function saveToLocalStorage (state : AppRootStateType) {
    try {
        const serialisedState = JSON.stringify(state)
        localStorage.setItem('persistantState', serialisedState)
    } catch (e) {
        console.warn(e)
    }
}

function loadFromLocalStorage () {
    try {
        const serialisedState = localStorage.getItem('persistantState')
        if (serialisedState === null) return undefined
        return JSON.parse(serialisedState)
    } catch (e) {
        console.warn(e)
        return undefined
    }
}

const rootReducer = combineReducers({
    app: appReducer,
    movies: moviesReducer,

})
export type AppRootStateType = ReturnType<typeof rootReducer>

const middlewareEnhancer = applyMiddleware<AppThunkDispatch, AppRootStateType>(thunk)

const composedEnhancers = composeWithDevTools(middlewareEnhancer)

export const store = legacy_createStore(rootReducer, loadFromLocalStorage(), composedEnhancers)
store.subscribe(() => saveToLocalStorage(store.getState()))

export const useAppDispatch = () => useDispatch<AppThunkDispatch>()
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector

window.localStorage.store = store
