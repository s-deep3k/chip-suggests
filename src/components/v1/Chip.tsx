import { useState, forwardRef, useImperativeHandle, useEffect} from "react"
import { RxCross2 } from "react-icons/rx"

const Chip = forwardRef((_,ref) => {
  const [chips, setChips] = useState<string[]>([])
  
  const getChips=()=>chips
  const noEmptyChip = ()=>{
    setChips(prev=>prev.filter(chip=>chip!==''))
  }
  useEffect(()=>{
    noEmptyChip()
  },[])
  useImperativeHandle(ref,()=>{
    return {
      addChip,
      removeChip,
      getChips
    }
  })
  const addChip = (chip:string)=>{
    if(chips.filter(items=>items.includes(chip)).length>0){
      alert("No Duplicate Chips can be added!")
      return
    }
    if(chip!=='')
      setChips(prevChips=>[...prevChips,chip])
  }
  const removeChip = (chip:string)=>{
    setChips(prevChips=>
      prevChips.filter(prev=> prev!==chip)
    )
  }
  return (
    <>
    {chips.length>0?chips.map((chip,index)=>(<div key={index} className="min-h-[90%] px-2 bg-slate-50 rounded-xl
      justify-center shadow-md shadow-stone-400 hover:shadow-stone-500 cursor-pointer">
       <span>
       <span className="font-semibold">{chip} <RxCross2 onClick={()=>removeChip(chip)} className="text-slate-400 hover:text-slate-600"></RxCross2></span>
       </span>
    </div>)):null}
    </>
  )
})
export default Chip