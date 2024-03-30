import './App.css'
import {Counter} from './components/Counter/Counter.tsx';
import {Settings} from './components/Settings/Settings.tsx';
import {MODE} from './variables.ts';

export type ModeType = MODE.EDIT | MODE.ERROR | MODE.NORMAL

function App() {

    // useEffect(() => {
    //     localStorage.setItem('maxValue', JSON.stringify(maxValue))
    //     localStorage.setItem('startValue', JSON.stringify(startValue))
    //     localStorage.setItem('currentValue', JSON.stringify(currentValue))
    //     if (currentValue < startValue) {
    //         localStorage.setItem('currentValue', JSON.stringify(startValue))
    //     }
    // }, [maxValue, startValue, currentValue])


    return (
        <div className={'wrapper'}>
            <Settings/>
            <Counter/>
        </div>
    )
}

export default App
