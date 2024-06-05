import { useState } from "react";
import SearchInput from "./SearchInput"
import SearchList from "./SearchList"
import Chip from "./Chip";

const ChipAutoComplete = ({suggestions}:{suggestions:string[]}) => {
    const [suggest, changeSuggest] = useState<string>('')
    const onInputChange = (val: string)=>{
        changeSuggest(val)
    }
  return (
    <>
        <div className="bg-stone-300 rounded-3xl p-2 border border-opacity-50 border-stone-400 
    flex w-[40%] h-[55px] min-w-[400px] gap-x-1 items-center">
        <Chip setChip={suggest}/>
        <SearchInput onChange={onInputChange}/>
        </div>
        <SearchList list={{suggestions,select:suggest}}/>
    </>
  )
}

export default ChipAutoComplete