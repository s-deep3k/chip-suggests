import { useState } from "react";

const SearchList = ({list,onSelect}:{list: {suggestions:string[],select:string,chips:string[]}, onSelect: (val:string)=>void}) => {
  const [searchList,setList] = useState<string[]>(list.suggestions)  
  const handleClick=(item: string)=>{
      console.log(item);
      onSelect(item)
      setList(prev=>prev.filter(item=>!list.chips.includes(item)))
    }
    const highlightSelect = (str:string, match?:string, matchColor?:string)=>{
      if(!match!.trim())
        return <span>{str}</span>
      const parts = str.split(new RegExp(`(${match})`,'gi'))
      return <span>
        {parts.map((part,index)=>part.toLowerCase() === match!.toLowerCase()?<span key={index} className={`text-${matchColor?matchColor:"blue"}-500`}>{part}</span>:<span key={index}>{part}</span>)}
        </span>

    }
    
  return (
    list.select!=='' && searchList.filter(item=>item.includes(list.select)).length>0 &&
    <div className="max-h-[500px] mt-1 w-[400px] overflow-y-scroll bg-stone-100 rounded-lg shadow-md p-5">
        {list.chips.length>0?
        searchList.filter(suggest=> !list.chips.includes(suggest))
        .filter(item=>item.includes(list.select))
        .map((item,index)=>
        <div key={index} onClick={()=>handleClick(item)} 
        className="hover:bg-stone-200 rounded-lg transition ease-in-out">
          {highlightSelect(item,list.select,"blue")}
        </div>):
        (searchList.filter(item=>item.includes(list.select))
        .map((item,index)=>
        <div key={index} onClick={()=>handleClick(item)} 
        className="hover:bg-stone-200 rounded-lg transition ease-in-out">
          {highlightSelect(item,list.select,"blue")}
        </div>
        ))}
      </div>
        )
}

export default SearchList