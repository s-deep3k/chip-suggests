import { useRef, useState } from "react";
import SearchInput from "./SearchInput"
import SearchList from "./SearchList"
import Chip from "./Chip";

const ChipAutoComplete = ({suggestions}:{suggestions:string[]}) => {
    const [input, changeInput] = useState<string>('')
    const [chips,setChips] = useState<string[]>([])
    const chipRef = useRef(null)
    const onInputChange = (val: string)=>{
        changeInput(val)
    }
    const onChipChange = (chip: string)=>{
      chipRef.current!.addChip(chip)
      setChips(chipRef.current!.getChips())
    }
  return (
    <>
        <div className="bg-stone-300 rounded-3xl p-2 border border-opacity-50 border-stone-400 
    flex w-[40%] h-[55px] min-w-[400px] gap-x-1 items-center">
        <Chip ref={chipRef}/>
        <SearchInput onChange={onInputChange}/>
        </div>
        <SearchList list={{suggestions,select:input,chips}} onSelect={onChipChange}/>
    </>
  )
}

export default ChipAutoComplete