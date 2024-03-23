import {Button} from '../Button/Button.tsx';
import {MODE, NAMES} from '../../variables.ts';
import classes from './Counter.module.css'
import {ModeType} from '../../App.tsx';

type CounterProps = {
    value: number
    maxValue: number
    inc: () => void
    reset: () => void
    mode: ModeType
};
export const Counter = ({value, maxValue, inc, reset, mode}: CounterProps) => {
    const error = value >= maxValue || mode === MODE.ERROR ? classes.error : ''
    const counterWrapper = `${classes.counter__wrapper} ${classes.counter}`
    const counter = `${classes.counter__wrapper} ${classes.value} ${error}`
    const buttons = `${classes.counter__wrapper} ${classes.buttons}`


    return (
        <div className={counterWrapper}>
            <div className={counter}>
                {
                    mode === MODE.NORMAL
                        ? value : mode === MODE.EDIT
                            ? NAMES.EDIT : NAMES.INVALID
                }
            </div>
            <div className={buttons}>
                <Button onClick={inc} disable={value >= maxValue || mode === MODE.EDIT || mode === MODE.ERROR}>{NAMES.INC}</Button>
                <Button onClick={reset} disable={mode === MODE.EDIT || mode === MODE.ERROR}>{NAMES.RESET}</Button>
            </div>
        </div>
    );
};