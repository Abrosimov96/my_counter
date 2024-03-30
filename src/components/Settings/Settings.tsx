import {MODE, NAMES} from '../../variables.ts';
import {Button} from '../Button/Button.tsx';
import classes from './Settings.module.css'
import {Label} from './Label/Label.tsx';
import {useDispatch, useSelector} from 'react-redux';
import {AppStoreType} from '../../store/store.ts';
import {changeMaxValueAC, changeStartValueAC, CounterType, setSettingsValueAC} from '../../store/counter-reducer.ts';


export const Settings = () => {
    const dispatch = useDispatch()
    const counter = useSelector<AppStoreType, CounterType>(store => store.counter)

    const setSettingsHandler = () => {
        dispatch(setSettingsValueAC(counter.maxValue, counter.startValue))
    }

    const onChangeMaxValueHandler = (value: number) => {
        dispatch(changeMaxValueAC(value))
    }

    const onChangeStartValueHandler = (value: number) => {
        dispatch(changeStartValueAC(value))
    }


    return (
        <div className={`${classes.settings__wrapper} ${classes.settings}`}>
            <div className={`${classes.settings__wrapper} ${classes.labels}`}>
                <Label
                    label={NAMES.MAX_VALUE}
                    value={counter.maxValue}
                    onChange={onChangeMaxValueHandler}
                    error={counter.maxValue <= counter.startValue}
                />
                <Label
                    label={NAMES.START_VALUE}
                    value={counter.startValue}
                    onChange={onChangeStartValueHandler}
                    error={counter.startValue >= counter.maxValue || counter.startValue < 0}
                />
            </div>
            <div className={classes.settings__wrapper}>
                <Button onClick={setSettingsHandler} disable={counter.mode === MODE.NORMAL || counter.mode === MODE.ERROR || counter.startValue < 0}>{NAMES.SET}</Button>
            </div>
        </div>
    );
};