
const SearchList = ({list, suggestion}:{list: string[], suggestion?: string}) => {
    console.log(suggestion);
    const handleClick=(item: string)=>{
      console.log(item);
      
    }
    
  return (
    <div className="max-h-[200px] mt-1 w-[400px] overflow-y-scroll bg-stone-50 rounded-lg shadow-md p-5">
        {suggestion?(list.map((item,index)=><div key={index} onClick={()=>handleClick(item)} className="hover:bg-stone-200 rounded-lg transition ease-in-out">{item}</div>)):<div>No Suggestions yet!</div>}
    </div>
  )
}

export default SearchList