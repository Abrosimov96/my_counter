import classes from './Label.module.css'
import {ChangeEvent} from 'react';

type LabelProps = {
    label: string
    value: number
    onChange: (value: number) => void
    error: boolean
};
export const Label = ({label, value, onChange, error}: LabelProps) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange(+e.currentTarget.value)
    }

    return (
        <div className={classes.label}>
            <label htmlFor={label}>
                {label}:
            </label>
            <input
                type={'number'}
                id={label}
                value={value}
                onChange={(e) => onChangeHandler(e)}
                className={error ? classes.error : ''}
            />
        </div>
    );
};