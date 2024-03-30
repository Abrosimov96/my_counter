import {combineReducers, createStore} from 'redux';
import {counterReducer} from './counter-reducer.ts';

const rootReducer = combineReducers({
    counter: counterReducer
})

export type AppStoreType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)