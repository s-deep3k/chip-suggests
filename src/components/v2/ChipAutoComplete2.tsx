import { useState } from "react"
import Chips from "./Chips"
import InputSearch from "./InputSearch"
import ListSearch from "./ListSearch"
import { motion } from "framer-motion"

const ChipAutoComplete2 = () => {
  const [input,setInput] = useState<string>('')
  const handleInput =(val:string)=>{
    setInput(val)
  }
  const onChipChange =()=>{
    setInput('')
  }
  return (
    <>
        <motion.div
        initial={{y:-100,opacity:0}}
        animate={{y:0,opacity:1}}
        className="bg-stone-300 rounded-3xl p-2 border border-opacity-50 border-stone-400 
    flex w-[40%] h-[55px] min-w-[400px] gap-x-1 items-center">
        <Chips onRemove={onChipChange}/>
        <InputSearch initVal={input} onChange={handleInput}/>
        </motion.div>
        <motion.p 
        initial={{x:'-100vw', opacity:0.2}}
        animate={{x:0, opacity:1}}
        className="text-sm text-stone-500">
          Enter your favourite chips and enjoy! 
          Note: Only <span className="text-red-500">6</span> chips allowed!
        </motion.p>
        <ListSearch prompt={input} onClick={onChipChange}/>
    </>
  )
}

export default ChipAutoComplete2