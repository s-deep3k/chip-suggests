
const SearchList = ({list,onSelect}:{list: {suggestions:string[],select:string}, onSelect: (val:string)=>void}) => {
    const handleClick=(item: string)=>{
      onSelect(item)
    }
    const highlightSelect = (str:string, match?:string)=>{
      if(!match!.trim())
        return <span>{str}</span>
      const parts = str.split(new RegExp(`(${match})`,'gi'))
      return <span>
        {parts.map((part,index)=>part.toLowerCase() === match!.toLowerCase()?<span key={index} className="text-blue-400">{part}</span>:<span key={index}>{part}</span>)}
        </span>

    }
    
  return (
    <div className="max-h-[200px] mt-1 w-[400px] overflow-y-scroll bg-stone-50 rounded-lg shadow-md p-5">
        {list.suggestions.filter(item=>item.includes(list.select))
        .map((item,index)=>
        <div key={index} onClick={()=>handleClick(item)} 
        className="hover:bg-stone-200 rounded-lg transition ease-in-out">
          {highlightSelect(item,list.select)}
        </div>)}
    </div>
  )
}

export default SearchList