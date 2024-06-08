import { useSelector, useDispatch } from "react-redux"
import { AppDispatch, RootState } from "../../store"
import { RxCross2 } from "react-icons/rx"
import { removeChip } from "../../features/chipSlice"
import { updateList } from "../../features/searchListSlice"
import { motion } from "framer-motion"

const Chips = ({onRemove}:{onRemove:()=>void}) => {
  const chips = useSelector((state:RootState)=>state.chipReducer.chips)
  const dispatch = useDispatch<AppDispatch>() 
  return (
    <>
    {chips.length>0?chips.map((chip,index)=>(
    <motion.button
      initial={{scale:0.2}}
      animate={{scale:1}}
      exit={{scale:0.2}}
      key={index} 
      className="min-h-[90%] px-2 bg-slate-50 rounded-xl
      justify-center shadow-md shadow-stone-400 hover:shadow-stone-500 cursor-pointer">
       <span className="font-semibold">{chip} <RxCross2 onClick={()=>{dispatch(removeChip(chip)); onRemove(); dispatch(updateList({type:"CHIP REMOVED",chip}))}} className="text-slate-400 hover:text-slate-600"></RxCross2></span>
    </motion.button>)):null}
    </>
  )
}

export default Chips