//import { useState } from "react"

const SearchInput = ({onChange}:{onChange: (val: string) => void}) => {
    //const [val, setVal] = useState('')
    const handleInputChange = (value:string)=>{
        //setVal(e.target!.value)
        onChange(value!)
    }
  return (
    <>
        <input
         className="bg-transparent focus:outline-none" 
         //value={val}
         onChange={(e)=>handleInputChange(e.target.value)} 
         type="text" 
         placeholder="Enter a chip of your choice!" />
    </>
  )
}

export default SearchInput