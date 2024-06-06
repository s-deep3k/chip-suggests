import { useState, forwardRef, useImperativeHandle, useEffect} from "react"

const Chip = forwardRef((props,ref) => {
  const [chips, setChips] = useState<string[]>(['React'])
  
  const noEmptyChip = ()=>{
    setChips(prev=>prev.filter(chip=>chip!==''))
  }
  useEffect(()=>{
    noEmptyChip()
  },[])
  useImperativeHandle(ref,()=>{
    return {
      addChip,
      removeChip
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
    {chips.length>0?chips.map((chip,index)=>(<div key={index} className="h-[90%] px-2 bg-slate-50 rounded-xl
     flex flex-col justify-center shadow-md shadow-stone-400 hover:shadow-stone-500 cursor-pointer">
       <span className="font-semibold">{chip} <span onClick={()=>removeChip(chip)} className="text-slate-400 hover:text-red-500 flex-initial">X</span></span> 
    </div>)):null}
    {/* <div className="h-[90%] px-2 bg-slate-50 rounded-xl
     flex flex-col justify-center shadow-md shadow-stone-400 hover:shadow-stone-500 cursor-pointer">
       <span className="font-semibold">React <span className="text-slate-400 flex-initial">X</span></span> 
    </div> */}
    </>
  )
})

export default Chip