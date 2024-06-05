import { useState } from "react"

const Chip = ({setChip}:{setChip:string}) => {
  const [chips, setChips] = useState<string[]>(['React'])
  
  const noEmptyChip = ()=>{
    setChips(prev=>prev.filter(chip=>chip!==''))
  }
  // if(setChip!=='')
  //   {
  //     setChips(prev=>prev.concat(setChip))
  //     setChip=''
  //     noEmptyChip()
  //   }
  const removeChip = (chip:string)=>{
    setChips(prevChips=>
      prevChips.filter(prev=> prev!==chip)
    )
    noEmptyChip()
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
}

export default Chip