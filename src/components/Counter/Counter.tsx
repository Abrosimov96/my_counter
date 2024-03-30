import {Button} from '../Button/Button.tsx';
import {MODE, NAMES} from '../../variables.ts';
import classes from './Counter.module.css'
import {useDispatch, useSelector} from 'react-redux';
import {AppStoreType} from '../../store/store.ts';
import {CounterType, incrementCounterAC, resetCounterAC} from '../../store/counter-reducer.ts';

export const Counter = () => {
    const dispatch = useDispatch()
    const counter = useSelector<AppStoreType, CounterType>(store => store.counter)

    const incrementCounter = () => {
        dispatch(incrementCounterAC())
    }
    const resetCounter = () => {
        dispatch(resetCounterAC(counter.startValue))
    }

    const error = counter.counterValue >= counter.maxValue || counter.mode === MODE.ERROR ? classes.error : ''
    const counterWrapper = `${classes.counter__wrapper} ${classes.counter}`
    const counterClass = `${classes.counter__wrapper} ${classes.value} ${error}`
    const buttonsClass = `${classes.counter__wrapper} ${classes.buttons}`

    const isIncrementDisable = counter.counterValue >= counter.maxValue || counter.mode === MODE.EDIT || counter.mode === MODE.ERROR
    const isResetDisable = counter.mode === MODE.EDIT || counter.mode === MODE.ERROR

    const counterDisplay = counter.mode === MODE.NORMAL
        ? counter.counterValue : counter.mode === MODE.EDIT
            ? NAMES.EDIT : NAMES.INVALID

    return (
        <div className={counterWrapper}>
            <div className={counterClass}>
                {counterDisplay}
            </div>
            <div className={buttonsClass}>
                <Button
                    onClick={incrementCounter}
                    disable={isIncrementDisable}
                >
                    {NAMES.INC}
                </Button>
                <Button
                    onClick={resetCounter}
                    disable={isResetDisable}
                >
                    {NAMES.RESET}
                </Button>
            </div>
        </div>
    );
};