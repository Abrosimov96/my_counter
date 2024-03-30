import {combineReducers, createStore} from 'redux';
import {counterReducer} from './counter-reducer.ts';
import {loadState, saveState} from './localStorage.ts';

const persistedState = loadState()

const rootReducer = combineReducers({
    counter: counterReducer
})

export type AppStoreType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, persistedState)

store.subscribe(() => {
    saveState(store.getState())
})