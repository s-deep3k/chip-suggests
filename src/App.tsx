
import './App.css'
import ChipAutoComplete from './components/ChipAutoComplete'
import {suggestions} from '../suggestions'

function App() {
    return <>
    <ChipAutoComplete suggestions={suggestions.data}/>
    </>
}

export default App
