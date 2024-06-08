import { useSelector, useDispatch } from "react-redux"
import { AppDispatch, RootState } from "../../store"
import { RxCross2 } from "react-icons/rx"
import { removeChip } from "../../features/chipSlice"

const Chips = ({onRemove}:{onRemove:()=>void}) => {
  const chips = useSelector((state:RootState)=>state.chipReducer.chips)
  const dispatchChipAction = useDispatch<AppDispatch>() 
  return (
    <>
    {chips.length>0?chips.map((chip,index)=>(<div key={index} className="min-h-[90%] px-2 bg-slate-50 rounded-xl
      justify-center shadow-md shadow-stone-400 hover:shadow-stone-500 cursor-pointer">
       <span>
       <span className="font-semibold">{chip} <RxCross2 onClick={()=>{dispatchChipAction(removeChip(chip)); onRemove()}} className="text-slate-400 hover:text-slate-600"></RxCross2></span>
       </span>
    </div>)):null}
    </>
  )
}

export default Chips