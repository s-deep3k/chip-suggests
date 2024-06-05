import SearchInput from "./SearchInput"
import SearchList from "./SearchList"

const ChipAutoComplete = ({suggestions}:{suggestions:string[]}) => {
    console.log(suggestions);
    
  return (
    <>
    <SearchInput/>
    <SearchList/>
    </>
  )
}

export default ChipAutoComplete