
import './App.css'
import ChipAutoComplete2 from './components/v2/ChipAutoComplete2'
//import ChipAutoComplete from './components/ChipAutoComplete'
//import {suggestions} from '../suggestions'

function App() {
    return <div className='bg-stone-200 
    min-h-screen min-w-screen flex flex-col justify-center items-center'>
    {/* <ChipAutoComplete suggestions={suggestions.data}/> */}
    <ChipAutoComplete2/>
    </div>
}

export default App
