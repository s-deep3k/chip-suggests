import { useState } from "react"
import Chip from "./Chip"

const SearchInput = ({onChange}:{onChange: (val: string) => void}) => {
    const [val, setVal] = useState('')
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        setVal(e.target!.value)
        onChange(e.target!.value)
    }
  return (
    <div className="bg-stone-300 rounded-3xl p-2 border border-opacity-50 border-stone-400 
    flex w-[40%] h-[55px] min-w-[400px] gap-x-1 items-center">
        <Chip/>
        <input
         className="bg-transparent focus:outline-none" 
         value={val}
         onChange={handleInputChange} 
         type="text" 
         placeholder="Enter a chip of your choice!" />
    </div>
  )
}

export default SearchInput