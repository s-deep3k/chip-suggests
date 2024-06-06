import { useState, forwardRef, useImperativeHandle, useEffect} from "react"
import { RxCross2 } from "react-icons/rx"

const Chip = forwardRef((_,ref) => {
  const [chips, setChips] = useState<string[]>([])
  
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
      chips
    }
  })
  const addChip = (chip:string)=>{
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
    {chips.length>0?chips.map((chip,index)=>(<div key={index} className="min-h-[90%] max-w-screen-sm px-2 bg-slate-50 rounded-xl
     inline-flex justify-center shadow-md shadow-stone-400 hover:shadow-stone-500 cursor-pointer">
       <span className="font-semibold">{chip} <RxCross2 stroke="#ddddd" onClick={()=>removeChip(chip)} className="text-slate-400 hover:text-slate-600 flex-initial"></RxCross2></span> 
    </div>)):null}
    </>
  )
})
//<span onClick={()=>removeChip(chip)} className="text-slate-400 hover:text-red-500 flex-initial">X</span>
export default Chip