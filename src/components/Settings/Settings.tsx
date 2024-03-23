import {MODE, NAMES} from '../../variables.ts';
import {Button} from '../Button/Button.tsx';
import classes from './Settings.module.css'
import {Label} from './Label/Label.tsx';
import {ModeType} from '../../App.tsx';

type SettingsProps = {
    maxValue: number
    startValue: number
    setSettings: (maxValue: number, startValue: number) => void
    setMaxValue: (maxValue: number) => void
    setStartValue: (maxValue: number) => void
    mode: ModeType
    setMode: (mode: ModeType) => void
};
export const Settings = ({maxValue, startValue, setSettings, setMaxValue, setStartValue, mode, setMode}: SettingsProps) => {

    const setSettingsHandler = () => {
        setSettings(maxValue, startValue)
    }

    const onChangeMaxValueHandler = (value: number) => {
        setMaxValue(value)
        if (value > startValue) {
            setMode(MODE.EDIT)
        } else {
            setMode(MODE.ERROR)
        }
    }

    const onChangeStartValueHandler = (value: number) => {
        setStartValue(value)
        if (value < maxValue && value >= 0) {
            setMode(MODE.EDIT)
        } else {
            setMode(MODE.ERROR)
        }
    }


    return (
        <div className={`${classes.settings__wrapper} ${classes.settings}`}>
            <div className={`${classes.settings__wrapper} ${classes.labels}`}>
                <Label
                    label={NAMES.MAX_VALUE}
                    value={maxValue}
                    onChange={onChangeMaxValueHandler}
                    error={maxValue <= startValue}
                />
                <Label
                    label={NAMES.START_VALUE}
                    value={startValue}
                    onChange={onChangeStartValueHandler}
                    error={startValue >= maxValue || startValue < 0}
                />
            </div>
            <div className={classes.settings__wrapper}>
                <Button onClick={setSettingsHandler} disable={mode === MODE.NORMAL || mode === MODE.ERROR || startValue < 0}>{NAMES.SET}</Button>
            </div>
        </div>
    );
};