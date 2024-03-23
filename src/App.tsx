import './App.css'
import {useEffect, useState} from 'react';
import {Counter} from './components/Counter/Counter.tsx';
import {Settings} from './components/Settings/Settings.tsx';
import {MODE} from './variables.ts';

export type ModeType = MODE.EDIT | MODE.ERROR | MODE.NORMAL

function App() {
    const localMaxValue = Number(localStorage.getItem('maxValue')) || 5
    const localStartValue = Number(localStorage.getItem('startValue')) || 0
    const localCurrentValue = Number(localStorage.getItem('currentValue'))


    const [maxValue, setMaxValue] = useState(localMaxValue)
    const [startValue, setStartValue] = useState(localStartValue)
    const [currentValue, setCurrentValue] = useState(localCurrentValue || startValue)
    const [mode, setMode] = useState<ModeType>(MODE.NORMAL)


    useEffect(() => {
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
        localStorage.setItem('startValue', JSON.stringify(startValue))
        localStorage.setItem('currentValue', JSON.stringify(currentValue))
        if (currentValue < startValue) {
            localStorage.setItem('currentValue', JSON.stringify(startValue))
        }
    }, [maxValue, startValue, currentValue])

    const incrementValue = () => {
        setCurrentValue(currentValue + 1)
        setMode(MODE.NORMAL)
    }

    const resetValue = () => {
        setCurrentValue(startValue)
    }

    const setSettings = (maxSetValue: number, startSetValue: number) => {
        setMaxValue(maxSetValue)
        setStartValue(startSetValue)
        setMode(MODE.NORMAL)
        setCurrentValue(startSetValue)
    }

    return (
        <div className={'wrapper'}>
            <Settings
                maxValue={maxValue}
                startValue={startValue}
                setSettings={setSettings}
                setMaxValue={(v) => setMaxValue(v)}
                setStartValue={(v) => setStartValue(v)}
                mode={mode}
                setMode={setMode}
            />
            <Counter
                value={currentValue}
                maxValue={maxValue}
                inc={incrementValue}
                reset={resetValue}
                mode={mode}
            />
        </div>
    )
}

export default App
