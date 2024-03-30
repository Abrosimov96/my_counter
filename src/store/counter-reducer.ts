import {ModeType} from '../App.tsx';
import {MODE} from '../variables.ts';


type ActionType = IncrementCounterACType | ResetCounterACType | ChangeMaxValueACType | ChangeStartValueACType | SetSettingsValueACType

export type CounterType = {
    counterValue: number
    startValue: number
    maxValue: number
    mode: ModeType
}

const initialValue: CounterType = {
    counterValue: 0,
    startValue: 0,
    maxValue: 5,
    mode: MODE.NORMAL
}

export const counterReducer = (state: CounterType = initialValue, action: ActionType) : CounterType => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                counterValue: state.counterValue + 1
            }
        case 'RESET':
            return {
                ...state,
                counterValue: action.payload.reset
            }
        case 'CHANGE_MAX_VALUE':
            return {
                ...state,
                maxValue: action.payload.maxValue,
                mode: action.payload.maxValue > state.startValue ? MODE.EDIT : MODE.ERROR
            }
        case 'CHANGE_START_VALUE':
            return {
                ...state,
                startValue: action.payload.startValue,
                mode: action.payload.startValue < state.maxValue
                && action.payload.startValue >= 0 ? MODE.EDIT : MODE.ERROR
            }
        case 'SET_SETTINGS_VALUE':
            return {
                counterValue: action.payload.startValue,
                startValue: action.payload.startValue,
                maxValue: action.payload.maxValue,
                mode: MODE.NORMAL
            }
        default:
            return state
    }
}

type IncrementCounterACType = ReturnType<typeof incrementCounterAC>
export const incrementCounterAC = () => {
    return {
        type: 'INCREMENT'
    } as const
}

type ResetCounterACType = ReturnType<typeof resetCounterAC>
export const resetCounterAC = (reset: number) => {
    return {
        type: 'RESET',
        payload: {
            reset
        }
    } as const
}

type ChangeMaxValueACType = ReturnType<typeof changeMaxValueAC>
export const changeMaxValueAC = (maxValue: number) => {
    return {
        type: 'CHANGE_MAX_VALUE',
        payload: {
            maxValue
        }
    } as const
}

type ChangeStartValueACType = ReturnType<typeof changeStartValueAC>
export const changeStartValueAC = (startValue: number) => {
    return {
        type: 'CHANGE_START_VALUE',
        payload: {
            startValue
        }
    } as const
}

type SetSettingsValueACType = ReturnType<typeof setSettingsValueAC>
export const setSettingsValueAC = (maxValue: number, startValue: number) => {
    return {
        type: 'SET_SETTINGS_VALUE',
        payload: {
            maxValue,
            startValue
        }
    } as const
}