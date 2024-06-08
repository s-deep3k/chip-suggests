
import './App.css'
import ChipAutoComplete from './components/ChipAutoComplete'
import {suggestions} from '../suggestions'

function App() {
    return <div className='bg-stone-200 
    min-h-screen min-w-screen container flex flex-col justify-center items-center'>
    <ChipAutoComplete suggestions={suggestions.data}/>
    </div>
}

export default App
