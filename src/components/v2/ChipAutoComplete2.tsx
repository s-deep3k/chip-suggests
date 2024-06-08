import { useState } from "react"
import Chips from "./Chips"
import InputSearch from "./InputSearch"
import ListSearch from "./ListSearch"

const ChipAutoComplete2 = () => {
  const [input,setInput] = useState<string>('')
  const handleInput =(val:string)=>{
    setInput(val)
  }
  const onChipChange =()=>{
    setInput('')
  }
  return (
    <>
        <div className="bg-stone-300 rounded-3xl p-2 border border-opacity-50 border-stone-400 
    flex w-[40%] h-[55px] min-w-[400px] gap-x-1 items-center">
        <Chips onRemove={onChipChange}/>
        <InputSearch initVal={input} onChange={handleInput}/>
        </div>
        <ListSearch prompt={input} onClick={onChipChange}/>
    </>
  )
}

export default ChipAutoComplete2