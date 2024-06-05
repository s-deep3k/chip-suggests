import { useState } from "react";
import SearchInput from "./SearchInput"
import SearchList from "./SearchList"

const ChipAutoComplete = ({suggestions}:{suggestions:string[]}) => {
    //console.log(suggestions);
    const [suggest, changeSuggest] = useState('')
    const onInputChange = (val: string)=>{
        changeSuggest(val)
    }
  return (
    <>
    <SearchInput onChange={onInputChange}/>
    <SearchList list={suggestions} suggestion={suggest}/>
    </>
  )
}

export default ChipAutoComplete