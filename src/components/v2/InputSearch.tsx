
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../../store"
import { backspaceRemoveChip } from "../../features/chipSlice"

const InputSearch = ({initVal, onChange}:{initVal:string, onChange:(val:string)=>void}) => {
  const chips = useSelector((state:RootState)=>state.chipReducer.chips)
  const dispatch:AppDispatch =useDispatch()
  return (
    <>
    <input
     className="bg-transparent focus:outline-none " 
     value={initVal}
     autoFocus={initVal===''}
     onKeyDown={(e)=>{e.key==='Backspace'?dispatch(backspaceRemoveChip()):null}}
     disabled={chips.length>5}
     onChange={(e)=>onChange(e.target.value)}
     type="text" 
     placeholder="Enter here!" />
</>
  )
}

export default InputSearch